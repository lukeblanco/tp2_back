import { getEnviadorDeMails } from '../modulo/envioDeMails/index.js';
import { getDaoVentas } from '../daos/index.js'
import pdfmaker from '../modulo/PDFmodule/pdfkit.js'

const pdfmake = new pdfmaker()
const emailer = getEnviadorDeMails()
const daoVentas = getDaoVentas()

export async function notificarVentaconPDF(venta) {
    try {
    const emailer = getEnviadorDeMails()
    const newObj = {nombre:venta.email,producto:venta.producto,precio:venta.precio}   
    const ventaString = JSON.stringify(newObj)
    console.log("GET venta..." + ventaString)
    console.log("Creando PDF...")
    pdfmake.crearPDF(ventaString)
    console.log("Enviando mail...")
    await emailer.enviar({
        destinatario: venta.email,
        asunto: 'Venta Realizada',
        contenido: "Revisar PDF para detalle de venta",
        path: './src/modulo/PDFmodule/output.pdf'
    })
} catch (error) {
    throw new Error(`NOTIFICAR-VENTA-CON-PDF_ERROR: ${error.message}`)
    
}}
