import { conexion } from "../routes/database";
import { Request, Response } from "express";
import { ICategoria } from '../models/categoria';

export class categoriaController {
    
    public async listaCategoria(req:Request,res:Response){

       const db = await conexion();

        let categoria = await db.query('select * from categoria');

        return res.json(categoria);

    }


    public async guardarCategoria(req:Request,res:Response){

        const db = await conexion();

        let categoria:ICategoria = req.body;

        await db.query('insert into categoria set ?',[categoria]);

        return res.json('La categoria fue guardada exitosamente'); 

    }

    
    public async eliminarCategoria(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        await db.query("delete from categoria where id_categoria = ?",[codigo]);

        return res.json('La categoria se elimino exitosamente');


    }

    
    public async actualizarCategoria(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        let categoria_actualizado = req.body;

        await db.query("update categoria set ? where id_categoria = ?",[categoria_actualizado,codigo]);

        return res.json("Se actualizo exitosamente");

    }

    
    public async obtenerUnaCategoria(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        let unaCategoria = await db.query("select * from categoria where id_categoria = ?",[codigo]);

        return res.json(unaCategoria[0]);

    }


}