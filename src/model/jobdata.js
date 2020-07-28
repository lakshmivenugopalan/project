const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDb');
const Schema = mongoose.Schema;
var NewJobSchema = new Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employees',
        required: true
    },
    dateofjoin: String,
    jobTitle: String,
    salary: String
});
var Jobdata = mongoose.model('job', NewJobSchema);
module.exports = {
    Jobdata
};