'use strict';

var User = require("../controllers/User");
const secret = process.env.auth_secret || 'noway';
const jwt = require('jsonwebtoken');
var utils = require('../utils/writer.js');

module.exports.createUser = function createUser(req, res, next) {
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
        User.createUser(req, res);
  //     }
  //   });
  // }
};

module.exports.deleteUserById = function deleteUserById(req, res, next) {
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
        User.deleteUserById(req, res);
  //     }
  //   });
  // }

};

module.exports.getUserByName = function getUserByName(req, res, next) {
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
        User.getUserByName(req, res);
  //     }
  //   });
  // }

};

module.exports.listUsers = function listUsers(req, res, next) {
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
        User.listUsers(req, res);
  //     }
  //   });
  // }

};

module.exports.listUsersByFilters = function listUsersByFilters(req, res, next) {
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
        User.listUsersByFilters(req, res);
  //     }
  //   });
  // }

};

module.exports.updateUser = function updateUser(req, res, next) {
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
        User.updateUser(req, res);
  //     }
  //   });
  // }

};

module.exports.updateUserById = function updateUserById(req, res, next) {
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
        User.updateUserById(req, res);
  //     }
  //   });
  // }
};

module.exports.userLogin = function userLogin(req, res, next) {
  /*
  Here we will implement our middleware for this endPoint
  */
  User.userLogin(req, res);
};

module.exports.userLogout = function userLogout(req, res, next) {
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
        User.userLogout(req, res);
  //     }
  //   });
  // }

};
