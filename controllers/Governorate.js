'use strict';

var utils = require('../utils/writer.js');
var Governorate = require('../service/GovernorateService');

module.exports.addGovernorate = function addGovernorate (req, res, next) {
  var governorateItem = req.swagger.params['GovernorateItem'].value;
  Governorate.addGovernorate(governorateItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllGovernorates = function getAllGovernorates (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Governorate.getAllGovernorates(xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
