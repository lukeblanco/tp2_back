import Producto from "./Producto.js";

class Order {
  constructor(
    _id,
    nameUser,
    emailUser,
    total,
    title,
    description,
    price,
    category,
    productID
  ) {
    this.setId(_id),
      this.setNameUser(nameUser),
      this.setEmailUser(emailUser),
      this.setTotal(total);
    this.product = new Producto(productID, title, description, price, category);
  }
  setId(_id) {
    this._id = _id;
  }
  setNameUser(nameUser) {
    if (nameUser == "" || !nameUser) {
      throw new Error("El nombre de usuario no puede ser nulo ni vacio");
    }
    this.nameUser = nameUser;
  }
  setEmailUser(emailUser) {
    if (emailUser == "" || !emailUser) {
      throw new Error("El email del usuario no puede ser nulo ni vacio");
    }
    this.emailUser = emailUser;
  }
  setTotal(total) {
    if (total == "" || !total) {
      throw new Error("El total no puede ser nulo ni vacio");
    }
    this.total = total;
  }
}

export default Order;
