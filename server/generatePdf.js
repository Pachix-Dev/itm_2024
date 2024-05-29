import PDFDocument from 'pdfkit';
import QRCode from 'qrcode';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

// Helper function to generate QR code as a data URL
async function generateQRDataURL(text) {
    try {
        return await QRCode.toDataURL(text);
    } catch (error) {
        console.error('Error generating QR code:', error);
        throw error; // Rethrow to handle it in the calling context
    }
}

function formatAmountMXN(amount) {
    const formattedAmount = new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2,
    }).format(amount)

    return formattedAmount
}

function getSpanishDateString(date) {
    const months = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
  
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
  
    return `${day} de ${months[monthIndex]} de ${year}`;
}

// Function to generate PDF invoice
async function generatePDFInvoice(paypal_id_transaction, body, uuid) {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const outputPath = path.resolve(__dirname, '../invoices');
    const pdfSave = path.join(outputPath, `${paypal_id_transaction}.pdf`);

    const doc = new PDFDocument();
    const pdfStream = fs.createWriteStream(pdfSave);            
    const logoVev = path.resolve(__dirname, 'Logo_ITM.jpg');  

    const imageQr = await generateQRDataURL(paypal_id_transaction);
      
    doc.pipe(pdfStream);             
    doc.image(logoVev, 50, 45, { width: 100 });    
    doc
        .fillColor("#444444")
        .fontSize(20)
        .fontSize(10)
        .text("ITALIAN GERMAN EXHIBITION COMPANY ME.", 200, 50, { align: "right" })
        .text("Blvrd Francisco Villa 102-piso 14, Oriental, 37510 ", 200, 65, { align: "right" })
        .text("León de los Aldama, Gto.", 200, 80, { align: "right" })
        .moveDown();
    doc
        .fillColor("#444444")
        .fontSize(20)
        .text("Recibo de Compra", 50, 160);
    doc
        .strokeColor("#aaaaaa")
        .lineWidth(1)
        .moveTo(50, 185)
        .lineTo(550, 185)
        .stroke();

    doc
        .fontSize(10)
        .text("N° transacción:", 50, 200)
        .font("Helvetica-Bold")
        .text(paypal_id_transaction, 150, 200)
        .font("Helvetica")
        .text("Fecha:", 50, 200 + 15)
        .text(getSpanishDateString(new Date()), 150, 200 + 15)
        .text("Total:", 50, 200 + 30)
        .text(formatAmountMXN(body.total),150,200 + 30)
        .font("Helvetica-Bold")
        .text(body.name, 300, 200)
        .font("Helvetica")
        .text(body.email, 300, 200 + 15)
        .text(body.phone, 300, 200 + 30 )
        .moveDown();
    doc
        .strokeColor("#aaaaaa")
        .lineWidth(1)
        .moveTo(50, 252)
        .lineTo(550, 252)
        .stroke();
        
    doc
        .fontSize(10)
        .text('Descripcion', 50, 280)
        .text('Costo unitario', 280, 280, { width: 90, align: "right" })
        .text('cantidad', 370, 280, { width: 90, align: "right" })
        .text('Total', 0, 280, { align: "right" });
    doc
        .strokeColor("#aaaaaa")
        .lineWidth(1)
        .moveTo(50, 300)
        .lineTo(550, 300)
        .stroke();
        
    doc    
    .fontSize(10)
    .text(body.item.name, 50, 310)
    .text(formatAmountMXN(body.item.price), 320, 310 )
    .text('1', 450, 310)
    .text(formatAmountMXN(body.item.price), 0, 310, { align: "right" });
    
    doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, 330)
    .lineTo(550, 330)
    .stroke();
    
    doc.moveDown(2);    
    doc
        .fontSize(10)
        .text('Subtotal:       '+ formatAmountMXN(body.total), { width: 540, align: "right" });
    doc
        .fontSize(10)
        .font("Helvetica-Bold")
        .text('TOTAL:          ' + formatAmountMXN(body.total), { width: 540, align: "right" });    
    doc.image(imageQr, 50, 650, { width: 100 });

    const qrMainUser = await generateQRDataURL(uuid);       

    doc.addPage();
    doc.image(logoVev, 50, 45, { width: 100 });                
    doc
        .fillColor("#444444")    
        .fontSize(10)
        .text("Fecha del evento: 9 - 11 de octubre 2024", 10, 50, { align: "right" })
        .text("Horarios: 9:00 AM - 6:00 PM", 100, 65, { align: "right" })
        .text("Poliforum León", 100, 80, { align: "right" })
        .moveDown(5);
    
    doc.text('GRACIAS POR FORMAR PARTE DE ITM 2024...', 50);
                
    doc.text('Nombre: ' + body.name , 300, 240)
        .text('Correo: '+ body.email, 300, 260)
        .text('Teléfono: ' + body.phone, 300, 280);

    doc.image(qrMainUser, 100, 200, { width: 150 });
    doc.text(uuid, 90, 350);


    doc.moveDown(5);
    doc.text('INSTRUCCIONES PARA TU VISITA:', 50)
        .text('1.- IMPORTANTE: Es indispensable llevar tu pre-registro impreso o en formato digital para agilizar tu acceso al evento.',50)
        .text('2.- Recuerda llevar tu credencial oficial de empresa o negocio para verificar tus datos.',50)
        .text('3.- Tu acceso es único e intransferible y debe estar visible durante toda tu visita.')
        .text('4.- En caso de perder tu gafete, no habrá reimpresiones en el piso expositor. Por lo cual, se tendrá que generar una compra de boleto para su ingreso con un costo de $300 MXN.')        

  doc.end();
  return pdfSave;
}

