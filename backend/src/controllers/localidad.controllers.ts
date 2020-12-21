import { conexion } from "../routes/database";
import { Request, Response } from "express";
import { ILocalidad } from "../models/localidad";

export class localidadController{

    public async listaLocalidades(req:Request,res:Response){

        const db = await conexion();

        let localidades = await db.query('select l.id_localidad,l.descripcion, p.descripcion as descripcion_provincia, p.id_provincia as provincia from localidad l, provincia p where l.provincia = p.id_provincia');

        return res.json(localidades);
    }

    public async guardarLocalidad(req:Request,res:Response){

        const db = await conexion();

        let localidad:ILocalidad = req.body;

        await db.query('insert into localidad set ?',[localidad]);

        return res.json('La localidad fue guardada exitosamente'); 

    }

    public async eliminarLocalidad(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        try {
            await db.query("delete from localidad where id_localidad = ?",[codigo]);
            return res.json('La localidad se elimino exitosamente');
        }
        
        catch (error) {
            return res.json("No se puede eliminar una localidad que este siendo utilizada por una venta")
        }

    }

    public async actualizarLocalidad(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        let localidad_actualizada = req.body;

        await db.query("update localidad set ? where id_localidad = ?",[localidad_actualizada,codigo]);

        return res.json("Se actualizo exitosamente");

    }

    public async obtenerUnaLocalidad(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        let unaLocalidad = await db.query("select * from localidad where id_localidad = ?",[codigo]);

        return res.json(unaLocalidad[0]);

    }

}

