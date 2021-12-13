// Test del caso de uso FinalizaCompraenEth
import FinalizaCompraenEth from "../src/casodeuso/FinalizaCompraenEth.js";

const fcompra = new FinalizaCompraenEth();

await fcompra.compraenEth(1);