async function generatePDF_freePass( body, uuid, registerFile) {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const outputPath = path.resolve(__dirname, '../invoices');
    const pdfSave = path.join(outputPath, `${registerFile}.pdf`);

    const doc = new PDFDocument();
    const pdfStream = fs.createWriteStream(pdfSave);            
    const logoVev = path.resolve(__dirname, 'Logo_ITM.jpg');  
    
    const qrMainUser = await generateQRDataURL(uuid);

    doc.pipe(pdfStream);    
    doc.image(logoVev, 50, 45, { width: 100 });                
    doc
        .fillColor("#444444")    
        .fontSize(10)
        .text("Fecha del evento: 9 - 11 de octubre 2024", 10, 50, { align: "right" })
        .text("Horarios: 9:00 AM - 6:00 PM", 100, 65, { align: "right" })
        .text("Poliforum León", 100, 80, { align: "right" })
        .moveDown(5);
    
    doc.text('GRACIAS POR FORMAR PARTE DE ITM 2024...', 50);
                
    doc.text('Nombre: ' + body.name , 300, 240)
        .text('Correo: '+ body.email, 300, 260)
        .text('Teléfono: ' + body.phone, 300, 280);

    doc.image(qrMainUser, 100, 200, { width: 150 });
    doc.text(uuid, 90, 350);


    doc.moveDown(5);
    doc.text('INSTRUCCIONES PARA TU VISITA:', 50)
        .text('1.- IMPORTANTE: Es indispensable llevar tu pre-registro impreso o en formato digital para agilizar tu acceso al evento.',50)
        .text('2.- Recuerda llevar tu credencial oficial de empresa o negocio para verificar tus datos.',50)
        .text('3.- Tu acceso es único e intransferible y debe estar visible durante toda tu visita.')
        .text('4.- En caso de perder tu gafete, no habrá reimpresiones en el piso expositor. Por lo cual, se tendrá que generar una compra de boleto para su ingreso con un costo de $300 MXN.')        

  doc.end();
  return pdfSave;
}

export { generatePDFInvoice, generatePDF_freePass };
