import * as mysql from "mysql";

class DB {    
    public  db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        database: "openaddresses"
      });     
}

export default new DB().db;