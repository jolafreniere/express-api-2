const mongoose = require('mongoose');

var mongoUrl = process.env.MONGOUrl || "mongodb://admin:password@mongo-container:27017/dofus?authSource=admin"
var db;

async function connect() {
    if(process.env.ENVIRONMENT == "PRODUCTION"){
        mongoUrl = "mongodb://admin:password@mongo-container:27017/dofus?authSource=admin"
    } else {
        console.log("Using TEST database")
        mongoUrl =  "mongodb://admin:password@localhost:27017/dofus?authSource=admin"
    }
    const conn = await mongoose.connect(mongoUrl)
    require("../models/Item")
    db = conn.connection;
    //db.dropCollection("items");

    return;
}


module.exports.db = mongoose.connection;
module.exports.connect = connect

