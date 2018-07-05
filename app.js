'use strict'
var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var animalsRoutes = require('./routes/animal');
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json());
app.use('/api', animalsRoutes);
app.get('/test', (req, res) => {
    res.status(200).send({
        message: 'mi primer endpoint'
    });
});
module.exports = app;