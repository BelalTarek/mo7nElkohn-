'use strict';

var Category = require("../controllers/Category");

module.exports.creatCategory = function creatCategory (req, res, next) {
  /*
  Here we will implement our middleware for this endPoint
  */
  Category.creatCategory(req, res);
};

module.exports.creatSubCategory = function creatSubCategory (req, res, next) {
  /*
  Here we will implement our middleware for this endPoint
  */
  Category.creatSubCategory(req, res);
};

module.exports.deleteCategoryById = function deleteCategoryById (req, res, next) {
  /*
  Here we will implement our middleware for this endPoint
  */
  Category.deleteCategoryById(req, res);
};

module.exports.deleteSubCategoryById = function deleteSubCategoryById (req, res, next) {
  /*
  Here we will implement our middleware for this endPoint
  */
  Category.deleteSubCategoryById(req, res);
};

module.exports.getCategoryById = function getCategoryById (req, res, next) {
  /*
  Here we will implement our middleware for this endPoint
  */
  Category.getCategoryById(req, res);
};

module.exports.getSubCategoryById = function getSubCategoryById (req, res, next) {
  /*
  Here we will implement our middleware for this endPoint
  */
  Category.getSubCategoryById(req, res);
};

module.exports.listCategoryTypes = function listCategoryTypes (req, res, next) {
  /*
  Here we will implement our middleware for this endPoint
  */
  Category.listCategoryTypes(req, res);
};

module.exports.listSubCategoryByCategoryCode = function listSubCategoryByCategoryCode (req, res, next) {
  /*
  Here we will implement our middleware for this endPoint
  */
  Category.listSubCategoryByCategoryCode(req, res);
};

module.exports.updateCategoryById = function updateCategoryById (req, res, next) {
  /*
  Here we will implement our middleware for this endPoint
  */
  Category.updateCategoryById(req, res);
};

module.exports.updateSubCategoryById = function updateSubCategoryById (req, res, next) {
  /*
  Here we will implement our middleware for this endPoint
  */
  Category.updateSubCategoryById(req, res);
};
