import { Request, Response } from 'express';
import * as log from "npmlog";
import db from "../db";

export class AddressController{

    public validateAddress (req: Request, res: Response) {
        const street = req.body.street.trim();
        const streetNumber = req.body.streetNumber.trim();
        const city = req.body.city.trim();
        let postcode = req.body.postcode;
        let sql; 
        if (postcode && postcode !== "") {
            sql = "SELECT * FROM addresses WHERE street = ? AND number = ? AND city = ? AND postcode = ?";
            postcode = postcode.trim();
        } else {
            sql = "SELECT * FROM addresses WHERE street = ? AND number = ? AND city = ? AND postcode IS NULL";
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