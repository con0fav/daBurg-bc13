// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burg = {
  all: function(cb) {
    orm.all("burgs", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgs", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgs", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgs", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgsController.js).
module.exports = burg;
