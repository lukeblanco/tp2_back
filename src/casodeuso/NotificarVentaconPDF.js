import { getEnviadorDeMails } from '../modulo/envioDeMails/index.js';
import { getDaoVentas } from '../daos/index.js'
import pdfmaker from '../modulo/PDFmodule/pdfkit.js'
//import VentasDao from '../daos/VentasDao.js';

const pdfmake = new pdfmaker()
const emailer = getEnviadorDeMails()
const daoVentas = getDaoVentas()

export async function notificarVentaconPDF(venta) {
    const emailer = getEnviadorDeMails()
    // const venta = daoVentas.findById(idVenta)
    // const destinatario = venta.email
    const newObj = {nombre:venta.nameUser,producto:venta.products,precio:venta.price}   
    const ventaString = JSON.stringify(newObj)
    console.log("GET venta..." + ventaString)
    console.log("Creando PDF...")
    pdfmake.crearPDF(ventaString)

    console.log("Enviando el mail...")
    await emailer.enviar({
        destinatario: venta.email,
        asunto: 'Venta Realizada',
        contenido: "Revisar PDF para detalle de venta",
        path: '../src/modulos/PDFmodule/output.pdf'
    })
}
