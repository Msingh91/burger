var orm = require("../config/orm.js");

// Object Relational Mapper (ORM)

var burger = {
  

  all: function(cb) {
      orm.all("burgers",function(res){
          cb(res)
      })
  },

  create: function(cols, vals, cb) {
      orm.create("burgers",cols,vals,function(err,res){
          cb(res)
      })
  },

   update: function(objColVals, condition, cb) {
      orm.update("burgers",objColVals,condition,function(err,res){
          cb(res)
      })
  },
}

module.exports = burger