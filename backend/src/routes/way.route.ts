//Importamos la funcion "Router" desde "express"
import { Router } from "express";

//Importamos el metodo "consolassController" desde el archivo "consolas.controllers"
import { wayController } from "../controllers/way.controllers";

//Instancia que permite tener todas las funciones de la clase "consolasController"
let WayController = new wayController();

//Creamos una variable constante llamada "enrutadorConsolas", en la que se guardara todas las funciones de Router
const enrutadorWay = Router();

//Creamos una ruta que realiza una peticion que listara las consolas
enrutadorWay.route('/consolas').get(WayController.lista);

//Ruta que permite guardar datos en la base
enrutadorWay.route('/consolas').post(WayController.guardar);

//Ruta que permite eliminar datos de la base
enrutadorWay.route('/consolas/:codigo').delete(WayController.eliminar);

//Ruta que permite actualzar datos de la base
enrutadorWay.route('/consolas/:codigo').put(WayController.actualizar);

//Ruta que permite obtener una consola en especifico de la base de datos
enrutadorWay.route('/consolas/:codigo').get(WayController.obtenerUna);

//Exportamos
export default enrutadorWay;