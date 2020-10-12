"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../routes/database");
class venta_impaga_pagaController {
    listaVenta_impaga_paga(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let venta_impaga_paga = yield db.query('select * from venta_impaga_paga');
            return res.json(venta_impaga_paga);
        });
    }
    guardarVenta_impaga_paga(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let venta_impaga_paga = req.body;
            yield db.query('insert into venta_impaga_paga set ?', [venta_impaga_paga]);
            return res.json('La venta_impaga_paga fue guardada exitosamente');
        });
    }
    eliminarVenta_impaga_paga(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.codigo;
            yield db.query("delete from venta_impaga_paga where id_venta_impaga_paga = ?", [codigo]);
            return res.json('La venta_impaga_paga se elimino exitosamente');
        });
    }
    actualizarVenta_impaga_paga(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.codigo;
            let venta_impaga_paga_actualizado = req.body;
            yield db.query("update venta_impaga_paga set ? where id_venta_impaga_paga = ?", [venta_impaga_paga_actualizado, codigo]);
            return res.json("Se actualizo exitosamente");
        });
    }
    obtenerUnaVenta_impaga_paga(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.codigo;
            let unaVenta_impaga_paga = yield db.query("select * from venta_impaga_paga where id_venta_impaga_paga = ?", [codigo]);
            return res.json(unaVenta_impaga_paga[0]);
        });
    }
}
exports.venta_impaga_pagaController = venta_impaga_pagaController;
