const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDb');
const Schema=mongoose.Schema;
var NewLeaveSchema = new Schema({
     employeeId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'employees',
         required: true
     },
leaveBalace:String,
leaveApplication:String
});
var Leavedata=mongoose.model('employee',NewLeaveSchema);
module.exports = { Leavedata };