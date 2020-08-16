'use strict';

var Product = require("../controllers/Product");

module.exports.creatProduct = function creatProduct (req, res, next) {
  /*
  Here we will implement our middleware for this endPoint
  */
  Product.creatProduct(req, res);
};

module.exports.deleteProductById = function deleteProductById (req, res, next) {
  /*
  Here we will implement our middleware for this endPoint
  */
  Product.deleteProductById(req, res);
};

module.exports.getProductById = function getProductById (req, res, next) {
  /*
  Here we will implement our middleware for this endPoint
  */
  Product.getProductById(req, res);
};

module.exports.listProduct = function listProduct (req, res, next) {
  /*
  Here we will implement our middleware for this endPoint
  */
  Product.listProduct(req, res);
};

module.exports.listProductsByFilters = function listProductsByFilters (req, res, next) {
  /*
  Here we will implement our middleware for this endPoint
  */
  Product.listProductsByFilters(req, res);
};

module.exports.updateProductById = function updateProductById (req, res, next) {
  /*
  Here we will implement our middleware for this endPoint
  */
  Product.updateProductById(req, res);
};

module.exports.uploadProductAttachments = function uploadProductAttachments (req, res, next) {
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
  Product.uploadProductAttachments(req, res);
  //     }
  //   });
  // }
  
};