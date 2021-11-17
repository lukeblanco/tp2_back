import Producto from "../modelos/Producto.js"
import DaoProducts from "../daos/DaoProductos.js";



const addProduct =  async (title, description, price, category) => {
  const daoProducto = new DaoProducts();
  const productos = await daoProducto.getProducts()
  const id = productos.length + 1
  const producto = new Producto(id, title, description, price, category);
  const searchProduct = daoProducto.findProduct(producto.id);
  if (searchProduct !== null) {
    daoProducto.addProduct(producto);
  }else{
      console.log('Producto existente')
  }
};

export default addProduct