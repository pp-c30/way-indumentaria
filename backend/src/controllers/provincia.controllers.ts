import { conexion } from "../routes/database";
import { Request, Response } from "express";
import { IProvincia } from "../models/provincia";

export class provinciaController{

    public async listaProvincias(req:Request,res:Response){

        const db = await conexion();

        let provincias = await db.query('select * from ');

        return res.json(provincias);
    }

    public async guardarProvincias(req:Request,res:Response){

        const db = await conexion();

        let localidad:IProvincia = req.body;

        await db.query('insert into localidad set ?',[localidad]);

        return res.json('La localidad fue guardada exitosamente'); 

    }

    public async eliminarLocalidad(req:Request,res:Response)
    {
        const conex = await conexion();
        let id_provincia = req.params.id;

        try {
            await conex.query('delete from provincia where id_provincia = ?',[id_provincia]);
            return res.json("Provincia eliminada");

        }catch (error){
            return res.json("No se puede eliminar la provincia que este siendo utilizada por una localidad");
        }

    }

    public async actualizarProvincia(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        let provincia_actualizada = req.body;

        await db.query("update provincia set ? where id_provincia = ?",[provincia_actualizada,codigo]);

        return res.json("Se actualizo exitosamente");

    }

    public async obtenerUnaProvincia(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        let unaProvincia = await db.query("select * from provincia where id_provincia = ?",[codigo]);

        return res.json(unaProvincia[0]);

    }

}
