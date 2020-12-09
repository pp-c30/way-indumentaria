import { conexion } from "../routes/database";
import { Request, Response } from "express";
import { IVendedor } from "../models/vendedor";

export class vendedorController{

    public async listaVendedores(req:Request,res:Response){

        const db = await conexion();

        let vendedores = await db.query('select v.id_vendedor, v.nombre, v.apellido, v.dni, v.domicilio, v.email, l.descripcion as descripcion, l.id_localidad as id_localidad , v.adjunto, v.telefono, v.nom_garante, v.ape_garante, v.email_garante, v.dni_garante, v.domicilio_garante, v.telefono_garante, v.estado from vendedor v,localidad l where v.localidad = l.id_localidad');

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

