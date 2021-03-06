"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const catgasto_controllers_1 = require("../controllers/catgasto.controllers");
const verificarToken_1 = require("../libs/verificarToken");
let catgastoController = new catgasto_controllers_1.CatgastoController();
const enrutadorCatgasto = express_1.Router();
enrutadorCatgasto.route('/categoria_gasto').get(verificarToken_1.validarToken, catgastoController.listaCatgasto);
enrutadorCatgasto.route('/categoria_gasto').post(catgastoController.guardarCatgasto);
enrutadorCatgasto.route('/categoria_gasto/:id').delete(catgastoController.eliminarCatgasto);
enrutadorCatgasto.route('/categoria_gasto/:id').put(catgastoController.actualizarCatgasto);
enrutadorCatgasto.route('/categoria_gasto/:id').get(catgastoController.obtenerUnaCatgasto);
exports.default = enrutadorCatgasto;
