'use strict';

const Governorate = require('../dal/GovernorateDal');



exports.addGovernorate = function(governorateItem) {
  return new Promise(function(resolve, reject) {
   Governorate.addGovernorate(governorateItem, (err, data) => {
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



exports.getAllGovernorates = function(xAccessToken) {
  return new Promise(function(resolve, reject) {
   Governorate.getAllGovernorates(xAccessToken, (err, data) => {
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

