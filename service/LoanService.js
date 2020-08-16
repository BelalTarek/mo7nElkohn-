"use strict";

const Loan = require("../dal/LoanDal");
const helpers = require("../utils/helpers");

// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({
  accessKeyId: "AKIAIXMDCPFTLZQ2EWXQ",
  secretAccessKey: "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"
});

// Create S3 service object
const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

exports.calculateLoan = function(loanParams) {
  return new Promise(function(resolve, reject) {
    var InsatllmentList = new Array();
    var perMonth = (loanParams.loanAmount * 1.22) / loanParams.LoanInstallment;
    for (var i = 0; i < loanParams.LoanInstallment; i++) {
      InsatllmentList.push(perMonth);
    }
    resolve({
      resBody: {
        payload: { InsatllmentList },
        msg: "succeed msg",
        code: 200
      }
    });
    // Loan.calculateLoan(loanParams, (err, data) => {
    //   if (err || !data) {
    //     reject({
    //       resBody: {
    //         payload: null,
    //         msg: err
    //       }
    //     })
    //   } else {
    //     resolve({
    //       resBody: {
    //         payload: data,
    //         msg: "succeed msg",
    //         code: 200
    //       },
    //     })
    //   }
    // })
  });
};

exports.creatLoan = function(createLoan) {
  return new Promise(function(resolve, reject) {
    Loan.creatLoan(
      { ...createLoan[0], loanStatus: "5e1cf282b5cf3a6691e6fb4c" },
      (err, data) => {
        if (err || !data) {
          reject({
            resBody: {
              payload: null,
              msg: err
            }
          });
        } else {
          resolve({
            resBody: {
              payload: data,
              msg: "succeed msg",
              code: 200
            }
          });
        }
      }
    );
  });
};

exports.listLoanTypes = function() {
  return new Promise(function(resolve, reject) {
    Loan.listLoanTypes((err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        });
      } else {
        resolve({
          resBody: {
            payload: data,
            msg: "succeed msg",
            code: 200
          }
        });
      }
    });
  });
};
exports.listLoanStatus = function() {
  return new Promise(function(resolve, reject) {
    Loan.listLoanStatus((err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        });
      } else {
        resolve({
          resBody: {
            payload: data,
            msg: "succeed msg",
            code: 200
          }
        });
      }
    });
  });
};

exports.listLoansByFilters = function(rps, rpi, matchingParams) {
  return new Promise(function(resolve, reject) {
    Loan.listLoansByFilters(rps, rpi, matchingParams, (err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        });
      } else {
        resolve({
          resBody: {
            payload: data,
            msg: "succeed msg",
            code: 200
          }
        });
      }
    });
  });
};
exports.listLoans = function(rps, rpi) {
  return new Promise(function(resolve, reject) {
    Loan.listLoans(rps, rpi, (err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        });
      } else {
        resolve({
          resBody: {
            payload: data,
            msg: "succeed msg",
            code: 200
          }
        });
      }
    });
  });
};

exports.trackingLoan = function(nationalId) {
  return new Promise(function(resolve, reject) {
    Loan.trackingLoan(nationalId, (err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        });
      } else {
        resolve({
          resBody: {
            payload: data,
            msg: "succeed msg",
            code: 200
          }
        });
      }
    });
  });
};

exports.updateLoanById = function(loanId, loan) {
  return new Promise(function(resolve, reject) {
    Loan.updateLoanById(loanId, loan, (err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        });
      } else {
        resolve({
          resBody: {
            payload: {
              data
            },
            msg: "تم التعديل بنجاح",
            code: 200
          }
        });
      }
    });
  });
};
exports.uploadLoanAttachments = function(loanId, upfile, description) {
  return new Promise(function(resolve, reject) {
    var uploadParams = { Bucket: "mashrooy", Key: "", Body: "" };
    uploadParams.Body = upfile.buffer;
    var path = require("path");
    uploadParams.Key = path.basename(upfile.originalname);

    s3.upload(uploadParams, function(err, data) {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        });
      } else {
        var fileUrl = data.Location;
        var fileName = data.key;
        Loan.uploadLoanAttachments(
          loanId,
          { fileUrl, fileName },
          (err, data) => {
            if (err || !data) {
              reject({
                resBody: {
                  payload: null,
                  msg: err
                }
              });
            } else {
              resolve({
                resBody: {
                  payload: {
                    data
                  },
                  msg: "succeed msg",
                  code: 200
                }
              });
            }
          }
        );
      }
    });
  });
};

exports.getLoanAttachments = function(loanId) {
  return new Promise(function(resolve, reject) {
    Loan.getLoanAttachments(loanId, async (err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        });
      } else {
        const signedUrl = await helpers.signedUrl(data, "mashrooy");
        resolve({
          resBody: {
            payload: { files: signedUrl },
            msg: "succeed msg",
            code: 200
          }
        });
      }
    });
  });
};
