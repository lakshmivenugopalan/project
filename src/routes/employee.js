var express = require('express')
const employeeRouter = express.Router();
var bodyparser = require('body-parser')
var {
    Employeedata
} = require('../model/employee');

var {
    Jobdata
} = require('../model/jobdata');

var {
    Leavedata
} = require('../model/leave');


employeeRouter.use(bodyparser.urlencoded({
    extended: true
}));
employeeRouter.use(bodyparser.json())


employeeRouter.post("/insert", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    let employeeData = req.body;
    console.log(employeeData);
    let employee = new Employeedata(employeeData);
    employee.save((err) => {
        if (err) {
            console.log(err);
            res.json({
                "inserted": "false"
            })
        } else {

            res.json({
                "inserted": "true"
            })
        }
    })

})



employeeRouter.post("/addjob", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    let jobData = req.body;
    console.log(jobData);
    let job = new Jobdata(jobData);
    job.save((err) => {
        if (err) {
            console.log(err);
            res.json({
                "inserted": "false"
            })
        } else {

            res.json({
                "inserted": "true"
            })
        }
    })

})

employeeRouter.post("/addleave", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    let leaveData = req.body;
    console.log(leaveData);
    let lv = new Leavedata(leaveData);
    lv.save((err) => {
        if (err) {
            console.log(err);
            res.json({
                "inserted": "false"
            })
        } else {

            res.json({
                "inserted": "true"
            })
        }
    })

})


employeeRouter.get('/viewall', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    try {

        var result = await Employeedata.find()
        res.send(result);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});





module.exports = employeeRouter;