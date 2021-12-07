import exchange from "../modulo/getRate/exchange.js";
import { getVentasSinProcesarDao } from "../daos/index.js";
const er = new exchange();
const daoVentas = getVentasSinProcesarDao();
export async function finalizarCompra(id) {
  try {
    //const venta = daoVentas.findById(id);
    const product = daoVentas.findProductosById(id);
    //const suma = venta.productos
    const suma = product.map((item) => item.precio)
    .reduce((prev, curr) => prev + curr, 0);
      console.log(suma)
    const final = await er.exchangeEth(suma);
    
    return final;
  } catch (error) {
    throw new Error(`FINALIZAR_COMPRA ${error.message}`);
  }
}
