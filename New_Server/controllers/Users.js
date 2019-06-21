'use strict';

var url = require('url');


var Users = require('./UsersService');


module.exports.getUserUserID = function getUserUserID (req, res, next) {
  Users.getUserUserID(req.swagger.params, res, next);
};

module.exports.postUser = function postUser (req, res, next) {
  Users.postUser(req.swagger.params, res, next);
};

module.exports.postUserLogin = function postUserLogin (req, res, next) {
  let insertedPassword = req.body.Password;
  console.log(req.body.UserId);
  console.log(req.body.Password);
  if (insertedPassword === Users.postUserLogin(req.swagger.params, res, next)){
    if( !req.session || !req.session.loggedin){
      req.session.loggedin = true;
    }
  }

};

module.exports.postUserLogout = function postUserLogout (req, res, next) {
  Users.postUserLogout(req.swagger.params, res, next);
};