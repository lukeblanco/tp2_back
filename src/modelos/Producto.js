class Producto {
  constructor(_id, title, description, price, category) {
    this.setTitle(title),
      this.setDescription(description),
      this.setPrice(price),
      this.setCategory(category),
      this.setId(_id);
  }

  setId(_id) {
    this._id = _id;
  }
  setTitle(title) {
    if (title == "" || !title) {
      throw new Error("El titulo no puede ser nulo ni vacio");
    }
    this.title = title;
  }

  setDescription(description) {
    if (description == "" || !description) {
      throw new Error("La descripcion no puede ser nula ni vacia");
    }
    this.description = description;
  }
  setPrice(price) {
    const num = Number(price);
    if (isNaN(num)) {
      throw new Error("El precio debe ser un numero");
    }
    this.price = price;
  }
  setCategory(category) {
    if (category == "" || !category) {
      throw new Error("La categoria no puede ser nula ni vacia");
    }
    this.category = category;
  }
}

export default Producto;
