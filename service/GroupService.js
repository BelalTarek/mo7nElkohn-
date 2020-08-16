'use strict';

const groupDal = require('../dal/GroupDal');


/**
 * ceate group
 * This can only be done by the logged in Employee.
 *
 * body List Created Group array
 * returns List
 **/
exports.createGroup = function (body) {
  return new Promise(function (resolve, reject) {
    groupDal.createGroup(body, (err, data) => {
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
            msg: "Groups created successfully",
            code: 200
          },
        })
      }
    })
  });
}


/**
 * Delete group
 * This can only be done by the logged in employee.
 *
 * id String The Group that needs to be deleted
 * returns String
 **/
exports.deleteGroup = function (id) {
  return new Promise(function (resolve, reject) {
    groupDal.deleteGroup(id, (err, data) => {
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
            msg: "Group deleted successfully",
            code: 200
          },
        })
      }
    })
  });
}


/**
 * Get employee by Id
 *
 * id String The name that needs to be fetched. Use user1 for testing.
 * returns String
 **/
exports.getGroupById = function (id) {
  return new Promise(function (resolve, reject) {
    groupDal.getGroupById(id, (err, data) => {
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
            msg: "Group data loaded successfully",
            code: 200
          },
        })
      }
    })
  });
}


/**
 * list groups of permessions
 *
 * returns String
 **/
exports.listGroup = function () {
  return new Promise(function (resolve, reject) {
    groupDal.listGroup((err, data) => {
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
            msg: "Group loaded successfully",
            code: 200
          },
        })
      }
    })
  });
}


/**
 * Updated Group
 * This can only be done by the logged in employee.
 *
 * body Group Updated employee object
 * returns Group
 **/
exports.updateGroupById = function (id, body) {
  return new Promise(function (resolve, reject) {
    groupDal.updateGroupById(id, body, (err, data) => {
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
              data
            },
            msg: "Group data updated successfully",
            code: 200
          },
        })
      }
    })
  });
}

