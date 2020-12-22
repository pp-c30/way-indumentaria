import { Router } from "express";
import { ventaController } from "../controllers/venta.controllers";
import { validarToken } from "../libs/verificarToken";

let VentaController = new ventaController();

const enrutadorVenta = Router();

enrutadorVenta.route('/ventas').get(validarToken,VentaController.listaVentas);
enrutadorVenta.route('/ventas').post(VentaController.guardarVenta);
enrutadorVenta.route('/ventas/:codigo').delete(VentaController.eliminarVenta);
enrutadorVenta.route('/ventas/:codigo').put(VentaController.actualizarVenta);
enrutadorVenta.route('/ventas/:codigo').get(VentaController.obtenerUnaVenta);

export default enrutadorVenta;