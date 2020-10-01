"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importamos la funcion "Router" desde "express"
const express_1 = require("express");
//Importamos el metodo "consolassController" desde el archivo "consolas.controllers"
const way_controllers_1 = require("../controllers/way.controllers");
//Instancia que permite tener todas las funciones de la clase "consolasController"
let WayController = new way_controllers_1.wayController();
//Creamos una variable constante llamada "enrutadorConsolas", en la que se guardara todas las funciones de Router
const enrutadorWay = express_1.Router();
//Creamos una ruta que realiza una peticion que listara las consolas
enrutadorWay.route('/consolas').get(WayController.listaConsolas);
//Ruta que permite guardar datos en la base
enrutadorWay.route('/consolas').post(WayController.guardarConsola);
//Ruta que permite eliminar datos de la base
enrutadorWay.route('/consolas/:codigo').delete(WayController.eliminarConsola);
//Ruta que permite actualzar datos de la base
enrutadorWay.route('/consolas/:codigo').put(WayController.actualizarConsola);
//Ruta que permite obtener una consola en especifico de la base de datos
enrutadorWay.route('/consolas/:codigo').get(WayController.obtenerUnaConsola);
//Exportamos
exports.default = enrutadorWay;
