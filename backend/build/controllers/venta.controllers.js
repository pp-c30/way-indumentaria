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
exports.ventaController = void 0;
const database_1 = require("../routes/database");
class ventaController {
    listaVentas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let ventas = yield db.query('select DATE_FORMAT(v.fecha_venta,"%d/%m/%Y") as fecha_venta, DATE_FORMAT(v.fecha_venta,"%d/%m/%Y") as fecha_venta_formateada, DATE_FORMAT(v.fecha_venta, "%d") as day, DATE_FORMAT(v.fecha_venta, "%m") as month, DATE_FORMAT(v.fecha_venta, "%Y") as year, v.id_venta, p.descripcion as producto_descripcion, p.id_producto as producto,v.planilla as planilla, v.cantidad, v.importe, v.fecha_venta, v.importe_unitario, v.estado, v.forma_pago, v.descuento_aplicado, vi.vendedor as vendedor_venta, vr.nombre from venta v, producto p, venta_impaga_paga vi, vendedor vr where v.producto = p.id_producto and v.planilla = vi.id_impaga_paga and v.vendedor = vr.id_vendedor');
            return res.json(ventas);
        });
    }
    guardarVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let venta = req.body;
            yield db.query('insert into venta set ?', [venta]);
            return res.json('La venta fue guardada exitosamente');
        });
    }
    eliminarVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.codigo;
            yield db.query("delete from venta where id_venta = ?", [codigo]);
            return res.json('La venta se elimino exitosamente');
        });
    }
    actualizarVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.codigo;
            let venta_actualizada = req.body;
            yield db.query("update venta set ? where id_venta = ?", [venta_actualizada, codigo]);
            return res.json("Se actualizo exitosamente");
        });
    }
    obtenerUnaVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.codigo;
            let unaVenta = yield db.query("select * from venta where id_venta = ?", [codigo]);
            return res.json(unaVenta[0]);
        });
    }
}
exports.ventaController = ventaController;
