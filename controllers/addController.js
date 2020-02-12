const Car = require('../models/Car')
const Manufacture = require('../models/Manufacturer')

exports.postData = async (req, res)=> {
  const { name, color } = req.body;
   
  const car = new Car({
      name,
      color,
      manu:[]
  })

  try {
      const data = await car.save()
      res.status(200).json(data)
  } catch (error) {
      console.log(error)
  }

}

exports.getSingleCar = async (req,res)=>{
    try {
       const car = await Car.findById(req.params.id);
        res.status(201).json(car)

    } catch (error) {
        console.log(error)
    }
}

exports.postManuData = async (req,res)=>{
    const { name ,country } = req.body;

    const manu = new Manufacture({
        name,country
    })

    try {
        const data = await manu.save();
        /*
        const car = await Car.findById(req.params.id)
          car.manu.push(data._id)
            car.save(); */
            const data2 = await Car.findByIdAndUpdate(req.params.id,
                {$push:{'manu': data._id}}
                )
            res.status(201).json(data);
    } catch (error) {
        console.log(error)
    }
}

exports.getCar = async (req,res)=>{

    try {
        //find only selected data
        const data = await Car.find().select('name');
     res.json(data)
    } catch (error) {
        console.log(error)
    }
}

exports.updateCar = async (req,res)=>{

    try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        if(!car){
            return res.status(400).json({
                success:false
            })
        }
        res.status(201).json({
            success:true,
            car
        })
    } catch (error) {
        console.log(error)
    }
}

exports.DeleteCar = async (req,res)=>{

    try {
        const car = await Car.findByIdAndDelete(req.params.id)
        res.status(201).json(car)
    } catch (error) {
        console.log(error)
    }
}