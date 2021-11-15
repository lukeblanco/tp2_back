export default class VentasDao {
    constructor() {
        this.ventas = []
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
}