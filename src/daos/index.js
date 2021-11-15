import VentasDao from './VentasDao.js';

const ventasDao = new VentasDao()

export function getDaoVentas() {
    return ventasDao
}