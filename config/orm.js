//importing mysql connection
var connection = require("./connection.js");


selectAll();
insertOne();
updateOne();

//export orm for burger.js
module.exports = orm;