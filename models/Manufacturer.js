const {Schema, model} = require('mongoose');

const manuSchema = new Schema({
    name:{
        type:String,
         required:true
    },
    country:{
        type:String,
        required:true
    }
})

const Manufacturer = model('Manufacturer', manuSchema);

module.exports = Manufacturer;