'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AnimalSchema = Schema({
    name: String,
    descripcion: String,
    imagen: String,
    origen: {
        country: String,
        state: String
    }
});
module.export = mongoose.model('Animal', AnimalSchema);