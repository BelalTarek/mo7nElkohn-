'use strict';

const Category = require('../dal/CategoryDal');



exports.creatCategory = function(category,xAccessToken) {
  return new Promise(function(resolve, reject) {
   Category.creatCategory(category,xAccessToken,(err, data) => {
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



exports.creatSubCategory = function(subCategory,xAccessToken) {
  return new Promise(function(resolve, reject) {
   Category.creatSubCategory(subCategory,xAccessToken,(err, data) => {
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



exports.deleteCategoryById = function(id,xAccessToken) {
  return new Promise(function(resolve, reject) {
   Category.deleteCategoryById(id,xAccessToken,(err, data) => {
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



exports.deleteSubCategoryById = function(id,xAccessToken) {
  return new Promise(function(resolve, reject) {
   Category.deleteSubCategoryById(id,xAccessToken,(err, data) => {
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



exports.getCategoryById = function(id,xAccessToken) {
  return new Promise(function(resolve, reject) {
   Category.getCategoryById(id,xAccessToken,(err, data) => {
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



exports.getSubCategoryById = function(id,xAccessToken) {
  return new Promise(function(resolve, reject) {
   Category.getSubCategoryById(id,xAccessToken,(err, data) => {
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



exports.listCategoryTypes = function(xAccessToken) {
  return new Promise(function(resolve, reject) {
   Category.listCategoryTypes(xAccessToken,(err, data) => {
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



exports.listSubCategoryByCategoryCode = function(categoryCode,xAccessToken) {
  return new Promise(function(resolve, reject) {
   Category.listSubCategoryByCategoryCode(categoryCode,xAccessToken,(err, data) => {
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



exports.updateCategoryById = function(id,body,xAccessToken) {
  return new Promise(function(resolve, reject) {
   Category.updateCategoryById(id,body,xAccessToken,(err, data) => {
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



exports.updateSubCategoryById = function(id,body,xAccessToken) {
  return new Promise(function(resolve, reject) {
   Category.updateSubCategoryById(id,body,xAccessToken,(err, data) => {
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

