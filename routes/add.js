const express = require('express');
const router = express.Router()

const { postData, postManuData,getCar,updateCar, DeleteCar, getSingleCar} = require('../controllers/addController')

router.post('/car', postData);
router.post('/manu/:id', postManuData);
router.get('/car',getCar);
router.get('/singlecar/:id',getSingleCar);
router.put('/car/:id',updateCar);
router.delete('/car/:id', DeleteCar)

module.exports= router;


