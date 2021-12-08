import { getVentasSinProcesarDao } from "../daos/index.js";
import { getExchangeEth } from "../modulo/getRate/index.js";
import { getEnviadorDeMails } from "../modulo/envioDeMails/index.js";
import { getPdfGenerator } from "../modulo/PDFmodule/index.js";

export default class FinalizaCompraenEth {
  constructor() {
    this.ventas = getVentasSinProcesarDao();
    this.exchange = getExchangeEth();
    this.emailer = getEnviadorDeMails();
    this.pdfmaker = getPdfGenerator();
  }

  async compraenEth(idVenta) {
    const venta = this.ventas.findById(idVenta); //obtengo venta
    const preciofinal = venta.productos
      .map((item) => item.precio)
      .reduce((prev, curr) => prev + curr, 0); //calculo el precio
    const precioEth = await this.exchange.exchangeEth(preciofinal);//cambio de moneda
    const newObj = {
      nombre: venta.id,
      producto: venta.productos,
      precio: precioEth,
    }; //creo objeto
    this.pdfmaker.crearPDF(JSON.stringify(newObj)); //creo pdf
    await this.emailer.enviar({
      destinatario: venta.email,
      asunto: "Venta en Ethereum Realizada",
      contenido: "Revisar PDF para detalle de venta",
      path: "./src/modulo/PDFmodule/output.pdf",
    });             //enviar mail
    console.log("Enviado");
  }
}