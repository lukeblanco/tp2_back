import DaoProducts from "../daos/DaoProductos.js";

const removeProduct = (id) => {
  const daoProducto = new DaoProducts();
  const searchProduct = daoProducto.findProduct(id);
  if (searchProduct !== null) {
    daoProducto.removeProduct(id);
  } else {
    console.log("Producto inexistente");
  }
};

export default removeProduct;
