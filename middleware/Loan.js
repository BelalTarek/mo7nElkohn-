'use strict';

var Loan = require("../controllers/Loan");
const secret = process.env.auth_secret || 'noway';
const jwt = require('jsonwebtoken');
var utils = require('../utils/writer.js');

module.exports.calculateLoan = function calculateLoan(req, res, next) {
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
        Loan.calculateLoan(req, res);
  //     }
  //   });
  // }

};

module.exports.creatLoan = function creatLoan(req, res, next) {
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
        Loan.creatLoan(req, res);
  //     }
  //   });
  // }

};

module.exports.listLoanTypes = function listLoanTypes(req, res, next) {
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
        Loan.listLoanTypes(req, res);
  //     }
  //   });
  // }

};
module.exports.listLoanStatus = function listLoanStatus(req, res, next) {
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
        Loan.listLoanStatus(req, res);
  //     }
  //   });
  // }

};

module.exports.listLoansByFilters = function listLoansByFilters(req, res, next) {
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
        Loan.listLoansByFilters(req, res);
  //     }
  //   });
  // }

};
module.exports.listLoans = function listLoans(req, res, next) {
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
        Loan.listLoans(req, res);
  //     }
  //   });
  // }

};

module.exports.trackingLoan = function trackingLoan(req, res, next) {
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
        Loan.trackingLoan(req, res);
  //     }
  //   });
  // }

};

module.exports.updateLoanById = function updateLoanById (req, res, next) {
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
        Loan.updateLoanById(req, res);
  //     }
  //   });
  // }
  
};
module.exports.uploadLoanAttachments = function uploadLoanAttachments (req, res, next) {
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
        Loan.uploadLoanAttachments(req, res);
  //     }
  //   });
  // }
  
};
module.exports.getLoanAttachments = function getLoanAttachments (req, res, next) {
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
        Loan.getLoanAttachments(req, res);
  //     }
  //   });
  // }
  
};