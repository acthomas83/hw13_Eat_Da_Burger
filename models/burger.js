// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", cb);
  },
  // The variables cols and vals are arrays.
  insertOne: function(content, cb) {
    orm.insertOne("burgers", content, cb);
  },
  updateOne: function(location, cb) {
    orm.updateOne("burgers", {devoured:true}, location, cb);
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
