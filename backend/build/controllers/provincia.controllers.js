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
exports.provinciaController = void 0;
const database_1 = require("../routes/database");
class provinciaController {
    listaProvincias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let provincias = yield db.query('select * from ');
            return res.json(provincias);
        });
    }
    guardarProvincias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let localidad = req.body;
            yield db.query('insert into localidad set ?', [localidad]);
            return res.json('La localidad fue guardada exitosamente');
        });
    }
    eliminarLocalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_provincia = req.params.id;
            try {
                yield conex.query('delete from provincia where id_provincia = ?', [id_provincia]);
                return res.json("Provincia eliminada");
            }
            catch (error) {
                return res.json("No se puede eliminar la provincia que este siendo utilizada por una localidad");
            }
        });
    }
    actualizarProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.codigo;
            let provincia_actualizada = req.body;
            yield db.query("update provincia set ? where id_provincia = ?", [provincia_actualizada, codigo]);
            return res.json("Se actualizo exitosamente");
        });
    }
    obtenerUnaProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.codigo;
            let unaProvincia = yield db.query("select * from provincia where id_provincia = ?", [codigo]);
            return res.json(unaProvincia[0]);
        });
    }
}
exports.provinciaController = provinciaController;