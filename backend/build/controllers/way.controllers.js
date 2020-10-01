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
//Importamos la funcion "conexion" desde el archivo database
const database_1 = require("../routes/database");
//Clase que nos permitira almacenar metodos
class wayController {
    //Metodo que nos permite listar consolas
    listaConsolas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Guardamos la funcion "conexion" en las constante "db", para lograr la conexion con la base de datos
            const db = yield database_1.conexion();
            //Realizamos la consulta para mostrar los datos de la tabla consolas
            let consolas = yield db.query('select * from consolas');
            //Retorna una respuesta en formato json de pagos
            return res.json(consolas);
        });
    }
    //Metodo que guardara datos en la base
    guardarConsola(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Guardamos los datos ingresados en el body en una variable
            let consola = req.body;
            //Inserta los datos en la base de datos
            yield db.query('insert into consolas set ?', [consola]);
            //Retorna un mensaje despues de realizarse todo de forma correcta
            return res.json('La consola fue guardada exitosamente');
        });
    }
    //Metodo que nos permite eliminar datos
    eliminarConsola(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Recibe el codigo de la consola
            let codigo = req.params.codigo;
            //Realiza la eliminacion de la consola
            yield db.query("delete from consolas where id_consola = ?", [codigo]);
            //Retorna un mensaje despues de realizarse todo de forma correcta
            return res.json('La consola se elimino exitosamente');
        });
    }
    //Metodo que nos permite actualizar datos
    actualizarConsola(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Recibimos el codigo de la consola
            let codigo = req.params.codigo;
            //Nuevos datos de la consola
            let consola_actualizada = req.body;
            //Realiza la actualizacion
            yield db.query("update consolas set ? where id_consola = ?", [consola_actualizada, codigo]);
            //Retorna un mensaje despues de realizarse todo correctamente
            return res.json("Se actualizo exitosamente");
        });
    }
    //Metodo que lista una consola en especifico
    obtenerUnaConsola(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Conexion con la base de datos
            const db = yield database_1.conexion();
            //Recibimos el codigo de la consola
            let codigo = req.params.codigo;
            //Realiza la seleccion de una consola y la guarda en una variable
            let unaConsola = yield db.query("select * from consolas where id_consola = ?", [codigo]);
            //Retorna la consola seleccionada
            return res.json(unaConsola[0]);
        });
    }
}
exports.wayController = wayController;
