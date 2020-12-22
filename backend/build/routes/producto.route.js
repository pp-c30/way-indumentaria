"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controllers_1 = require("../controllers/producto.controllers");
const verificarToken_1 = require("../libs/verificarToken");
let ProductoController = new producto_controllers_1.productoController();
const enrutadorProducto = express_1.Router();
enrutadorProducto.route('/producto').get(verificarToken_1.validarToken, ProductoController.listaProducto);
enrutadorProducto.route('/producto').post(ProductoController.guardarProducto);
enrutadorProducto.route('/producto/:codigo').delete(ProductoController.eliminarProducto);
enrutadorProducto.route('/producto/:codigo').put(ProductoController.actualizarProducto);
enrutadorProducto.route('/producto/:codigo').get(ProductoController.obtenerUnProducto);
exports.default = enrutadorProducto;
