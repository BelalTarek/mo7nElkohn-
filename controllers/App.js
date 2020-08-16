'use strict';

var utils = require('../utils/writer.js');
var App = require('../service/AppService');

module.exports.addAppLayout = function addAppLayout (req, res, next) {
  var layout = req.swagger.params['layout'].value;
  App.addAppLayout(layout)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.appGetOne = function appGetOne (req, res, next) {
  var id = req.swagger.params['id'].value;
  App.appGetOne(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAppLayout = function deleteAppLayout (req, res, next) {
  var id = req.swagger.params['id'].value;
  App.deleteAppLayout(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAppLayoutList = function getAppLayoutList (req, res, next) {
  App.getAppLayoutList()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAppLayout = function updateAppLayout (req, res, next) {
  var id = req.swagger.params['id'].value;
  var layout = req.swagger.params['layout'].value;
  App.updateAppLayout(id,layout)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
