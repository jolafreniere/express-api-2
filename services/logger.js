var winston = require('winston'),
    expressWinston = require('express-winston');
const logger = expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    meta: false, // do not log request metadata
    msg: "HTTP {{req.method}} {{req.url}}",
    expressFormat: true,
    colorize: false,
    ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
    })
module.exports = logger;