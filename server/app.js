import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import pkg from 'body-parser';
import { v4 as uuidv4 } from 'uuid';
import {RegisterModel} from './db.js';
import {email_template} from './TemplateEmail.js';
import {email_template_eng} from './TemplateEmailEng.js';

import nodemailer from 'nodemailer';
import { generatePDFInvoice, generatePDF_freePass, generateQRDataURL } from './generatePdf.js';
import PDFDocument from 'pdfkit';

const { json } = pkg
const app = express()
app.use(json())
app.use(express.urlencoded({extended: true}));
app.use(cors({
  origin: (origin, callback) => {
    const ACCEPTED_ORIGINS = process.env.ACCEPTED_ORIGINS.split(',')

    if (ACCEPTED_ORIGINS.includes(origin)) {
      return callback(null, true)
    }
    if (!origin) {
      return callback(null, true)
    }
    return callback(new Error('Not allowed by CORS'))
  }
}))


const PORT = process.env.PORT || 3010
const environment = process.env.ENVIRONMENT || 'sandbox';
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const endpoint_url = environment === 'sandbox' ? 'https://api-m.sandbox.paypal.com' : 'https://api-m.paypal.com';

app.post('/create-order', (req, res) => {    
    const { body } = req;
    
    if(body.total != 3500){
        return res.status(500).send({
            status: false,
            message: 'Tu compra no pudo ser procesada, la información no es valida...'
        });
    }

    get_access_token()
        .then(access_token => {
            let order_data_json = {
                'intent': "CAPTURE",
                'purchase_units': [{
                    'amount': {
                        'currency_code': 'MXN',
                        'value': body.total                        
                    },                                             
                    'description': 'Venta de Programa VIP ITM 2024 online',
                }]
            };
            const data = JSON.stringify(order_data_json)

            fetch(endpoint_url + '/v2/checkout/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${access_token}`
                    },
                    body: data
                })
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    res.send(json);
                }) //Send minimal data to client
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
});

app.post('/complete-order', async (req, res) => {
    const { body } = req;    
    try {
        const uuid = uuidv4();                
        const userResponse = await RegisterModel.create_user({ uuid, ...body });
        const { insertId } = userResponse;

        if(!userResponse.status){
            return  res.status(500).send({
                ...userResponse
            });
        }

        const access_token = await get_access_token();
        const response = await fetch(endpoint_url + '/v2/checkout/orders/' + req.body.orderID + '/capture', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            }
        });
        const json = await response.json();
        console.log(JSON.stringify(json));
        if (json.id) {
            if(json.purchase_units[0].payments.captures[0].status === 'COMPLETED' || json.purchase_units[0].payments.captures[0].status === 'PENDING' ){
                
                const paypal_id_order = json.id;
                const paypal_id_transaction = json.purchase_units[0].payments.captures[0].id;                     
                await RegisterModel.save_order(insertId, paypal_id_order, paypal_id_transaction, body.total);

                const pdfAtch = await generatePDFInvoice(paypal_id_transaction, body, uuid);

                const mailResponse = await sendEmail(body, pdfAtch, paypal_id_transaction);   
        
                return res.send({
                    ...mailResponse,
                    invoice: `${paypal_id_transaction}.pdf`
                });                
            }
        } else {        
            return res.status(500).send({
                status: false,
                message: 'Tu compra no pudo ser procesada, hay un problema con tu metodo de pago por favor intenta mas tarde...'
            });
        }       
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status: false,
            message: 'hubo un error al procesar tu compra, por favor intenta mas tarde...'
        });
    }
});

app.post('/free-register', async (req, res) => {
    const { body } = req;

    try {        
        const data = { 
            uuid: uuidv4(),            
            ...body
        };          
        const userResponse = await RegisterModel.create_user({ ...data }); 

        if(!userResponse.status){
            return  res.status(500).send({
                ...userResponse
            });
        }
        
        const currentDate = new Date();
        const timestamp = currentDate.getTime();
        const registerFile = 'registro-gratis-' + timestamp;

        const pdfAtch = await generatePDF_freePass(body, data.uuid, registerFile);

        const mailResponse = await sendEmail(data, pdfAtch, registerFile);   

        return res.send({
            ...mailResponse,
            invoice: `${registerFile}.pdf`
        });                
               
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status: false,
            message: 'hubo un error al procesar tu registro, por favor intenta mas tarde...'
        });
    }
});

app.get('/get-postalcode/:cp', async (req, res) => {
    const { cp } = req.params;
    const response = await RegisterModel.get_postal_code({cp});
    if(response.status){
        return res.send({
            status: true,
            records: response.result
        })
    }else{
        return res.status(500).send({
            status: false,
            message: 'No se encontraron resultados...'
        });
    }    
})

