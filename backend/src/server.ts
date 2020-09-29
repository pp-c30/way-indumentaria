//importamos la funcion express desde la carpeta express
import express, { Application } from "express";

//Importamos el enrutadorIndex desde el archivo "index.route"
import enrutadorIndex from "./routes/index.route";

//Importamos el enrutadorConsolas dede el archivo "consolas.route"
import enrutadorConsolas from "./routes/consolas.route";

//Clase donde estaran creados los atributos, metodos y donde seran ejecutados
export class Server {

    //Es un atributo que pertenece a express
    app:Application; 

    //Es un metodo que se ejecuta por la instancia del servidor
    constructor() 
    {
        //Almacenamos "express" en el atributo "app"
        this.app = express();
        
        //Ejecutamos el metodo "configuracion"
        this.configuracion();

        //Ejecutamos el metodo middleware
        this.middleware();

        //Ejecutamos el metodo "routes"
        this.routes();

    }

    //Mmetodo que permite realizar ajustes
    configuracion()
    {
        //Busca algun puerto disponible para utilizar y en el caso que no lo encuentre, utilizamos el puerto 3000 por defecto y se almacena en el atributo "app"
        this.app.set('port', process.env.port || 3000);
    }

    //Metodo que permite darles uso a las rutas
    routes()
    {
        //Le damos uso al enrutadorIndex
        this.app.use(enrutadorIndex);

        this.app.use(enrutadorConsolas);
    }

    //Metodo donde se realizan las configuraciones extras
    middleware()
    {
        //Especificamos que "app" use formato "json"
        this.app.use(express.json());
    }

    //Metodo encargado de correr el servidor bajo un puerto determinado
    listen()
    {
        //Introducimos la funcion "listen" en el atributo y declaramos que corra en el puerto 3000
        this.app.listen(3000); 

        //Es un mensaje que aparecera si se ejecuta el puerto de forma correcta
        console.log('Servidor corriendo en el puerto 3000'); 

    }

}