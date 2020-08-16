'use strict';
var index = require('../index')

var User = index.models.User;

/**
 *
 * body User 
 * returns User
 **/
exports.createUser = function (body, callback) {
  User.create(body, (err, data) => {
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
 * Delete purchase User by ID
 *
 * adminId Long ID of the applicant that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteUserById = function (id, callback) {
  User.deleteOne({ _id: id }, (err, data) => {
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
 *
 * returns User
 **/
exports.listUser = function (rps, rpi, callback) {
  var totalCount;
  const pageIndex = rpi || 1;
  const perPage = rps || 5;
  User.count((err, count) => {
    if (!err && count) {
      totalCount = count;
      User.find({})
        .populate('branchId')
        .populate('createdBy')
        .populate('groups')
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
 * Updated User
 *
 * body User Updated User object
 * no response value expected for this operation
 **/
exports.updateUserById = function (id, body, callback) {
  User.findOneAndUpdate({ _id: id }, body[0], { new: true, upsert: true, setDefaultsOnInsert: true }, (err, data) => {
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
 * Updated User
 *
 * body User Updated User object
 * no response value expected for this operation
 **/
exports.updateUser = function (body, callback) {
  User.findOneAndUpdate({ _id: body.id }, body, { new: true, upsert: true, setDefaultsOnInsert: true }, (err, data) => {
    if (!err && data) {
      return callback(null, data);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null)
    }
  });
}


exports.findUserByEmail = function (email, callback) {
  User.findOne({ email })
    .populate('branchId')
    .populate('createdBy')
    .populate('groups')
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
exports.getUserByName = function (fullName, callback) {
  User.findOne({ fullName })
    .populate('branchId')
    .populate('createdBy')
    .populate('groups')
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
