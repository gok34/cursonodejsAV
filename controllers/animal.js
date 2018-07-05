'use strict'
//traer variables
var Animal = require('../models/animal');

function getAnimals(req, res) {
    res.status(200).send({
        message: 'todos los animales'
    })
}
module.exports = {
    getAnimals
}