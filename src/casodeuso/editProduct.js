import DaoProducts from "../daos/DaoProductos.js";

const editProduct = (id, newProduct) => {
  const daoProducto = new DaoProducts();
  const searchProduct = daoProducto.findProduct(id);
  if (searchProduct !== null) {
    daoProducto.editProduct(id, newProduct);
  } else {
    console.log("No se puede editar");
  }
};

export default editProduct;
