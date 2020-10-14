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
class localidadController {
    listaLocalidades(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let localidades = yield db.query('select * from localidad');
            return res.json(localidades);
        });
    }
    guardarLocalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let localidad = req.body;
            yield db.query('insert into localidad set ?', [localidad]);
            return res.json('La localidad fue guardada exitosamente');
        });
    }
    eliminarLocalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.codigo;
            yield db.query("delete from localidad where id_localidad = ?", [codigo]);
            return res.json('La localidad se elimino exitosamente');
        });
    }
    actualizarLocalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.codigo;
            let localidad_actualizada = req.body;
            yield db.query("update localidad set ? where id_localidad = ?", [localidad_actualizada, codigo]);
            return res.json("Se actualizo exitosamente");
        });
    }
    obtenerUnaLocalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.codigo;
            let unaLocalidad = yield db.query("select * from localidad where id_localidad = ?", [codigo]);
            return res.json(unaLocalidad[0]);
        });
    }
}
exports.localidadController = localidadController;
