const express = require('express');
const mongoose=require('mongoose');
const app = express();
const config = require('config');

mongoose.connect(`mongodb://${config.get('DB-username')}:${config.get('DB-password')}@ds047447.mlab.com:47447/car-manufacturer`, ()=>{
    console.log('Database connected');
})

const dataRoute = require('./routes/add') 

app.use(express.json())

app.use(dataRoute)
app.use('/',(req,res)=>{
    res.json('hello from express')
})

app.listen(5000, ()=>{
    console.log('Server running')
})