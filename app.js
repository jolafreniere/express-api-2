const express = require('express');

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});
app.listen(3000);

module.exports = app;