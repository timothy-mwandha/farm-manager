var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sweetmom1844.",
  database: "farmmanager"
});
connection.connect(error => {
  if (error) {
    console.log(error);
  } else {
    console.log("Mysql Connected...");
  }
});
module.exports = connection;
