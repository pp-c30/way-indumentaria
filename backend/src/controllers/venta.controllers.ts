import { conexion } from "../routes/database";
import { Request, Response } from "express";
import { IVenta } from "../models/venta";

export class ventaController{

    public async listaVentas(req:Request,res:Response){

        const db = await conexion();

        let ventas = await db.query('select * from venta');

        return res.json(ventas);
    }

    public async guardarVenta(req:Request,res:Response){

        const db = await conexion();

        let venta:IVenta = req.body;

        await db.query('insert into venta set ?',[venta]);

        return res.json('La venta fue guardada exitosamente'); 

    }

    public async eliminarVenta(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        await db.query("delete from venta where id_venta = ?",[codigo]);

        return res.json('La venta se elimino exitosamente');


    }

    public async actualizarVenta(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        let venta_actualizada = req.body;

        await db.query("update venta set ? where id_venta = ?",[venta_actualizada,codigo]);

        return res.json("Se actualizo exitosamente");

    }

    public async obtenerUnaVenta(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        let unaVenta = await db.query("select * from venta where id_venta = ?",[codigo]);

        return res.json(unaVenta[0]);

    }

}
