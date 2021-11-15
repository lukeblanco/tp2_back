import { finalizarCompra } from "../src/casodeuso/finalizarCompra/finalizarCompra.js";

var productos2 = [
  {
    name: "lavandina",
    precio: "2000",
  },
  {
    name: "lavandina",
    precio: "221",
  },
  {
    name: "lavandina",
    precio: "1",
  },
  {
    name: "lavandina",
    precio: "1",
  },
];

try {
  const cambio = await finalizarCompra(productos2);
  console.log(cambio);
} catch (error) {
  console.log(error);
}
