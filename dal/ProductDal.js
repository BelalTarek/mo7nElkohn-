'use strict';
var index = require('../index')

var Product = index.models.Product;



/**
 * Add new product
 *
 * product List product array that needs to be added
 * xAccessToken String user token to check if user authenticated (optional)
 * returns List
 **/
exports.creatProduct = function (product, xAccessToken, callback) {
  Product.create(product, (err, data) => {
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
 * Delete Product
 * This can only be done by the logged in employee.
 *
 * id String The Product id that needs to be deleted
 * xAccessToken String user token to check if user authenticated (optional)
 * returns Product
 **/
exports.deleteProductById = function (id, xAccessToken, callback) {
  Product.deleteOne({ _id: id }, (err, data) => {
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
 * Get Product by Id
 *
 * id String The id of the product that needs to be fetched.
 * xAccessToken String user token to check if user authenticated (optional)
 * returns Product
 **/
exports.getProductById = function (id, xAccessToken, callback) {
  Product.findOne({ _id: id }, (err, data) => {
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
 * list Products
 *
 * rps Integer Size of the page results in pagination (optional)
 * rpi Integer Current page index in pagination (optional)
 * xAccessToken String user token to check if user authenticated (optional)
 * returns Product
 **/
exports.listProduct = function (rps, rpi, xAccessToken, callback) {
  Product.aggregate([
    {
      $lookup:
      {
        from: "categories",
        localField: "categoryCode",
        foreignField: "categoryCode",
        as: "categoryCode"
      },

    },
    {
      $lookup:
      {
        from: "subcategories",
        localField: "subCategoryCode",
        foreignField: "subCategoryCode",
        as: "subCategoryCode"
      }
    }

  ])
    .exec((err, data) => {
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
 * List Products By specific Filters
 *
 * rps Integer Size of the page results in pagination (optional)
 * rpi Integer Current page index in pagination (optional)
 * matchingParams MatchingParams_1 The params to fetch users. (optional)
 * xAccessToken String user token to check if user authenticated (optional)
 * returns List
 **/
exports.listProductsByFilters = function (rps, rpi, matchingParams, xAccessToken, callback) {
  var totalCount;
  const pageIndex = rpi || 1;
  const perPage = rps || 5;
  Product.count({ ...matchingParams }, (err, count) => {
    if (!err && count) {
      totalCount = count;
      Product.aggregate([
        { $match: { ...matchingParams } },
        {
          $lookup:
          {
            from: "categories",
            localField: "categoryCode",
            foreignField: "categoryCode",
            as: "categoryCode"
          },

        },
        {
          $lookup:
          {
            from: "subcategories",
            localField: "subCategoryCode",
            foreignField: "subCategoryCode",
            as: "subCategoryCode"
          }
        }

      ])
        .skip(perPage * pageIndex - perPage)
        .limit(perPage)
        .exec((err, data) => {
          if (!err && data) {
            var numberOfPages = Math.ceil((totalCount / perPage))
            var response = {
              data,
              ResultReport: {
                totalCount,
                numberOfPages,
                pageIndex
              }
            }
            return callback(null, response);
          } else if (err) {
            return callback(err, null);
          } else {
            return callback(null, null)
          }
        });
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null)
    }
  })
}


/**
 * Updated Product
 * This can only be done by the logged in employee.
 *
 * id String The id of the product that needs to be updated
 * body Product Updated Product object
 * xAccessToken String user token to check if user authenticated (optional)
 * returns Product
 **/
exports.updateProductById = function (id, body, xAccessToken, callback) {
  Product.findOneAndUpdate({ _id: id }, body, { new: true, upsert: true, setDefaultsOnInsert: true }, (err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null)
    }
  });
}

