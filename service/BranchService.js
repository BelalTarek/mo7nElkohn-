'use strict';

const Branch = require('../dal/BranchDal');



exports.createbranch = function(branches) {
  return new Promise(function(resolve, reject) {
   Branch.createbranch(branches, (err, data) => {
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



exports.deleteBranchesById = function(iDs) {
  return new Promise(function(resolve, reject) {
   Branch.deleteBranchesById(iDs, (err, data) => {
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



exports.getBranchByGeo = function(longitude,latitude,xAccessToken) {
  return new Promise(function(resolve, reject) {
   Branch.getBranchByGeo(longitude,latitude,xAccessToken, (err, data) => {
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



exports.listBranches = function(xAccessToken) {
  return new Promise(function(resolve, reject) {
   Branch.listBranches(xAccessToken, (err, data) => {
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



exports.updateBranchs = function(body) {
  return new Promise(function(resolve, reject) {
   Branch.updateBranchs(body, (err, data) => {
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

