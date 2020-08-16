'use strict';
var index = require('../index')

var Governorate = index.models.Governorate;



/**
 * adds Governorate
 * Adds Governorate to the system
 *
 * governorateItem List Governorate to add
 * returns List
 **/
exports.addGovernorate = function(governorateItem,callback) {

   Governorate.create(body, (err, data) => {
     if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({error: "Error finding the " + Governorate.toString()}, null);
    }else {
      return callback(null, data)
    }
  });
}


/**
 * Get all governorates
 * Get all governorates 
 *
 * xAccessToken String user token to check if user authenticated (optional)
 * returns inline_response_200
 **/
exports.getAllGovernorates = function(xAccessToken,callback) {

   Governorate.find({}, (err, data) => {
     if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({error: "Error finding the " + Governorate.toString()}, null);
    }else {
      return callback(null, data)
    }
  });
}

