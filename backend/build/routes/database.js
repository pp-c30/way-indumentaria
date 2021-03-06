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
//Importamos el metodo "createPool" que nos permitira conectarnos a la base de datos desde "promise-mysql"
const promise_mysql_1 = require("promise-mysql");
//Funcion que se encargara de la conexion a las base de datos
function conexion() {
    return __awaiter(this, void 0, void 0, function* () {
        //Constante en la que definiremos las propiedades de "createPool" en la constante "connect", para que poder conectarse a la base de datos
        const connect = yield promise_mysql_1.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'way_indumentaria'
        });
        //Entrega una respuesta
        return connect;
    });
}
exports.conexion = conexion;
