'use strict';
const tokenValidation = require('../utils/tokenValidation')
var Governorate = require("../controllers/Governorate");


module.exports.addGovernorate = function addGovernorate (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  Governorate.addGovernorate(req, res);
  //});
};


module.exports.getAllGovernorates = function getAllGovernorates (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  Governorate.getAllGovernorates(req, res);
  //});
};
