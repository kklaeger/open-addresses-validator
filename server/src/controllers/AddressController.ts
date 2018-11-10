import { Request, Response } from 'express';
import * as log from "npmlog";
import db from "../db";

export class AddressController{

    public validateAddress (req: Request, res: Response) {
        const street = req.body.street.trim();
        const streetNumber = req.body.streetNumber.trim();
        const city = req.body.city.trim();
        const postcode = req.body.postcode.trim();
        let sql; 
        if (postcode !== "" && city !== "") {
            sql = "SELECT * FROM addresses WHERE street = ? AND streetNumber = ? AND city = ? AND postcode = ?";
        } else if (postcode == "" && city !== "") {
            sql = "SELECT * FROM addresses WHERE street = ? AND streetNumber = ? AND city = ?";
        } else if (postcode !== "" && city == "") {
            sql = "SELECT * FROM addresses WHERE street = ? AND streetNumber = ? AND postcode = ?";
        } else {
            sql = "SELECT * FROM addresses WHERE street = ? AND streetNumber = ? ";
        }
        
        db.query(sql, [street, streetNumber, city, postcode], (err, result) => {
            if (err) res.send(err);
            log.info('mySQL', 'Requested address:', [street, streetNumber, city, postcode]);
            log.info('mySQL', 'Found ' + result.length + ' addresses');
            if (result.length > 0) {
                res.send({addressExists: true})
            } else {
                res.send({addressExists: false})
            } 
        });
    }

}