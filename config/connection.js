//Connect NODE to MYSQL
var mysql = require("mysql");
//var connection;

//Setting up the connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burger_db"
});

//Making the connection
connection.connect(function(err) {
  if (err) {
  console.log("connected as id " + connection.threadId);
  return;
  }
  //connection.end();
});

// Exporting the connection 
module.exports = connection;