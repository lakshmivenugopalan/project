const express = require('express');
const cors = require('cors');
var bodyparser = require('body-parser');
var app = new express();
const port = 3000;
app.use(bodyparser.json())
app.use(cors());
var employeeRouter = require('./src/routes/employee');

const Employee = require('./src/model/employee');

app.use('/employee', employeeRouter)
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');



    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.post('/insert', (req, res) => {

    let employeeData = req.body;
    let employee = new Employee(employeeData);
    employee.save((err, insertedEmployee) => {
        if (err) {
            console.log(err);
        } else {

            res.json({
                "inserted": "true"
            })
        }
    })


})


app.listen(process.env.PORT || 3000, () => {
    console.log("server started");
})