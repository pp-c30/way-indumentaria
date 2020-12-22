"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const venta_controllers_1 = require("../controllers/venta.controllers");
const verificarToken_1 = require("../libs/verificarToken");
let VentaController = new venta_controllers_1.ventaController();
const enrutadorVenta = express_1.Router();
enrutadorVenta.route('/ventas').get(verificarToken_1.validarToken, VentaController.listaVentas);
enrutadorVenta.route('/ventas').post(VentaController.guardarVenta);
enrutadorVenta.route('/ventas/:codigo').delete(VentaController.eliminarVenta);
enrutadorVenta.route('/ventas/:codigo').put(VentaController.actualizarVenta);
enrutadorVenta.route('/ventas/:codigo').get(VentaController.obtenerUnaVenta);
exports.default = enrutadorVenta;
