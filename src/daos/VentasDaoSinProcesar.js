export default class VentasDaoSinProcesar {
    constructor() {
        this.ventas = [
            {
              id: 1,
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
        return this.ventas.find(u => u.id == id)
    }

    findAll() {
        return this.ventas
    }
    
    save(venta) {
        this.ventas.push(venta)
    }
      findProductosById(id) {
    return this.ventas.find((u) => u.id == id).productos;
  }
}