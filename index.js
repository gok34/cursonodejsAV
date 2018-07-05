'use strict'
//traer variables
var mongoose = require('mongoose');
//declarar puerto
var port = 3000;
var app = require('./app');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/zoologico').then(() => {
    console.log('la conexion fue exitosa');
    app.listen(port, () => {
        console.log('esta correindo');
    });
}).catch(err => console.log(err));