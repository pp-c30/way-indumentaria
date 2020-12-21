import { conexion } from "../routes/database";
import { Request, Response } from "express";
import { IVenta } from "../models/venta";

export class ventaController{

    public async listaVentas(req:Request,res:Response){

        const db = await conexion();

        let ventas = await db.query('select v.id_venta, p.descripcion as producto_descripcion, v.cantidad, v.importe, v.fecha_venta, v.importe_unitario, v.estado, v.forma_pago, v.descuento_aplicado, vi.vendedor as vendedor_venta, vr.nombre from venta v, producto p, venta_impaga_paga vi, vendedor vr where v.producto = p.id_producto and v.planilla = vi.id_impaga_paga and v.vendedor = vr.id_vendedor');

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
