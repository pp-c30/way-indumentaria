import { Response, Request } from "express";
import { conexion } from "../routes/database";
import bcryptjs from "bcryptjs";

export class AutenticacionController 
{

    async registrar(req:Request, res:Response)
    {
        const salt = await bcryptjs.genSalt(10);

        const password_cifrada = await bcryptjs.hash(req.body.password,salt)

        const unUsuario = {
            username: req.body.username,
            password: password_cifrada,
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