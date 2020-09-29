//Importamos la funcion "conexion" desde el archivo database
import { conexion } from "../routes/database";

//Importamos las interfaces "Response" y "Request" desde "express"
import { Request, Response } from "express";

//Importamos la interfaz "IConsola" desde el archivo "consola"
import { IConsola } from "../models/consola";

//Clase que nos permitira almacenar metodos
export class wayController {
    
    //Metodo que nos permite listar consolas
    public async listaConsolas(req:Request,res:Response){

        
        //Guardamos la funcion "conexion" en las constante "db", para lograr la conexion con la base de datos
        const db = await conexion();

        //Realizamos la consulta para mostrar los datos de la tabla consolas
        let consolas = await db.query('select * from consolas');

        //Retorna una respuesta en formato json de pagos
        return res.json(consolas);

    }

    //Metodo que guardara datos en la base
    public async guardarConsola(req:Request,res:Response){

        //Conexion con la base de datos
        const db = await conexion();

        //Guardamos los datos ingresados en el body en una variable
        let consola:IConsola = req.body;

        //Inserta los datos en la base de datos
        await db.query('insert into consolas set ?',[consola]);

        //Retorna un mensaje despues de realizarse todo de forma correcta
        return res.json('La consola fue guardada exitosamente'); 

    }

    //Metodo que nos permite eliminar datos
    public async eliminarConsola(req:Request,res:Response)
    {

        //Conexion con la base de datos
        const db = await conexion();

        //Recibe el codigo de la consola
        let codigo = req.params.codigo;

        //Realiza la eliminacion de la consola
        await db.query("delete from consolas where id_consola = ?",[codigo]);

        //Retorna un mensaje despues de realizarse todo de forma correcta
        return res.json('La consola se elimino exitosamente');


    }

    //Metodo que nos permite actualizar datos
    public async actualizarConsola(req:Request,res:Response)
    {

        //Conexion con la base de datos
        const db = await conexion();

        //Recibimos el codigo de la consola
        let codigo = req.params.codigo;

        //Nuevos datos de la consola
        let consola_actualizada = req.body;

        //Realiza la actualizacion
        await db.query("update consolas set ? where id_consola = ?",[consola_actualizada,codigo]);

        //Retorna un mensaje despues de realizarse todo correctamente
        return res.json("Se actualizo exitosamente");

    }

    //Metodo que lista una consola en especifico
    public async obtenerUnaConsola(req:Request,res:Response)
    {

        //Conexion con la base de datos
        const db = await conexion();

        //Recibimos el codigo de la consola
        let codigo = req.params.codigo;

        //Realiza la seleccion de una consola y la guarda en una variable
        let unaConsola = await db.query("select * from consolas where id_consola = ?",[codigo]);

        //Retorna la consola seleccionada
        return res.json(unaConsola[0]);

    }


}