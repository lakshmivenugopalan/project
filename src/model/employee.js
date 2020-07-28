const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDb');
const Schema=mongoose.Schema;
var NewEmployeeSchema=new Schema({
    employeeId:String,
    employeeName:String,
    email:String,
    department:String,
    address:String,
   education:String,
    dateofbirth:String,
    imageUrl:String
});
var Employeedata=mongoose.model('employees',NewEmployeeSchema);
module.exports={Employeedata};