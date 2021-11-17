import DaoOrders from "../daos/DaoOrders.js";

const removeOrder = (id) => {
  const daoOrders = new DaoOrders();
  const searchOrder = daoOrders.findOrder(id);
  if (searchOrder !== null) {
    daoOrders.removeOrder(id);
  } else {
    console.log("Orden inexistente");
  }
};

export default removeOrder;
