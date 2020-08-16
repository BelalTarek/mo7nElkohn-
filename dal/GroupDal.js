'use strict';

var index = require('../index')

var Group = index.models.Group;


/**
 * ceate group
 * This can only be done by the logged in Employee.
 *
 * body List Created Group array
 * returns List
 **/
exports.createGroup = function (body, callback) {
    Group.create(body, (err, data) => {
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
 * Delete group
 * This can only be done by the logged in employee.
 *
 * id String The Group that needs to be deleted
 * returns String
 **/
exports.deleteGroup = function (id, callback) {
    Group.deleteOne({ _id: id }, (err, data) => {
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
 * Get employee by Id
 *
 * id String The name that needs to be fetched. Use user1 for testing.
 * returns String
 **/
exports.getGroupById = function (id, callback) {
    Group.findOne({ _id: id }, (err, data) => {
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
 * list groups of permessions
 *
 * returns String
 **/
exports.listGroup = function (callback) {
    Group.find({}, (err, data) => {
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
 * Updated Group
 * This can only be done by the logged in employee.
 *
 * body Group Updated employee object
 * returns Group
 **/
exports.updateGroupById = function (id, body, callback) {
    Group.findOneAndUpdate({ _id: id },  body , { new: true, upsert: true, setDefaultsOnInsert: true }, (err, data) => {
        if (!err && data) {
            return callback(null, data);
        } else if (err) {
            return callback(err, null);
        } else {
            return callback(null, null)
        }
    });
}

