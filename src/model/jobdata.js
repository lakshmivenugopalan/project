const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDb');
const Schema=mongoose.Schema;
var NewJobSchema=new Schema({
    dateofjoin:String,
    jobTitle:String,
    salary:String
});
var Jobdata=mongoose.model('job',NewJobSchema);
module.exports=Jobdata;