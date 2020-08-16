"use strict";

const appDAl = require('../dal/AppDal');


/**
 * create configuration for whole layout
 * add new custom config for header,sidebar,footer,aside and styling
 *
 * layout List object of the new custom layout config
 * returns app
 **/
exports.addAppLayout = function(layout) {
  return new Promise(function(resolve, reject) {
    appDAl.addAppLayout(JSON.stringify(layout), (err, data) => {
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
            payload: JSON.parse(data) ,
            msg: "Layout loaded successfully",
            code: 200
          },
        })
      }
    })
  });
}



/**
 * Returns configuration for whole layout
 * Returns custom config for header,sidebar,footer,aside and styling
 *
 * id Integer ID of item that needs to be fetched
 * returns app
 **/
exports.appGetOne = function(id) {
  return new Promise(function (resolve, reject) {    
    appDAl.appGetOne(id, (err, data) => {
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
            payload:JSON.parse(data) ,
            msg: "Layout loaded successfully",
            code: 200
          },
        })
      }
    })
  });
};


/**
 * delete configuration for whole layout
 * delete custom config for header,sidebar,footer,aside and styling
 *
 * id String ID of item that needs to be deleted
 * returns app
 **/
exports.deleteAppLayout = function(id) {
  return new Promise(function(resolve, reject) {
    appDAl.deleteAppLayout(id, (err, data) => {
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
            payload: {
             ...data 
            },
            msg: "Layout deleted successfully",
            code: 200
          },
        })
      }
    })
  });
}


/**
 * list all layout configs
 *
 * returns List
 **/
exports.getAppLayoutList = function() {
  return new Promise(function(resolve, reject) {
    appDAl.getAppLayoutList(id, (err, data) => {
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
            payload: data ,
            msg: "Layout loaded successfully",
            code: 200
          },
        })
      }
    })
  });
}


/**
 * update configuration for whole layout
 * update custom config for header,sidebar,footer,aside and styling
 *
 * id String ID of item that needs to be fetched
 * layout List object of the new custom layout config
 * returns app
 **/
exports.updateAppLayout = function(id,layout) {
  return new Promise(function(resolve, reject) {
    try{
    appDAl.updateAppLayout(id,JSON.stringify(layout), (err, data) => {
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
            payload:JSON.parse(data),
            msg: "Layout updated successfully",
            code: 200
          },
        })
      }
    })
  }catch(err){
    console.log(err)
  }
  });
}

