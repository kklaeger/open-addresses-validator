import { Request, Response } from "express";
import { AddressController } from "../controllers/AddressController";

export class Routes {    

    public addressController: AddressController = new AddressController();
    
    public initRoutes(app): void {   
        
        app.route('/')
            .get(this.addressController.getAllAddresses)   
        
        app.route('/address')
            .get(this.addressController.getAllAddresses)
            .post(this.addressController.validateAddress);

        app.route('/address/:id')
            .get(this.addressController.getAddressById);
    }
}