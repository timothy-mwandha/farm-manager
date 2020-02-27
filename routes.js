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

// starting our server.
server.listen (3000, () => {
    console.log ('server has started at port 3000!');
});