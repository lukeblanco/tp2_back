import exchange from "../modulo/getRate/exchange.js";
const er = new exchange();
import pdfmaker from '../modulo/PDFmodule/pdfkit.js'
import { getEnviadorDeMails } from '../modulo/envioDeMails/index.js';

export async function compraenEth(idVenta) {
    var suma = 0;
    const venta = idVenta
    console.log(venta)
    const pdfmake = new pdfmaker()
    var precioEth = await er.exchangeEth(venta.precio);
    const newObj = {nombre:venta.nombre,producto:venta.producto,precio:precioEth}   
    const ventaEthString = JSON.stringify(newObj)
    pdfmake.crearPDF(ventaEthString)
    const emailer = getEnviadorDeMails() 
  console.log("Enviando el mail...")
  
  await emailer.enviar({
      destinatario: venta.email,
      asunto: 'Venta en Ethereum Realizada',
      contenido: "Revisar PDF para detalle de venta",
      path: './src/modulo/PDFmodule/output.pdf'
  })
}