app.get('/get-user-by-email', async (req, res) => {
    const { email, requireNonVip = 'true' } = req.query;
    const response = await RegisterModel.get_user_by_email(email, JSON.parse(requireNonVip));
    if (response.error) {
        res.status(404).send({
            message: response.error
        });
    } else {
        res.send(response.user);
    }
});

app.post('/upgrade-user', async (req, res) => {
    const { body } = req;
    const userResponse = await RegisterModel.get_user_by_email(body.email);
    if (!userResponse.status) {
        return res.status(404).send({
            message: userResponse.error
        });
    }
    try {
        const data = { 
            total: body.total,
            item: body.item,
            ...userResponse.user
        };

        console.log(data)

        const access_token = await get_access_token();
        const response = await fetch(endpoint_url + '/v2/checkout/orders/' + body.orderID + '/capture', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            }
        });
        const json = await response.json();
        if (json.id) {
            if(json.purchase_units[0].payments.captures[0].status === 'COMPLETED' || json.purchase_units[0].payments.captures[0].status === 'PENDING' ){
                
                const paypal_id_order = json.id;
                const paypal_id_transaction = json.purchase_units[0].payments.captures[0].id;                     
                await RegisterModel.save_order(data.id, paypal_id_order, paypal_id_transaction, body.total);

                const pdfAtch = await generatePDFInvoice(paypal_id_transaction, data, data.uuid);

                const mailResponse = await sendEmail(data, pdfAtch, paypal_id_transaction);   
        
                return res.send({
                    ...mailResponse,
                    invoice: `${paypal_id_transaction}.pdf`
                });                
            }
        } else {        
            return res.status(500).send({
                status: false,
                message: 'Tu compra no pudo ser procesada, hay un problema con tu metodo de pago por favor intenta mas tarde...'
            });
        }       
    } catch (err) {
        return res.status(500).send({
            status: false,
            message: 'hubo un error al procesar tu compra, por favor intenta mas tarde...'
        });
    }
});

app.use(express.static('public'));

