var express = require('express')
const employeeRouter = express.Router();
var bodyparser = require('body-parser')
var {
    Employeedata
} = require('../model/employee');


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





module.exports = employeeRouter;