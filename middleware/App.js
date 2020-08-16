'use strict';

var App = require("../controllers/App");
const secret = process.env.auth_secret || 'noway';
const jwt = require('jsonwebtoken');
var utils = require('../utils/writer.js');

module.exports.addAppLayout = function addAppLayout(req, res, next) {
  const token = req.swagger.params['x-access-token'].value
  if (!token) {
    let response = {
      resBody: {
        payload: null,
        msg: "No Token To Verify"
      }
    }
    utils.writeJson(res, response, 401);
  } else {
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        let response = {
          resBody: {
            payload: null,
            msg: "Unauthorized: Invalid token"
          }
        }
        utils.writeJson(res, response, 401);
      } else {
        req.user = decoded;
        App.addAppLayout(req, res);
      }
    });
  }

};

module.exports.appGetOne = function appGetOne(req, res, next) {

  App.appGetOne(req, res);
};

module.exports.deleteAppLayout = function deleteAppLayout(req, res, next) {
  const token = req.swagger.params['x-access-token'].value
  if (!token) {
    let response = {
      resBody: {
        payload: null,
        msg: "No Token To Verify"
      }
    }
    utils.writeJson(res, response, 401);
  } else {
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        let response = {
          resBody: {
            payload: null,
            msg: "Unauthorized: Invalid token"
          }
        }
        utils.writeJson(res, response, 401);
      } else {
        req.user = decoded;
        App.deleteAppLayout(req, res);
      }
    });
  }

};

module.exports.getAppLayoutList = function getAppLayoutList(req, res, next) {
  const token = req.swagger.params['x-access-token'].value
  if (!token) {
    let response = {
      resBody: {
        payload: null,
        msg: "No Token To Verify"
      }
    }
    utils.writeJson(res, response, 401);
  } else {
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        let response = {
          resBody: {
            payload: null,
            msg: "Unauthorized: Invalid token"
          }
        }
        utils.writeJson(res, response, 401);
      } else {
        req.user = decoded;
        App.getAppLayoutList(req, res);
      }
    });
  }

};

module.exports.updateAppLayout = function updateAppLayout(req, res, next) {
  const token = req.swagger.params['x-access-token'].value
  if (!token) {
    let response = {
      resBody: {
        payload: null,
        msg: "No Token To Verify"
      }
    }
    utils.writeJson(res, response, 401);
  } else {
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        let response = {
          resBody: {
            payload: null,
            msg: "Unauthorized: Invalid token"
          }
        }
        utils.writeJson(res, response, 401);
      } else {
        req.user = decoded;
        App.updateAppLayout(req, res);
      }
    });
  }

};
