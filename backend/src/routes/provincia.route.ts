import { Router } from "express";
import { provinciaController } from "../controllers/provincia.controllers";

let ProvinciaController = new provinciaController();

const enrutadorProvincia = Router();

enrutadorProvincia.route('/provincias').get(ProvinciaController.listaProvincias);
enrutadorProvincia.route('/provincias').post(ProvinciaController.guardarProvincias);
//enrutadorLocalidad.route('/localidades/:codigo').delete(ProvinciaController.eliminar);
enrutadorProvincia.route('/provincias/:codigo').put(ProvinciaController.actualizarProvincia);
enrutadorProvincia.route('/provincias/:codigo').get(ProvinciaController.obtenerUnaProvincia);

export default enrutadorProvincia;