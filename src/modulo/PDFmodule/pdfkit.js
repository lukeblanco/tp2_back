import PDFDocument from 'pdfkit';
import { createWriteStream } from 'fs';


export default class pdfGenerator {

    constructor() {
    }

    crearPDF(text) {
        const doc = new PDFDocument();
        //const ventasString = JSON.stringify(json)
        //const {nombre, producto, precio} = json
        //console.log(ventasString)
        
        doc.pipe(createWriteStream('../src/modulos/PDFmodule/output.pdf'));

        doc.image('../src/modulos/PDFmodule/mila-logo.png', 430, 15, {fit: [150, 150], align: 'center', valign: 'center'});
        
        doc.font('Courier')
            .fontSize(14)
            .moveDown(0.5)
            .text(text, 100, 100,{
            width: 410,
            align: 'left'
        });
        doc.end();
    }
}