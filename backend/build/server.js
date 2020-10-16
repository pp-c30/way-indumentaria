"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
//importamos la funcion express desde la carpeta express
const express_1 = __importDefault(require("express"));
//Importamos el enrutadorIndex desde el archivo "index.route"
const index_route_1 = __importDefault(require("./routes/index.route"));
//Importamos los enrutadores
const gasto_route_1 = __importDefault(require("./routes/gasto.route"));
const categoria_route_1 = __importDefault(require("./routes/categoria.route"));
const producto_route_1 = __importDefault(require("./routes/producto.route"));
const venta_impaga_paga_routes_1 = __importDefault(require("./routes/venta_impaga_paga.routes"));
const venta_route_1 = __importDefault(require("./routes/venta.route"));
const localidad_route_1 = __importDefault(require("./routes/localidad.route"));
//Clase donde estaran creados los atributos, metodos y donde seran ejecutados
class Server {
    //Es un metodo que se ejecuta por la instancia del servidor
    constructor() {
        //Almacenamos "express" en el atributo "app"
        this.app = express_1.default();
        //Ejecutamos el metodo "configuracion"
        this.configuracion();
        //Ejecutamos el metodo middleware
        this.middleware();
        //Ejecutamos el metodo "routes"
        this.routes();
    }
    //Mmetodo que permite realizar ajustes
    configuracion() {
        //Busca algun puerto disponible para utilizar y en el caso que no lo encuentre, utilizamos el puerto 3000 por defecto y se almacena en el atributo "app"
        this.app.set('port', process.env.port || 3000);
    }
    //Metodo que permite darles uso a las rutas
    routes() {
        //Le damos uso al enrutadorIndex
        this.app.use(index_route_1.default);
        this.app.use(gasto_route_1.default);
        this.app.use(categoria_route_1.default);
        this.app.use(producto_route_1.default);
        this.app.use(venta_impaga_paga_routes_1.default);
        this.app.use(venta_route_1.default);
        this.app.use(localidad_route_1.default);
    }
    //Metodo donde se realizan las configuraciones extras
    middleware() {
        //Especificamos que "app" use formato "json"
        this.app.use(express_1.default.json());
    }
    //Metodo encargado de correr el servidor bajo un puerto determinado
    listen() {
        //Introducimos la funcion "listen" en el atributo y declaramos que corra en el puerto 3000
        this.app.listen(3000);
        //Es un mensaje que aparecera si se ejecuta el puerto de forma correcta
        console.log('Servidor corriendo en el puerto 3000');
    }
}
exports.Server = Server;
