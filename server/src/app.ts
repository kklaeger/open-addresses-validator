import * as express from "express";
import * as log from "npmlog";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/AddressRoutes";
import db from "./db";

class App {

    public app: express.Application;
    public routes: Routes = new Routes();
    
    constructor() {
        this.app = express();
        this.config();        
        this.routes.initRoutes(this.app);    
        this.mySQLSetup();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mySQLSetup(): void {
        db.connect(function(err) {
            if (err) throw err;
            log.info('database', 'Connected to MySQL Database!');
        });
    }

}

export default new App().app;