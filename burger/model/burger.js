var orm = require("../config/orm.js");

var burger = {

  //get the data from the database for all made burgers
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  //create a new burger
  create: function(name, cb) {
    orm.create("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },

  //"eat" a burger by setting devoured to true
  eat: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  },
  //reorder a burger by resetting the devoured to false
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: false
    }, condition, cb);
  }
};


// export
module.exports = burger;
