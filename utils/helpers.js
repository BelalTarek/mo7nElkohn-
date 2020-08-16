const bcrypt = require("bcrypt");
const saltRounds = 10;
const XLSX = require('xlsx');
// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({
  accessKeyId: "AKIAIXMDCPFTLZQ2EWXQ",
  secretAccessKey: "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"
});

// Create S3 service object
const s3 = new AWS.S3({});

exports.hashPassword = function(users) {
  return Promise.all(
    users.map(async user => {
      const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(user.password, saltRounds, function(err, hash) {
          err
            ? reject(err)
            : resolve({
                ...user,
                password: hash,
                email: user.email.toLowerCase()
              });
        });
      });
      return hashedPassword;
    })
  );
};
exports.signedUrl = function(data, myBucket) {
  const signedUrlExpireSeconds = 60 * 15;
  return Promise.all(
    data.map(async oneAttachment => {
      const signedUrl = await new Promise((resolve, reject) => {
        const url = s3.getSignedUrl("getObject", {
          Bucket: myBucket,
          // TODO: needs a better handling
          Key: oneAttachment.files[0].fileName,
          Expires: signedUrlExpireSeconds
        });
        resolve(url);
      });
      return signedUrl;
    })
  );
};

exports.isCorrectPassword = function(password, user, callback) {
  bcrypt.compare(password, user.password, function(err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};

exports.parseFile = function(upfile, callback) {
  try {
      var workbook = XLSX.read(upfile.buffer);
      var sheet_name_list = workbook.SheetNames;
      var data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
  }
  catch (err) {
      return callback(true, err)
  }
  return callback(false, data)


}

exports.manageArray = function(products) {
  return Promise.all(
    products.map(async product => {
      const handledProduct = await new Promise((resolve, reject) => {
        resolve({
          ...product,
          installmentOptions:{
            numberOfMonths:product.numberOfMonths,
            deposit:product.deposit,
            monthlyInstallment:product.monthlyInstallment
            },
        });
      });
      return handledProduct;
    })
  );
};