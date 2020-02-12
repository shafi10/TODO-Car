const { Schema, model} = require('mongoose');

const carSchema = new Schema({
    name:{
      type:String,
      required:true
    },
    color:{
        type:String,
        required:true
    },
    manu:[{
        type:Schema.Types.ObjectId,
        ref:'Manufacturer'
    }]

})

const Car = model('Car', carSchema)

module.exports = Car
