// Test del caso de uso compraenEth

import { compraenEth } from '../src/casodeuso/compraenEth.js';
import {getDaoVentas} from '../src/daos/index.js'

const venDao = getDaoVentas()

venDao.save({
        id: 1,
        email: 'luciaorlandelli263@gmail.com',
        nombre: "ORT",
        producto: "Torta oreo",
        precio: 2200
    })

await compraenEth(1)
