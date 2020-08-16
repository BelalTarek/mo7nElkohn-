'use strict';
var index = require('../index')

var Category = index.models.Category;
var SubCategory = index.models.SubCategory;



/**
 * Add new Category
 *
 * category List Category array that needs to be added
 * xAccessToken String user token to check if user authenticated (optional)
 * returns List
 **/
exports.creatCategory = function(category,xAccessToken,callback) {
   Category.create(category, (err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null)
    }
  });
}


/**
 * Add new SubCategory
 *
 * subCategory List SubCategory array that needs to be added
 * xAccessToken String user token to check if user authenticated (optional)
 * returns List
 **/
exports.creatSubCategory = function(subCategory,xAccessToken,callback) {
  SubCategory.create(subCategory, (err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null)
    }
  });
}


/**
 * Delete Category
 * This can only be done by the logged in employee.
 *
 * id String The Category id that needs to be deleted
 * xAccessToken String user token to check if user authenticated (optional)
 * returns Category
 **/
exports.deleteCategoryById = function(id,xAccessToken,callback) {
   Category.deleteOne({_id: id}, (err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null)
    }
  });
}


/**
 * Delete SubCategory
 * This can only be done by the logged in employee.
 *
 * id String The SubCategory id that needs to be deleted
 * xAccessToken String user token to check if user authenticated (optional)
 * returns SubCategory
 **/
exports.deleteSubCategoryById = function(id,xAccessToken,callback) {
  SubCategory.deleteOne({_id: id}, (err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null)
    }
  });
}


/**
 * Get Category by Id
 *
 * id String The id of the category that needs to be fetched.
 * xAccessToken String user token to check if user authenticated (optional)
 * returns Category
 **/
exports.getCategoryById = function(id,xAccessToken,callback) {
   Category.findOne({_id: id}, (err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null)
    }
  });
}


/**
 * Get subCategory by Id
 *
 * id String The id of the SubCategory that needs to be fetched.
 * xAccessToken String user token to check if user authenticated (optional)
 * returns SubCategory
 **/
exports.getSubCategoryById = function(id,xAccessToken,callback) {
  SubCategory.findOne({_id: id}, (err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null)
    }
  });
}


/**
 * List All Categories types
 * 
 *
 * xAccessToken String user token to check if user authenticated (optional)
 * returns List
 **/
exports.listCategoryTypes = function(xAccessToken,callback) {
   Category.find({}, (err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null)
    }
  });
}


/**
 * List All subCategory types
 * 
 *
 * categoryId String categoryId to list all sub Category
 * xAccessToken String user token to check if user authenticated (optional)
 * returns List
 **/
exports.listSubCategoryByCategoryCode = function(categoryCode,xAccessToken,callback) {
  SubCategory.find({categoryCode}, (err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null)
    }
  });
}


/**
 * Updated Category
 * This can only be done by the logged in employee.
 *
 * id String The id of the Category that needs to be updated
 * body Category Updated Category object
 * xAccessToken String user token to check if user authenticated (optional)
 * returns Category
 **/
exports.updateCategoryById = function(id,body,xAccessToken,callback) {
   Category.findOneAndUpdate({ _id:id}, body, { new: true, upsert: true, setDefaultsOnInsert: true }, (err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null)
    }
  });
}


/**
 * Updated SubCategory
 * This can only be done by the logged in employee.
 *
 * id String The id of the SubCategory that needs to be updated
 * body SubCategory Updated SubCategory object
 * xAccessToken String user token to check if user authenticated (optional)
 * returns SubCategory
 **/
exports.updateSubCategoryById = function(id,body,xAccessToken,callback) {
   SubCategory.findOneAndUpdate({ _id:id}, body, { new: true, upsert: true, setDefaultsOnInsert: true }, (err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null)
    }
  });
}

