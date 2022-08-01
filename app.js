const express = require('express');
const mongoose = require('mongoose');
var winston = require('winston'),
    expressWinston = require('express-winston');
require('dotenv').config();

const mongoUrl = process.env.MONGOUrl || "mongodb://admin:password@mongo-container:27017/dofus?authSource=admin"


async function connect() {
    await mongoose.connect(mongoUrl)
    const db = mongoose.connection;

    return db;
}

async function main(){

    const app = express();
    app.use(express.json());


    app.use(expressWinston.logger({
        transports: [
          new winston.transports.Console()
        ],
        meta: false, // do not log request metadata
        msg: "HTTP {{req.method}} {{req.url}}",
        expressFormat: true,
        colorize: false,
        ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
      }));


    await connect();
    require("./models/Item");

    app.use(require("./routes"));
    app.get('/', (req, res) => {
        res.status(200).send('Hello World!');
    });
    console.log("Listening on port 3000");
    app.listen(3000);

}

main();