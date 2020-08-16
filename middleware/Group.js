'use strict';

var Group = require("../controllers/Group");
const secret = process.env.auth_secret || 'noway';
const jwt = require('jsonwebtoken');
var utils = require('../utils/writer.js');

module.exports.createGroup = function createGroup(req, res, next) {
  // const token = req.swagger.params['x-access-token'].value
  // if (!token) {
  //   let response = {
  //     resBody: {
  //       payload: null,
  //       msg: "No Token To Verify"
  //     }
  //   }
  //   utils.writeJson(res, response, 401);
  // } else {
  //   jwt.verify(token, secret, function (err, decoded) {
  //     if (err) {
  //       let response = {
  //         resBody: {
  //           payload: null,
  //           msg: "Unauthorized: Invalid token"
  //         }
  //       }
  //       utils.writeJson(res, response, 401);
  //     } else {
  //       req.user = decoded;
        Group.createGroup(req, res);
  //     }
  //   });
  // }

};

module.exports.deleteGroup = function deleteGroup(req, res, next) {
  // const token = req.swagger.params['x-access-token'].value
  // if (!token) {
  //   let response = {
  //     resBody: {
  //       payload: null,
  //       msg: "No Token To Verify"
  //     }
  //   }
  //   utils.writeJson(res, response, 401);
  // } else {
  //   jwt.verify(token, secret, function (err, decoded) {
  //     if (err) {
  //       let response = {
  //         resBody: {
  //           payload: null,
  //           msg: "Unauthorized: Invalid token"
  //         }
  //       }
  //       utils.writeJson(res, response, 401);
  //     } else {
  //       req.user = decoded;
        Group.deleteGroup(req, res);
  //     }
  //   });
  // }

};

module.exports.getGroupById = function getGroupById(req, res, next) {
  // const token = req.swagger.params['x-access-token'].value
  // if (!token) {
  //   let response = {
  //     resBody: {
  //       payload: null,
  //       msg: "No Token To Verify"
  //     }
  //   }
  //   utils.writeJson(res, response, 401);
  // } else {
  //   jwt.verify(token, secret, function (err, decoded) {
  //     if (err) {
  //       let response = {
  //         resBody: {
  //           payload: null,
  //           msg: "Unauthorized: Invalid token"
  //         }
  //       }
  //       utils.writeJson(res, response, 401);
  //     } else {
  //       req.user = decoded;
        Group.getGroupById(req, res);
  //     }
  //   });
  // }

};

module.exports.listGroup = function listGroup(req, res, next) {
  // const token = req.swagger.params['x-access-token'].value
  // if (!token) {
  //   let response = {
  //     resBody: {
  //       payload: null,
  //       msg: "No Token To Verify"
  //     }
  //   }
  //   utils.writeJson(res, response, 401);
  // } else {
  //   jwt.verify(token, secret, function (err, decoded) {
  //     if (err) {
  //       let response = {
  //         resBody: {
  //           payload: null,
  //           msg: "Unauthorized: Invalid token"
  //         }
  //       }
  //       utils.writeJson(res, response, 401);
  //     } else {
  //       req.user = decoded;
        Group.listGroup(req, res);
  //     }
  //   });
  // }

};

module.exports.updateGroupById = function updateGroupById(req, res, next) {
  // const token = req.swagger.params['x-access-token'].value
  // if (!token) {
  //   let response = {
  //     resBody: {
  //       payload: null,
  //       msg: "No Token To Verify"
  //     }
  //   }
  //   utils.writeJson(res, response, 401);
  // } else {
  //   jwt.verify(token, secret, function (err, decoded) {
  //     if (err) {
  //       let response = {
  //         resBody: {
  //           payload: null,
  //           msg: "Unauthorized: Invalid token"
  //         }
  //       }
  //       utils.writeJson(res, response, 401);
  //     } else {
  //       req.user = decoded;
        Group.updateGroupById(req, res);
  //     }
  //   });
  // }

};
