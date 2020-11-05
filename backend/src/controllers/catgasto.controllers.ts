import { conexion } from '../routes/database';

import { Request, Response, query } from "express";

import { ICatgasto } from "../models/catgasto";
    // CRUD
export class CatgastoController {
    //listar
    public  async listaCatgasto(req:Request, res:Response){
        
        const db = await conexion();
        let categoria_gasto = await db.query('select * from categoria_gasto');


        return res.json(categoria_gasto);
        
        
    }
    //guardar
    public async guardarCatgasto(req:Request, res:Response){

        const db = await conexion();
        

        let catg:ICatgasto = req.body;

        await db.query("insert into categoria_gasto set ?", [catg]);

        return res.json("La categoria se inserto exitosamente");
    }
    //eliminar
    public async eliminarCatgasto(req:Request, res:Response){

        const conex = await conexion();
        let id_categoria_gasto = req.params.id;

        try {
            await conex.query('delete from categoria_gasto where id_categoria_gasto = ?',[id_categoria_gasto]);
            return res.json("Categoria de gasto eliminada");

        }catch (error){
            return res.json("No se puede eliminar una categoria de gasto que este siendo utilizada por un gasto");
        }
        
        
        //const db = await conexion();
        //let id = req.params.id;
        //await db.query("delete from categoria_gasto where id_categoria_gasto = ?", [id]);
        //return res.json('La categoria se elimino correctamente');

    }
    //actualizar
    public async actualizarCatgasto(req:Request, res:Response)
    {
        const db = await conexion();
        let id = req.params.id;
        let nuevos_datos_catg = req.body;

        await db.query("update categoria_gasto set ? where id_categoria_gasto = ?",[nuevos_datos_catg,id]);

        return res.json('se actualizo correctamente');
    }
    //obtener un solo objeto de la tabla
    public async obtenerUnaCatgasto(req:Request, res:Response){
        const db = await conexion();
        let id = req.params.id;

       let unaCatg = await db.query("select * from categoria_gasto where id_categoria_gasto = ? ",[id]);
       return res.json(unaCatg[0]);
    }
}
