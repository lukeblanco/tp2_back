import DaoProducts from "../daos/DaoProductos.js";
import createCSV from "./creacionCSV.js";

const getProducts = async () => {
  const daoProducto = new DaoProducts();

  try {
    const products = await daoProducto.getProducts();
    console.log(products)
    if (products.length !== 0) {
      createCSV(products);
    }else{
      console.log('No hay productos en la lista')
    }
  } catch (error) {}
};

getProducts();

export default getProducts;
