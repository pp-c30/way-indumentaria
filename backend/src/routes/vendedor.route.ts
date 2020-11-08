import { Router } from "express";
import { vendedorController } from "../controllers/vendedor.controllers";

let VendedorController = new vendedorController();

const enrutadorVendedor = Router();

enrutadorVendedor.route('/vendedores').get(VendedorController.listaVendedores);
enrutadorVendedor.route('/vendedores').post(VendedorController.guardarVendedor);
enrutadorVendedor.route('/vendedores/:codigo').delete(VendedorController.eliminarVendedor);
enrutadorVendedor.route('/vendedores/:codigo').put(VendedorController.actualizarVendedor);
enrutadorVendedor.route('/vendedores/:codigo').get(VendedorController.obtenerUnVendedor);

export default enrutadorVendedor;