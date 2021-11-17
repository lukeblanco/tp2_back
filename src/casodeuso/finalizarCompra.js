import exchange from "../modulo/getRate/exchange.js";
const er = new exchange();

export async function finalizarCompra(productos) {
  var suma = 0;
  try {
    productos.forEach(function async(productos) {
      const precio = productos.precio;
      const valor = Number(precio);
      suma += valor;
    });
    var final = await er.exchangeEth(suma);
    console.log(final);
    return final;
  } catch (error) {
    throw new Error(`FINALIZAR_COMPRA ${error.message}`);
  }
}
