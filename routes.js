const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'farmmanager'
});

/**starting the server */
const server = express();

/** creating a GET route */
server.get('/personnel', function (req, res) {
    //connecting to db
    connection.getConnection (function (err, connection) {
        //executing the mySQL query to select data from table
        connection.query('SELECT *FROM personnel',  function (error, results, fields) {
          //if some error occurs, throw an error.
          if(error)  throw error;

          // getting the 'response' from the database and sending it to our route.
          //this is where the data is.
          res.send(results)
        });
    });
});


server.post('/personnel', (req, res) =>{
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const DateOfBirth = req.body.DateOfBirth;
    const PhoneNumber1 = req.body.PhoneNumber1;
    const PhoneNumber2 = req.body.PhoneNumber2;
    const NationalIdNo = req.body.NationalIdNo;
    const JobTitle = req.body.JobTitle;
    const JobStartDate = req.body.JobStartDate;
    const Qualifications = req.body.Qualifications;

/** create a query and insert into database*/
    const querystring = "INSERT INTO personnel(FirstName,LastName, DateOfBirth, PhoneNumber1, PhoneNumber1, NationalIdNo, JobTitle, JobStartDate, Qualifications) VALUES (?,?,?,?,?,?,?,?,?)";

/** the connection method passes arguments of the variables*/
    connection.query(querystring, [FirstName,LastName, DateOfBirth, PhoneNumber1, PhoneNumber1, NationalIdNo, JobTitle, JobStartDate, Qualifications])
    console.log('getting the form input posted');

}

// starting our server.
server.listen (3000, () => {
    console.log ('server has started at port 3000!');
});