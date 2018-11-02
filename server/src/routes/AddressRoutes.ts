import { Request, Response } from "express";
import { AddressController } from "../controllers/AddressController";

export class Routes {    

    public addressController: AddressController = new AddressController();
    
    public initRoutes(app): void {   
        
        app.route('/address')
            .post(this.addressController.validateAddress);

    }
}