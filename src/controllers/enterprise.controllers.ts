import { Request, Response } from "express";
import pool from '../datebase';
//const mariadb = require('mariadb');

export const crear = async (req: Request, res: Response) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("INSERT INTO `db_conciliacion`.`empresa` (`emp_nit`, `ciu_id`, `emp_nombre`, `emp_nom_rep_legal`, `emp_direccion`, `emp_correo`, `emp_estado`, `emp_telefono`, `emp_coordinadora_financiera`) VALUES ('001', '1', 'Prueba', 'Johan Perez', 'Calle 15 #15-32 Barrio Centro', 'prueba@gmail.com', '1', '5754145', 'Paquita la del barrio')");
        console.log(rows);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }
}

export const prueba = (req: Request, res: Response) => {
    const envio = {
        saludo: "hola"
    }
    console.log("hola")
    return res.json(envio)
}

