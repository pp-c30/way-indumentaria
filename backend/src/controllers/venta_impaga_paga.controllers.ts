import { conexion } from "../routes/database";
import { Request, Response } from "express";
import { IVentaImpagaPaga } from '../models/venta_impaga_paga';

export class venta_impaga_pagaController {
    
    public async listaVenta_impaga_paga(req:Request,res:Response){

       const db = await conexion();

        let venta_impaga_paga = await db.query('select *, DATE_FORMAT(fecha_carga,"%d/%m/%Y") as fecha_carga, DATE_FORMAT(fecha_carga, "%d") as day, DATE_FORMAT(fecha_carga, "%m") as month, DATE_FORMAT(fecha_carga, "%Y") as year from venta_impaga_paga');

        return res.json(venta_impaga_paga);

    }


    public async guardarVenta_impaga_paga(req:Request,res:Response){

        try {

            const db = await conexion();
    
            //se guarda datos en la base
                console.log(req.body.fecha_carga);
            const guardarVenta_impaga_paga:IVentaImpagaPaga = {
                fecha_carga:String(req.body.fecha_carga),
                vendedor:Number(req.body.vendedor),
                total:Number(req.body.total),
                debe:Number(req.body.debe),
                estado:Number(req.body.estado),
                
            }

        await db.query('insert into venta_impaga_paga set ?',[guardarVenta_impaga_paga]);

        res.json('La venta_impaga_paga fue guardada exitosamente'); 
    }catch(error)
    {
         res.json('Error al guardar un artículo');
         console.log(error);
     }

    }

    
    public async eliminarVenta_impaga_paga(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        await db.query("delete from venta_impaga_paga where id_impaga_paga = ?",[codigo]);

        return res.json('La venta_impaga_paga se elimino exitosamente');


    }

    
    public async actualizarVenta_impaga_paga(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        let venta_impaga_paga_actualizado = req.body;

        await db.query("update venta_impaga_paga set ? where id_impaga_paga = ?",[venta_impaga_paga_actualizado,codigo]);

        return res.json("Se actualizo exitosamente");

    }

    
    public async obtenerUnaVenta_impaga_paga(req:Request,res:Response)
    {

        const db = await conexion();

        let codigo = req.params.codigo;

        let unaVenta_impaga_paga = await db.query("select * from venta_impaga_paga where id_venta_impaga_paga = ?",[codigo]);

        return res.json(unaVenta_impaga_paga[0]);

    }


}