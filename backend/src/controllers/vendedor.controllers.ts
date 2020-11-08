import { conexion } from "../routes/database";
import { Request, Response } from "express";
import { IVendedor } from "../models/vendedor";

export class vendedorController{

    public async listaVendedores(req:Request,res:Response){

        const db = await conexion();

        let vendedores = await db.query('select * from vendedor');

        return res.json(vendedores);
    }

    public async guardarVendedor(req:Request,res:Response){

        const db = await conexion();

        let vendedor:IVendedor = req.body;

        await db.query('insert into vendedor set ?',[vendedor]);

        return res.json('El vendedor fue guardado exitosamente'); 

    }

    public async eliminarVendedor(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        try {
            await db.query("delete from vendedor where id_vendedor = ?",[codigo]);
            return res.json('El vendedor se elimino exitosamente');
        }
        
        catch (error) {
            return res.json("No se puede eliminar un vendedor que este siendo utilizado por una venta")
        }

    }

    public async actualizarVendedor(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        let vendedor_actualizado = req.body;

        await db.query("update vendedor set ? where id_vendedor = ?",[vendedor_actualizado,codigo]);

        return res.json("Se actualizo exitosamente");

    }

    public async obtenerUnVendedor(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        let unVendedor = await db.query("select * from vendedor where id_vendedor = ?",[codigo]);

        return res.json(unVendedor[0]);

    }

}

