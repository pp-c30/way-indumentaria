import { conexion } from "../routes/database";
import { Request, Response } from "express";
import { IProducto } from '../models/producto';


export class productoController {
    
    public async listaProducto(req:Request,res:Response){

       const db = await conexion();

        let producto = await db.query('select * from producto');

        return res.json(producto);

    }


    public async guardarProducto(req:Request,res:Response){

        const db = await conexion();

        let producto:IProducto = req.body;

        await db.query('insert into producto set ?',[producto]);

        return res.json('El producto fue guardada exitosamente'); 

    }

    
    public async eliminarProducto(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        await db.query("delete from producto where id_producto = ?",[codigo]);

        return res.json('El producto se elimino exitosamente');


    }

    
    public async actualizarProducto(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        let producto_actualizado = req.body;

        await db.query("update producto set ? where id_producto = ?",[producto_actualizado,codigo]);

        return res.json("Se actualizo exitosamente");

    }

    
    public async obtenerUnProducto(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        let unProducto = await db.query("select * from producto where id_producto = ?",[codigo]);

        return res.json(unProducto[0]);

    }


}