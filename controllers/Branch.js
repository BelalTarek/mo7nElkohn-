'use strict';

var utils = require('../utils/writer.js');
var Branch = require('../service/BranchService');

module.exports.createbranch = function createbranch (req, res, next) {
  var branches = req.swagger.params['branches'].value;
  Branch.createbranch(branches)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBranchesById = function deleteBranchesById (req, res, next) {
  var iDs = req.swagger.params['IDs'].value;
  Branch.deleteBranchesById(iDs)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBranchByGeo = function getBranchByGeo (req, res, next) {
  var longitude = req.swagger.params['longitude'].value;
  var latitude = req.swagger.params['latitude'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Branch.getBranchByGeo(longitude,latitude,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listBranches = function listBranches (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Branch.listBranches(xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBranchs = function updateBranchs (req, res, next) {
  var body = req.swagger.params['body'].value;
  Branch.updateBranchs(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
