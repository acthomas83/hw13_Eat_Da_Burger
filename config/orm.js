var connection = require("../config/connection.js");

var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (tableInput, content, cb){
    var queryString = "INSERT INTO " + tableInput + "SET ?;";
    connection.query(queryString, content, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function (tableInput, content, location, cb){
    var queryString = "UPDATE " + tableInput + "SET ? WHERE ?;";
    connection.query(queryString, [content, location], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;

//
// orm.selectAll("burgers", function(){})
// let something = {
//     devoured: true
// }

// let l = {
//     id: 4
// }
// orm.insertOne("burgers", something, function(){})
