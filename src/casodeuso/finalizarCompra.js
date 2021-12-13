import { getExchangeEth } from "../modulo/getRate/index.js";
import { getVentasSinProcesarDao } from "../daos/index.js";

const exchange = getExchangeEth();
const daoVentas = getVentasSinProcesarDao();

export async function finalizarCompra(id) {
  try {
    const productos = daoVentas.findProductosById(id);

    const suma = productos
      .map((item) => item.precio)
      .reduce((prev, curr) => prev + curr, 0);
    console.log(suma);

    const final = await exchange.exchangeEth(suma);
    return final;
  } catch (error) {
    throw new Error(`FINALIZAR_COMPRA ${error.message}`);
  }
}

