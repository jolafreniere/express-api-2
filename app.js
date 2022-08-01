const express = require('express');
const db = require("./services/database")
require('dotenv').config();



const app = express();
app.use(express.json());




app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});


function listen(){
    if(process.env.ENVIRONMENT == "DEV"){
        console.log("Listening on port 3001")
        app.use(require("./routes"));
        app.listen(3001)
    } else {
        console.log("Listening on port 3000");
        app.use(require("./routes"));
        app.listen(3000);
    }
}

(async() => {
    await db.connect();
    console.log("Connected to database");
    listen();
})();



module.exports = app;
module.exports.db = db;
