'use strict';

const Product = require('../dal/ProductDal');
const helpers = require("../utils/helpers");



exports.creatProduct = function (product, xAccessToken) {
  return new Promise(function (resolve, reject) {
    Product.creatProduct(product, xAccessToken, (err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        })
      } else {
        resolve({
          resBody: {
            payload: data,
            msg: "succeed msg",
            code: 200
          },
        })
      }
    })
  });
}



exports.deleteProductById = function (id, xAccessToken) {
  return new Promise(function (resolve, reject) {
    Product.deleteProductById(id, xAccessToken, (err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        })
      } else {
        resolve({
          resBody: {
            payload: data,
            msg: "succeed msg",
            code: 200
          },
        })
      }
    })
  });
}



exports.getProductById = function (id, xAccessToken) {
  return new Promise(function (resolve, reject) {
    Product.getProductById(id, xAccessToken, (err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        })
      } else {
        resolve({
          resBody: {
            payload: data,
            msg: "succeed msg",
            code: 200
          },
        })
      }
    })
  });
}



exports.listProduct = function (rps, rpi, xAccessToken) {
  return new Promise(function (resolve, reject) {
    Product.listProduct(rps, rpi, xAccessToken, (err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        })
      } else {
        resolve({
          resBody: {
            payload: data,
            msg: "succeed msg",
            code: 200
          },
        })
      }
    })
  });
}



exports.listProductsByFilters = function (rps, rpi, matchingParams, xAccessToken) {
  return new Promise(function (resolve, reject) {
    Product.listProductsByFilters(rps, rpi, matchingParams, xAccessToken, (err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        })
      } else {
        resolve({
          resBody: {
            payload: data.data,
            ResultReport: data.ResultReport,
            msg: "succeed msg",
            code: 200
          },
        })
      }
    })
  });
}



exports.updateProductById = function (id, body, xAccessToken) {
  return new Promise(function (resolve, reject) {
    Product.updateProductById(id, body, xAccessToken, (err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        })
      } else {
        resolve({
          resBody: {
            payload: data,
            msg: "succeed msg",
            code: 200
          },
        })
      }
    })
  });
}


exports.uploadProductAttachments = function (upfile) {
  return new Promise(function (resolve, reject) {
    helpers.parseFile(upfile, async (err, fields) => {
      if (err || !fields) {
        reject({
          resBody: {
            payload: null,
            msg: err
          }
        })
      } else {
        const products = await helpers.manageArray(fields)
            Product.creatProduct(products, "xAccessToken", (err, data) => {
              if (err || !data) {
                reject({
                  resBody: {
                    payload: null,
                    msg: err
                  }
                })
              } else {
                resolve({
                  resBody: {
                    payload: data,
                    msg: "succeed msg",
                    code: 200
                  },
                })
              }
            })
      }
    });
  });
}