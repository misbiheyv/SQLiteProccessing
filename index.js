import DataBase from "./classes/DB.js";
import express from "express";
import sqlt3 from "sqlite3";
import DB from "./classes/DB.js";

const sqlite = sqlt3.verbose();
const app = express();
const DB_NAME = "test";
const TABLE_NAME = "test";
const PORT = 3000;
let db;

const COL_NAMES = ["name", "price", "description", "picture"];
const ELEMENTS = ["SomeProduct", 121, "SomeDescription", "somePic"]
const ELEMENTS2 = ["SomeProduct2", 321, "SomeDescription2", "somePic2"]
const ELEMENTS3 = ["SomeProduct3", 3321, "SomeDescription23", "somePic23"]

// DataBase.addElementInTable(DB_NAME, TABLE_NAME, COL_NAMES, ELEMENTS)
// DataBase.addElementInTable(DB_NAME, TABLE_NAME, COL_NAMES, ELEMENTS2)
// DataBase.addElementInTable(DB_NAME, TABLE_NAME, COL_NAMES, ELEMENTS3)

DataBase.removeElementFromTable(DB_NAME, TABLE_NAME, 'SomeProduct2');



// DataBase.createDB(DB_NAME);
//
// DataBase.createTable(DB_NAME, TABLE_NAME);
//
// DataBase.addColsInTable(DB_NAME, TABLE_NAME, COL_NAMES);


// app.get("/", (req, res) => {
//     res.send("server is working");
// });
//
// app.post("/", (req, res) => {
//     res.send("Successful");
// });

function StartApp(){
    try {

        DataBase.createDB(DB_NAME);
        const TABLE_NAME = "products";
        DataBase.createTable(DB_NAME, TABLE_NAME);

        app.listen(PORT, (err) =>{
            if (err)
                return console.error(err.message);
        });
    } catch (e) {
        console.error(e);
    }
}

// StartApp();