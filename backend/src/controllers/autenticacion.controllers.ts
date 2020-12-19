import { Response, Request } from "express";
import { conexion } from "../routes/database";

export class AutenticacionController 
{

    async registrar(req:Request, res:Response)
    {
        const unUsuario = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        }

        const db = await conexion();
        
        await db.query('insert into usuario set ?',[unUsuario]);

        res.json('Probando si se guarda el usuario');
    }

    async ingresar(req:Request, res:Response)
    {

    }

}