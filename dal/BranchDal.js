'use strict';
var index = require('../index')

var Branch = index.models.Branch;



/**
 * adds branch
 * Adds branch to the system
 *
 * branches List branches to add
 * returns List
 **/
exports.createbranch = function (branches, callback) {

  Branch.create(branches, (err, data) => {
    if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({ error: "Error finding the " + Branch.toString() }, null);
    } else {
      return callback(null, data)
    }
  });
}


/**
 * Delete branches By Id
 *
 * iDs List array of IDs to be deleted
 * returns ApiResponse
 **/
exports.deleteBranchesById = function (iDs, callback) {

  Branch.deleteMany({ _id: { $in: iDs } }, (err, data) => {
    if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({ error: "Error finding the " + Branch.toString() }, null);
    } else {
      return callback(null, data)
    }
  });
}


/**
 * Get  list of branchs by GEO
 *
 * longitude String longitude of the area that needs to fetch own branches
 * latitude String latitude of the area that needs to fetch own branches
 * xAccessToken String user token to check if user authenticated (optional)
 * returns List
 **/
exports.getBranchByGeo = function (longitude, latitude, xAccessToken, callback) {

  Branch.find({}, (err, data) => {
    if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({ error: "Error finding the " + Branch.toString() }, null);
    } else {
      return callback(null, data)
    }
  });
}


/**
 * List All branches
 * 
 *
 * xAccessToken String user token to check if user authenticated (optional)
 * returns List
 **/
exports.listBranches = function (xAccessToken, callback) {

  Branch.find({})
  .populate('governantId')
  .exec((err, data) => {
    if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({ error: "Error finding the " + Branch.toString() }, null);
    } else {
      return callback(null, data)
    }
  });
}


/**
 * Update an existing Branchs
 * 
 *
 * body List Branch object that needs to be updated
 * returns List
 **/
exports.updateBranchs = function (body, callback) {
  Branch.findOneAndUpdate({ _id: body[0]._id }, body[0], { new: true, upsert: true, setDefaultsOnInsert: true }, (err, data) => {
    if (err) {
      return callback(err, null);
    } else if (!data) {
      return callback({ error: "Error finding the " + Branch.toString() }, null);
    } else {
      return callback(null, data)
    }
  });
}

