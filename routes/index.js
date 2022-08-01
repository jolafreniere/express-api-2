const logger = require('../services/logger');
const app = require("express")();
var router = require('express').Router();
//router.use(require("../services/logger"))

app.get("/", (req, res) => {
    res.statusCode = 200
    res.send("Hello World");
})

router.use('/api', require('./api'));


module.exports = router;