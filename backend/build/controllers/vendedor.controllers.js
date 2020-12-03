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
class vendedorController {
    listaVendedores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let vendedores = yield db.query('select * from vendedor');
            return res.json(vendedores);
        });
    }
    guardarVendedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let vendedor = req.body;
            yield db.query('insert into vendedor set ?', [vendedor]);
            return res.json('El vendedor fue guardado exitosamente');
        });
    }
    eliminarVendedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.codigo;
            try {
                yield db.query("delete from vendedor where id_vendedor = ?", [codigo]);
                return res.json('El vendedor se elimino exitosamente');
            }
            catch (error) {
                return res.json("No se puede eliminar un vendedor que este siendo utilizado por una venta");
            }
        });
    }
    actualizarVendedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.codigo;
            let vendedor_actualizado = req.body;
            yield db.query("update vendedor set ? where id_vendedor = ?", [vendedor_actualizado, codigo]);
            return res.json("Se actualizo exitosamente");
        });
    }
    obtenerUnVendedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.codigo;
            let unVendedor = yield db.query("select * from vendedor where id_vendedor = ?", [codigo]);
            return res.json(unVendedor[0]);
        });
    }
}
exports.vendedorController = vendedorController;
