export class venta {
    constructor(nombre, email, nombre, producto, precio, entrega) {
        this.setNombre(nombre);
        this.setEmail(email);
        this.setProducto(producto);
        this.setPrecio(precio);
        this.entrega = entrega;
    }

    setNombre(nombre) {
        if (nombre = null) {
            throw new Error("INVALID_NAME");
        }
        this.nombre = nombre;
    }
    setEmail(email) {
        if (email = null) {
            throw new Error("INVALID_EMAIL");
        }
        this.email = email;
    }
        setProducto(producto) {
            if (producto = null) {
                throw new Error("NO_PRODUCTS");
            }
            this.producto = producto;
        }

        setPrecio(precio) {
            if (precio = null) {
                throw new Error("NO_PRICE");
            }
            this.precio = precio;
        }
    }
