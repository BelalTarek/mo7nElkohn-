'use strict';

var utils = require('../utils/writer.js');
var Product = require('../service/ProductService');

module.exports.creatProduct = function creatProduct (req, res, next) {
  var product = req.swagger.params['product'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Product.creatProduct(product,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProductById = function deleteProductById (req, res, next) {
  var id = req.swagger.params['id'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Product.deleteProductById(id,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductById = function getProductById (req, res, next) {
  var id = req.swagger.params['id'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Product.getProductById(id,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listProduct = function listProduct (req, res, next) {
  var rps = req.swagger.params['rps'].value;
  var rpi = req.swagger.params['rpi'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Product.listProduct(rps,rpi,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listProductsByFilters = function listProductsByFilters (req, res, next) {
  var rps = req.swagger.params['rps'].value;
  var rpi = req.swagger.params['rpi'].value;
  var matchingParams = req.swagger.params['matchingParams'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Product.listProductsByFilters(rps,rpi,matchingParams,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProductById = function updateProductById (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Product.updateProductById(id,body,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.uploadProductAttachments = function uploadProductAttachments (req, res, next) {
  var upfile = req.files.upfile[0];
  Product.uploadProductAttachments(upfile)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
