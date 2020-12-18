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
exports.productoController = void 0;
const database_1 = require("../routes/database");
class productoController {
    listaProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let producto = yield db.query('select p.id_producto, p.codigo, p.descripcion, p.precio_compra, p.precio_way, p.precio_final, c.descripcion as descripcion_categoria, p.estado, p.descuento, p.categoria_sexo, p.fecha_carga from producto p, categoria c where p.categoria = c.id_categoria');
            return res.json(producto);
        });
    }
    guardarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let producto = req.body;
            yield db.query('insert into producto set ?', [producto]);
            return res.json('El producto fue guardada exitosamente');
        });
    }
    eliminarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.codigo;
            yield db.query("delete from producto where id_producto = ?", [codigo]);
            return res.json('El producto se elimino exitosamente');
        });
    }
    actualizarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.codigo;
            let producto_actualizado = req.body;
            yield db.query("update producto set ? where id_producto = ?", [producto_actualizado, codigo]);
            return res.json("Se actualizo exitosamente");
        });
    }
    obtenerUnProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.codigo;
            let unProducto = yield db.query("select * from producto where id_producto = ?", [codigo]);
            return res.json(unProducto[0]);
        });
    }
}
exports.productoController = productoController;
