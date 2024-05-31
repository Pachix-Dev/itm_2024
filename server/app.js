import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import pkg from 'body-parser';
import { v4 as uuidv4 } from 'uuid';
import {RegisterModel} from './db.js';
import {email_template} from './TemplateEmail.js';
import nodemailer from 'nodemailer';
import { generatePDFInvoice, generatePDF_freePass } from './generatePdf.js';

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


const PORT = process.env.PORT || 3002
const environment = process.env.ENVIRONMENT || 'sandbox';
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const endpoint_url = environment === 'sandbox' ? 'https://api-m.sandbox.paypal.com' : 'https://api-m.paypal.com';

app.post('/create-order', (req, res) => {    
    const { body } = req;
    
    if(body.total != 7500){
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
                        'value': 7500                        
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
        console.log(body);
        const data = { 
            uuid: uuidv4(), 
            total: body.total,
            name: body.name,
            paternSurname: body.paternSurname,
            maternSurname: body.maternSurname,
            email: body.email,
            phone: body.phone,
            typeRegister: body.typeRegister,
            genre:  body.genre,
            age: body.age,
            linkedin: body.linkedin,
            company: body.company,
            industry: body.industry,
            position: body.position,
            country: body.country,
            city: body.city,
            address: body.address,
            colonia: body.colonia,
            postalCode: body.postalCode,
            webPage: body.webPage,
            phoneCompany: body.phoneCompany,
            eventKnowledge: body.eventKnowledge,
            productInterest: body.productInterest,
            levelInfluence: body.levelInfluence,
            wannaBeExhibitor: body.wannaBeExhibitor,
        };
        
        const userResponse = await RegisterModel.create_user({ ...data });
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

                const pdfAtch = await generatePDFInvoice(paypal_id_transaction, body, data.uuid);

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
            name: body.name,
            paternSurname: body.paternSurname,
            maternSurname: body.maternSurname,
            email: body.email,
            phone: body.phone,
            typeRegister: body.typeRegister,
            genre:  body.genre,
            age: body.age,
            linkedin: body.linkedin,
            company: body.company,
            industry: body.industry,
            position: body.position,
            country: body.country,
            city: body.city,
            address: body.address,
            colonia: body.colonia,
            postalCode: body.postalCode,
            webPage: body.webPage,
            phoneCompany: body.phoneCompany,
            eventKnowledge: body.eventKnowledge,
            productInterest: body.productInterest,
            levelInfluence: body.levelInfluence,
            wannaBeExhibitor: body.wannaBeExhibitor,
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

        const emailContent = await email_template({ ...data });

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