"use strict";
var index = require("../index");

var Loan = index.models.Loan;
var LoanTypes = index.models.loanType;
var LoanStatus = index.models.loanStatus;
var LoanAttachments = index.models.LoanAttachments;
var FileData = index.models.FileData;

/**
 * calculate the loan insatllment options
 *
 *
 * loanParams LoanParams Loan object that needs to be calculated
 * returns List
 **/
exports.calculateLoan = function(loanParams, callback) {
  Loan.create(loanParams, (err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null);
    }
  });
};

/**
 * Add a new loan Applications
 *
 * createLoan List Loan object that needs to be added
 * returns List
 **/
exports.creatLoan = function(createLoan, callback) {
  Loan.create(createLoan, (err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null);
    }
  });
};

/**
 * List All loan types
 *
 *
 * returns List
 **/
exports.listLoanTypes = function(callback) {
  LoanTypes.find({}, (err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null);
    }
  });
};
exports.listLoanStatus = function(callback) {
  LoanStatus.find({}, (err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null);
    }
  });
};
exports.newLoanStatus = function(callback) {
  LoanStatus.findOne({ name: "طلب جديد" }, (err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null);
    }
  });
};

exports.listLoansByFilters = function(rps, rpi, matchingParams, callback) {
  var totalCount;
  const pageIndex = rpi || 1;
  const perPage = rps || 5;
  Loan.count({ ...matchingParams }, (err, count) => {
    if (!err && count) {
      totalCount = count;
      Loan.find({ ...matchingParams })
        .skip(perPage * pageIndex - perPage)
        .limit(perPage)
        .populate("branchId")
        .populate("loanStatus")
        .populate("loanType")
        .populate("productId", "productName")
        .sort({ createdAt: "desc" })
        .exec((err, data) => {
          if (!err && data) {
            var numberOfPages = Math.ceil(totalCount / perPage);
            var response = {
              data,
              ResultReport: {
                totalCount,
                numberOfPages,
                pageIndex
              }
            };
            return callback(null, response);
          } else if (err) {
            return callback(err, null);
          } else {
            return callback(null, null);
          }
        });
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null);
    }
  });
};
exports.listLoans = function(rps, rpi, callback) {
  var totalCount;
  const pageIndex = rpi || 1;
  const perPage = rps || 5;
  Loan.count({}, (err, count) => {
    if (!err && count) {
      totalCount = count;
      Loan.find({})
        .skip(perPage * pageIndex - perPage)
        .limit(perPage)
        // .sort({ createdAt : "desc"})
        .populate("branchId", "name")
        .populate("loanStatus", "name")
        .populate("loanType", "name")
        .exec((err, data) => {
          if (!err && data) {
            var numberOfPages = Math.ceil(totalCount / perPage);
            var response = {
              data,
              ResultReport: {
                totalCount,
                numberOfPages,
                pageIndex
              }
            };
            return callback(null, response);
          } else if (err) {
            return callback(err, null);
          } else {
            return callback(null, null);
          }
        });
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null);
    }
  });
};

/**
 * tracking loan state
 *
 *
 * nationalId String Loan object that needs to be tracked
 * returns Loan
 **/
exports.trackingLoan = function(nationalId, callback) {
  Loan.findOne({ applicant_nationalId: nationalId }, (err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null);
    }
  });
};

/**
 * Updates a loan by Id
 *
 * loanId String
 * loan Loan Updated object of the loan
 * returns List
 **/
exports.updateLoanById = function(loanId, loan, callback) {
  Loan.findOneAndUpdate(
    { _id: loanId },
    loan,
    { new: true, upsert: true, setDefaultsOnInsert: true },
    (err, data) => {
      if (!err && data) {
        return callback(null, data);
      } else if (err) {
        return callback(err, null);
      } else {
        return callback(null, null);
      }
    }
  );
};

exports.uploadFileData = function(upfile, description, callback) {
  var newFile = new FileData();
  newFile.data = upfile.buffer;
  newFile.contentType = upfile.mimetype;
  newFile.description = description;
  newFile.save((err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null);
    }
  });
};
exports.uploadLoanAttachments = function(loanId, file, callback) {
  var LoanAttachment = new LoanAttachments();
  LoanAttachment.loanId = loanId;
  LoanAttachment.files = file;
  LoanAttachment.save((err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null);
    }
  });
};

exports.getLoanAttachments = function(loanId, callback) {
  LoanAttachments.find({ loanId }, (err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null);
    }
  });
};