app.get('/generate-pdf', async (req, res) => {
  
  const doc = new PDFDocument();
  // Set the response type to PDF
  res.setHeader('Content-Type', 'application/pdf');

  // Pipe the PDF into the response
  doc.pipe(res);

  // Draw a dashed cross in the middle of the document
  const midX = doc.page.width / 2;
  const midY = doc.page.height / 2;

  doc.save();
  doc.lineWidth(2);
  doc.dash(5, { space: 5 });

  // Vertical dashed line
  doc.moveTo(midX, 0)
     .lineTo(midX, doc.page.height)
     .stroke();
  // Horizontal dashed line
  doc.moveTo(0, midY)
     .lineTo(doc.page.width, midY)
     .stroke();
  doc.restore();


  doc.image('img/header_ITM.jpg', -20, -15, { width: 325 });
  // aqui iria el QR con info del usuario
  const imageQr = await generateQRDataURL('uuid-1234567890');
  doc.image(imageQr, 90, 120, { width: 120 });
  
  doc
  .font('Helvetica-Bold')
  .fontSize(18)
  .text('Juan', 30, 240)
  .text('Perez')
  .fontSize(12)
  .font('Helvetica')
  .text('CEO/Founder')
  .moveDown(0.5)
  .text('IGECO');

  doc.image('img/footer_ITM.jpg', 0, 328, { width: 305 });
  doc
  .font('Helvetica-Bold')
  .fontSize(17)
  .text('INSTRUCCIONES PARA TU VISITA', 310, 10, {
    width: 300,
    align: 'center'
  })
  .moveDown(0.2);

  doc.text(' GUIDELINES FOR YOUR VISIT', {
    width: 300,
    align: 'center'
  }).moveDown(1);
  
  doc.font('Helvetica-Bold')
  .fontSize(8)
  .text('1.', 330)
  .font('Helvetica')
  .text('Tu gafete es tu pase a la exposición de ITM 2024. Deberás portarlo en todo momento.', 345, 75, {
    width: 250,
    align: 'justify'
  })  
  doc.text('Your badge is your access pass to ITM 2024 tradeshow. You must wear it at all times.',{
    width: 250,
    align: 'justify'
  })
  .moveDown(1); 

  doc.font('Helvetica-Bold')
  .fontSize(8)
  .text('2.', 330)
  .font('Helvetica')
  .text('El gafete es personal e intransferible. Por motivos de seguridad, podemos solicitarte al ingreso de la exposición una identificación con fotografía.', 345, 120, {
    width: 250,
    align: 'justify'
  })
  .text('The badge is personal and non-transferable. For security reasons, we may ask for an ID with picture at the entrance of the exhibition.', {
    width: 250,
    align: 'justify'
  })
  .moveDown(1); 
  doc.font('Helvetica-Bold')
  .fontSize(8)
  .text('3.', 330)
  .font('Helvetica')
  .text('Disfruta tu visita y utiliza el hashtag', 345, 175, {
    width: 250,    
    continued: true
  })
  .fillColor('#1E92D0')
  .font('Helvetica-Bold')
  .text(' #ITM2024 ', { continued: true })
  .fillColor('black')
  .font('Helvetica')
  .text(' en tus posteos en redes sociales.')
  .text('Enjoy your visit and use the hashtag', {
    width: 250,    
    continued: true
  })
  .fillColor('#1E92D0')
  .font('Helvetica-Bold')
  .text(' #ITM2024 ', { continued: true })
  .fillColor('black')
  .font('Helvetica')
  .text(' on your social media posts.')
  .moveDown(2);
  
  doc
  .font('Helvetica-Bold')
  .text('HORARIOS / SCHEDULE',{
    width: 250,    
    align: 'center'
  })
  .moveDown(1)
  .text('Octubre')
  .text('October')
  .text('(9) 11:00 am – 19:00 hrs', 330, 250, {
    width: 250,    
    align: 'center'
  })
  .text('(10)  11:00 am – 19:00 hrs', 330, 260, {
    width: 250,    
    align: 'center'
  })
  .text('(11)  11:00 am – 17:00 hrs', 330, 270, {
    width: 250,    
    align: 'center'
  })
  .moveDown(1)
  .text('ITALIAN GERMAN EXHIBITION COMPANY MEXICO', {
    width: 250,    
    align: 'center'
  });

  doc.image('img/footer2_ITM.jpg', 307, 328, { width: 306 });
  
  doc.save();
  // Rotate and draw some text
  doc.rotate(180, {origin: [150, 305]})
  .fillColor('red')  
  .fontSize(20)
  .text('AVISO / DISCLAIMER', 15, -140, {
    width: 250,
    align: 'center'
  
  })
  .moveDown(1)
  .fillColor('black')  
  .fontSize(12)
  .text('Agilice su entrada imprimiendo su acreditación o llevando este documento en su teléfono móvil. Speed up your entrance by printing your badge or carrying this document on your cell phone.', {
    width: 250,
    align: 'justify'
  
  })
  .moveDown(1)
  .text('El gafete es personal e intransferible y se imprimirá una sola vez en el módulo de registro digital. The badge is personal and non-transferable and will be printed once at the digital registration module.', {
    width: 250,
    align: 'justify'
  
  })
  .moveDown(1)
  .text('n caso de que pierdas tu gafete y necesites reimprimirlo, se cobrará una cuota de $300 MXN. In case you lose your badge and need to reprint it, a replacement fee of $300 MXN will be charged.', {
    width: 250,
    align: 'justify'
  
  });

  doc.fontSize(14)
  .text('BADGE FOLDING / PLEGADO DE GAFETE', -360, -140, {
    width: 400,
    align: 'center'
  });

  doc.rotate(180, {origin: [-170, 50]})
  .image('img/indicaciones_ITM.jpg', -330, -100, { width: 305 });

  // Restore the previous state to avoid rotating everything else
  doc.restore();
  
  doc.end();
});

app.get('/template-email', async (req, res) => {
    const data = {
        name: 'Juan',
        paternSurname: 'Perez',
        maternSurname: 'Gomez',
        email: ''
    }
    const emailContent = await email_template({ ...data });
    res.send(emailContent);
});


async function sendEmail(data, pdfAtch = null, paypal_id_transaction = null){    
    try{
        // Nodemailer setup
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_GMAIL,
            port: process.env.PORT_GMAIL,
            secure: true,
            auth: {
                user: process.env.USER_GMAIL,
                pass: process.env.PASS_GMAIL
            }
        });

        const emailContent = data.currentLanguage === 'es' ?  await email_template({ ...data }) : await email_template_eng({ ...data });

        const mailOptions = {
            from: process.env.USER_GMAIL,
            to: data.email,
            subject: 'Confirmación de pre registro ITM 2024',
            attachDataUrls: true,
            html: emailContent,            
            attachments: pdfAtch ? [
                {
                    filename: `${paypal_id_transaction}.pdf`,
                    path: pdfAtch,
                    contentType: 'application/pdf'
                }
            ] : []
        };

        await transporter.sendMail(mailOptions);

        return {
            status: true,
            message: 'Gracias por registrarte, te hemos enviado un correo de confirmación a tu bandeja de entrada...'
        };

    } catch (err) {
        console.log(err);
        return {
            status: false,
            message: 'No pudimos enviarte el correo de confirmación de tu registro, por favor descarga tu registro en este pagina y presentalo hasta el dia del evento...'
        };              
    }    
}

function get_access_token() {
    const auth = `${client_id}:${client_secret}`
    const data = 'grant_type=client_credentials'
    return fetch(endpoint_url + '/v1/oauth2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${Buffer.from(auth).toString('base64')}`
            },
            body: data
        })
        .then(res => res.json())
        .then(json => {
            return json.access_token;
        })
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})