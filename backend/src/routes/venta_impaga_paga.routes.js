"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const venta_impaga_paga_controllers_1 = require("../controllers/venta_impaga_paga.controllers");
let Venta_impaga_pagaController = new venta_impaga_paga_controllers_1.venta_impaga_pagaController();
const enrutadorVenta_impaga_paga = express_1.Router();
enrutadorVenta_impaga_paga.route('/venta_impaga_paga').get(Venta_impaga_pagaController.listaVenta_impaga_paga);
enrutadorVenta_impaga_paga.route('/venta_impaga_paga').post(Venta_impaga_pagaController.guardarVenta_impaga_paga);
enrutadorVenta_impaga_paga.route('/venta_impaga_paga/:codigo').delete(Venta_impaga_pagaController.eliminarVenta_impaga_paga);
enrutadorVenta_impaga_paga.route('/venta_impaga_paga/:codigo').put(Venta_impaga_pagaController.actualizarVenta_impaga_paga);
enrutadorVenta_impaga_paga.route('/venta_impaga_paga/:codigo').get(Venta_impaga_pagaController.obtenerUnaVenta_impaga_paga);
exports.default = enrutadorVenta_impaga_paga;
