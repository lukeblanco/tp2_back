import { exchangeEth } from "../src/getRate/index.js";
const cantidad = 10000;

const r = exchangeEth();
try {
  const cambio = await r.exchangeEth(cantidad);
  console.log(cambio);
} catch (error) {
  console.log(error);
}
