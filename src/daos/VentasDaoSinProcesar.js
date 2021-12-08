export default class VentasDaoSinProcesar {
  constructor() {
    this.ventas = [
      {
        id: 1,
        iduser: 2,
        email: "luke@gmail.com",
        productos: [
          {
            prod: "tortaoreo",
            precio: 520,
          },
          {
            prod: "tortamochka",
            precio: 502,
          },
        ],
      },
      {
        id: 2,
        iduser: 2,
        email: "luke@gmail.com",
        productos: [
          {
            prod: "mignone",
            precio: "100",
          },
          {
            prod: "flan",
            precio: "500",
          },
        ],
      },
    ];
  }

  findById(id) {
    const venta = this.ventas.find((u) => u.id == id);
    if (venta) {
      return venta;
    } else {
      throw new Error("No existe id de venta");
    }
  }

  findAll() {
    return this.ventas;
  }

  save(venta) {
    this.ventas.push(venta);
  }

  findProductosById(id) {
    return this.ventas.find((u) => u.id == id).productos;
  }
}
