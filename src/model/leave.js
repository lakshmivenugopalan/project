const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDb');
const Schema=mongoose.Schema;
var NewLeaveSchema=new Schema({
leaveBalace:String,
leaveApplication:String
});
var Leavedata=mongoose.model('employee',NewLeaveSchema);
module.exports=Leavedata;