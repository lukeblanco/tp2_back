import Order from "../modelos/Order.js"
import DaoOrders from "../daos/DaoOrders.js";


const addOrder =  async (nameUser, emailUser, total, title, description, price, category) => {
  const daoOrders = new DaoOrders();
  const orders = await daoOrders.getOrders()
  const id = orders.length + 1
  const order = new Order(id, nameUser, emailUser, total, title, description, price, category, id);
  const searchProduct = daoOrders.findOrder(order.id);
  if (searchProduct !== null) {
    daoOrders.addOrder(order);
  }else{
      console.log('Orden existente')
  }
};

export default addOrder