//Importamos la funcion "conexion" desde el archivo database
import { conexion } from "../routes/database";

//Importamos las interfaces "Response" y "Request" desde "express"
import { Request, Response } from "express";

//Importamos la interfaz "IConsola" desde el archivo "consola"
import { IGasto } from "../models/gasto";

//Clase que nos permitira almacenar metodos
export class gastoController {
    
    //Metodo que nos permite listar consolas
    public async listaGastos(req:Request,res:Response){

        
        //Guardamos la funcion "conexion" en las constante "db", para lograr la conexion con la base de datos
        const db = await conexion();

        //Realizamos la consulta para mostrar los datos de la tabla consolas
        let gastos = await db.query('select * from consolas');

        //Retorna una respuesta en formato json de pagos
        return res.json(gastos);

    }

    //Metodo que guardara datos en la base
    public async guardarGasto(req:Request,res:Response){

        //Conexion con la base de datos
        const db = await conexion();

        //Guardamos los datos ingresados en el body en una variable
        let gasto:IGasto = req.body;

        //Inserta los datos en la base de datos
        await db.query('insert into consolas set ?',[gasto]);

        //Retorna un mensaje despues de realizarse todo de forma correcta
        return res.json('El gasto fue guardada exitosamente'); 

    }

    //Metodo que nos permite eliminar datos
    public async eliminarGasto(req:Request,res:Response)
    {

        //Conexion con la base de datos
        const db = await conexion();

        //Recibe el codigo de la consola
        let codigo = req.params.codigo;

        //Realiza la eliminacion de la consola
        await db.query("delete from consolas where id_consola = ?",[codigo]);

        //Retorna un mensaje despues de realizarse todo de forma correcta
        return res.json('El gasto se elimino exitosamente');


    }

    //Metodo que nos permite actualizar datos
    public async actualizarGasto(req:Request,res:Response)
    {

        //Conexion con la base de datos
        const db = await conexion();

        //Recibimos el codigo de la consola
        let codigo = req.params.codigo;

        //Nuevos datos de la consola
        let gasto_actualizado = req.body;

        //Realiza la actualizacion
        await db.query("update consolas set ? where id_consola = ?",[gasto_actualizado,codigo]);

        //Retorna un mensaje despues de realizarse todo correctamente
        return res.json("Se actualizo exitosamente");

    }

    //Metodo que lista una consola en especifico
    public async obtenerUnGasto(req:Request,res:Response)
    {

        //Conexion con la base de datos
        const db = await conexion();

        //Recibimos el codigo de la consola
        let codigo = req.params.codigo;

        //Realiza la seleccion de una consola y la guarda en una variable
        let unGasto = await db.query("select * from consolas where id_consola = ?",[codigo]);

        //Retorna la consola seleccionada
        return res.json(unGasto[0]);

    }


}