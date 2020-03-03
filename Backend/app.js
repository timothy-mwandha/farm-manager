/*Defining variables and assigning them the required libraries needed to run the application */
const express = require("express");
const morgan = require("morgan");
const parser = require("body-parser");
const crypto = require("crypto");
const session = require("express-session");
const cors = require("cors");

const mysql = require("mysql");
var db = require("./db/db");

// var indexRouter = require("./src/routes/index");
// var usersRouter = require("./src/routes/users");
// var emplyeesRouter = require("./src/routes/employees");

//Creating an app using the express module
const app = express();
app.use(parser.json());
app.use(cors());

app.get("/data", function(req, res) {
  var sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.post("/data", function(req, res) {
  console.log(req.body);
  var data = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password
  };
  var sql = "INSERT INTO users SET ?";
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send({
      status: "Data has been captured!",
      id: null,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password
    });
  });
});

app.listen(3002, () => {
  console.log("Server is running at port 3002");
});


// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const cors = require("cors");

// const connection = mysql.createPool ({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'farmmanager'
// });


// /**creating the app and using the 3rd party modules */
// const app = express();
// app.use(bodyParser.json);
// app.use(cors());

// /** creating a GET route */
// app.get('/personnel', function (req, res) {
//     //connecting to db
//     connection.getConnection (function (err, connection) {
//         //executing the mySQL query to select data from table
//         connection.query('SELECT * FROM personnel',  function (error, results, fields) {
//           //if some error occurs, throw an error.
//           if(error)  throw error;
//             console.log(results);
//             console.log(fields);
//           // getting the 'response' from the database and sending it to our route.
//           //this is where the data is.
//           res.send(results);
//         });
//     });
// });


// app.post('/personnel', (req, res) =>{
//     const FirstName = req.body.FirstName;
//     const LastName = req.body.LastName;
//     const DateOfBirth = req.body.DateOfBirth;
//     const PhoneNumber1 = req.body.PhoneNumber1;
//     const PhoneNumber2 = req.body.PhoneNumber2;
//     const NationalIdNo = req.body.NationalIdNo;
//     const JobTitle = req.body.JobTitle;
//     const JobStartDate = req.body.JobStartDate;
//     const Qualifications = req.body.Qualifications;

//     console.log(req.body);
    

// /** create a query and insert into database*/
//     const querystring = "INSERT INTO personnel(FirstName,LastName, DateOfBirth, PhoneNumber1, PhoneNumber1, NationalIdNo, JobTitle, JobStartDate, Qualifications) VALUES (?,?,?,?,?,?,?,?,?)";

// /** the connection method passes arguments of the variables*/
//     connection.query(querystring, [FirstName,LastName, DateOfBirth, PhoneNumber1, PhoneNumber1, NationalIdNo, JobTitle, JobStartDate, Qualifications]);
//     console.log('getting the form input');

// })

// // starting our app.
// app.listen (3000, () => {
//     console.log ('Server has started at port 3000!');
// });