'use strict';

var utils = require('../utils/writer.js');
var Loan = require('../service/LoanService');

module.exports.calculateLoan = function calculateLoan (req, res, next) {
  var loanParams = req.swagger.params['loanParams'].value;
  Loan.calculateLoan(loanParams)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.creatLoan = function creatLoan (req, res, next) {
  var createLoan = req.swagger.params['createLoan'].value;
  Loan.creatLoan(createLoan)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listLoanTypes = function listLoanTypes (req, res, next) {
  Loan.listLoanTypes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.listLoanStatus = function listLoanStatus (req, res, next) {
  Loan.listLoanStatus()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listLoansByFilters = function listLoansByFilters (req, res, next) {
  var rps = req.swagger.params['rps'].value;
  var rpi = req.swagger.params['rpi'].value;
  var matchingParams = req.swagger.params['matchingParams'].value;
  Loan.listLoansByFilters(rps,rpi,matchingParams)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.listLoans = function listLoans (req, res, next) {
  var rps = req.swagger.params['rps'].value;
  var rpi = req.swagger.params['rpi'].value;
  Loan.listLoans(rps,rpi)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.trackingLoan = function trackingLoan (req, res, next) {
  var nationalId = req.swagger.params['nationalId'].value;
  Loan.trackingLoan(nationalId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateLoanById = function updateLoanById (req, res, next) {
  var loanId = req.swagger.params['loanId'].value;
  var loan = req.swagger.params['loan'].value;
  Loan.updateLoanById(loanId,loan)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.uploadLoanAttachments = function uploadLoanAttachments (req, res, next) {
  var upfile = req.files.upfile[0];
  var loanId = req.swagger.params['loanId'].value;
  var description = req.swagger.params['description'].value;
  Loan.uploadLoanAttachments(loanId,upfile,description)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.getLoanAttachments = function getLoanAttachments (req, res, next) {
  var loanId = req.swagger.params['loanId'].value;
  Loan.getLoanAttachments(loanId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};