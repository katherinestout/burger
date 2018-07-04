//importing mysql connection
var connection = require("../config/connection.js");

//helper functions
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }

//another helper function
function objToSql(ob) {
var arr = [];
for (var key in ob) {
arr.push(key + "=" + ob[key]);
}
return arr.toString();
}


var orm = {
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM" + tableInput + 
    } }

selectAll();
insertOne();
updateOne();

//export orm for burger.js
module.exports = orm;