import { Request, Response } from 'express';
import db from "../db";

export class AddressController{

    public getAllAddresses (req: Request, res: Response) { 
        const sql = "SELECT * FROM addresses";          
        db.query(sql, (err, result) => {
            if (err) res.send(err);
            res.send(result)
        });
    }

    public getAddressById (req: Request, res: Response) { 
        const sql = "SELECT * FROM addresses WHERE ID = ?";    
        db.query(sql, [req.params.id], (err, result) => {
            if (err) res.send(err);
            res.send(result)
        });
    }

    public validateAddress (req: Request, res: Response) {
        // TODO: implement validator
        res.send(true);
    }

}