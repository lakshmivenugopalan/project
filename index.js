const express= require('express');
const cors=require('cors');
var bodyparser= require('body-parser');
var app= new express();
const port=3000;
app.use(bodyparser.json())
app.use(cors());
const Employee=require('./src/model/Employee');
const jwt=require('jsonwebtoken');
app.post('/insert',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
let employeeData=req.body;
let employee=new Employee(employeeData);
employee.save((err,insertedEmployee)=>{
    if(err){
        console.log(err);
    }
    else{
        let payload={subject:employee._id}
        let token=jwt.sign(payload,'secretKey')
        res,status(200).send({token})

    }
})


})
