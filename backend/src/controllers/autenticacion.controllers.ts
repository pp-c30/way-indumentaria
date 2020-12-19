import { Response, Request } from "express";
import { conexion } from "../routes/database";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

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
        
        const resultado = await db.query('insert into usuario set ?',[unUsuario]);

        const token:string = jwt.sign({_id:resultado.insertId},process.env.TOKEN || '1234');

        res.json(token);
    }

    async ingresar(req:Request, res:Response)
    {

    }

}