'use strict'
//traer variables
var Animal = require('../models/animal');


function getAnimals(req, res) {
    res.status(200).send({
        message: 'todos los animales'
    })
}

function saveAnimal(req, res) {
    var animal=new Animal();

    var params = req.body;

    if(params.name){
        animal.name=params.name;
        animal.descripcion=params.descripcion;
        animal.origen.country=params.country;
        animal.origen.state=params.state;
        animal.imagen=null;

        animal.save((err, animalStored) => {
            if(err) {
                res.status(500).send({
                    message:'error en el servidor'


                });

            }



            else  {

                res.status(200).send({
                animal:animalStored


            });
            }



        });
    }

}

function getanimal(req, res) {
    var animalId=req.params.id;
    Animal.findById(animalId).exec((err,animal)=>{
        if(err){
            res.status(500).send({
                message:'error en la petiicon'

            });


        }
        else{res.status(200).send({
            animal
        });

        }

    })




}
module.exports = {
    getAnimals,saveAnimal,getanimal
}