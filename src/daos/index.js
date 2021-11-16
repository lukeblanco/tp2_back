import VentasDao from './VentasDao.js';

import UsuariosDao from './usuarios.js';

const ventasDao = new VentasDao()
const usuariosDao = new UsuariosDao()

export function getDaoVentas() {
    return ventasDao
}

export function getUsuariosDao() {
    return usuariosDao
}