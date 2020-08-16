'use strict';

var utils = require('../utils/writer.js');
var Category = require('../service/CategoryService');

module.exports.creatCategory = function creatCategory (req, res, next) {
  var category = req.swagger.params['Category'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Category.creatCategory(category,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.creatSubCategory = function creatSubCategory (req, res, next) {
  var subCategory = req.swagger.params['SubCategory'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Category.creatSubCategory(subCategory,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCategoryById = function deleteCategoryById (req, res, next) {
  var id = req.swagger.params['id'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Category.deleteCategoryById(id,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSubCategoryById = function deleteSubCategoryById (req, res, next) {
  var id = req.swagger.params['id'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Category.deleteSubCategoryById(id,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCategoryById = function getCategoryById (req, res, next) {
  var id = req.swagger.params['id'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Category.getCategoryById(id,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSubCategoryById = function getSubCategoryById (req, res, next) {
  var id = req.swagger.params['id'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Category.getSubCategoryById(id,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listCategoryTypes = function listCategoryTypes (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Category.listCategoryTypes(xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listSubCategoryByCategoryCode = function listSubCategoryByCategoryCode (req, res, next) {
  var categoryCode = req.swagger.params['categoryCode'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Category.listSubCategoryByCategoryCode(categoryCode,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCategoryById = function updateCategoryById (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Category.updateCategoryById(id,body,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSubCategoryById = function updateSubCategoryById (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Category.updateSubCategoryById(id,body,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
