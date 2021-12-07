import VentasDao from './VentasDao.js';

import UsuariosDao from './usuarios.js';

import VentasDaoSinProcesar from './VentasDaoSinProcesar.js';

const ventasDao = new VentasDao()
const usuariosDao = new UsuariosDao()
const ventasDaoSinProcesar = new VentasDaoSinProcesar()

export function getDaoVentas() {
    return ventasDao
}

export function getUsuariosDao() {
    return usuariosDao
}

export function getVentasSinProcesarDao() {
    return ventasDaoSinProcesar
}