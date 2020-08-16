'use strict';
const User = require('../dal/UserDal');
const secret = process.env.auth_secret || 'noway';
const helpers = require('../utils/helpers');
const jwt = require('jsonwebtoken');

/**
 * Create a list of user
 * This can only be done by the logged in user.
 *
 * body List Create user List
 * returns List
 **/
exports.createUser = function (body) {
  return new Promise(async function (resolve, reject) {
    const userList = await helpers.hashPassword(body)
    User.createUser({ ...userList[0], isActive: true }, (err, data) => {
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
            msg: "Users created successfully",
            code: 200
          },
        })
      }
    });
  })
}


/**
 * Deletes a User
 *
 * username String User id to delete
 * returns String
 **/
exports.deleteUserById = function (id) {
  return new Promise(function (resolve, reject) {
    User.deleteUserById(id, (err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          },
        })
      } else {
        resolve({
          resBody: {
            payload: {
              data
            },
            msg: "User Deleted Successfully",
            code: 200
          },
        })
      }
    })
  });
}


/**
 * Get user by user name
 *
 * username String The name that needs to be fetched. Use user1 for testing. 
 * returns User
 **/
exports.getUserByName = function (fullName) {
  return new Promise(function (resolve, reject) {
    User.getUserByName(fullName, (err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          },
        })
      } else {
        resolve({
          resBody: {
            payload: {
              data
            },
            msg: "User Data Loaded Successfully",
            code: 200
          },
        })
      }
    })
  });
}


/**
 * Get All user
 *
 * rps Integer Size of the page results in pagination (optional)
 * rpi Integer Current page index in pagination (optional)
 * returns List
 **/
exports.listUsers = function (rps, rpi) {
  return new Promise(function (resolve, reject) {
    User.listUser(rps, rpi, (err, data) => {
      if (err || !data) {
        reject({
          resBody: {
            payload: null,
            msg: err
          },
        })
      } else {
        resolve({
          resBody: {
            payload: data.data,
            ResultReport: data.ResultReport,
            msg: "User List Loaded Successfully",
            code: 200
          },
        })
      }
    })
  });
}


/**
 * ListUsers By specific Filters
 *
 * body Body The params to fetch users. (optional)
 * rps Integer Size of the page results in pagination (optional)
 * rpi Integer Current page index in pagination (optional)
 * returns List
 **/
exports.listUsersByFilters = function (body, rps, rpi) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [{
      "en_fullname": "en_fullname",
      "branchId": "branchId",
      "password": "password",
      "userStatus": 1,
      "phone": "phone",
      "permissions": [{}, {}],
      "fullName": "fullName",
      "groups": [{
        "permissions": [{}, {}],
        "name": "name",
        "en_name": "en_name",
        "id": 5
      }, {
        "permissions": [{}, {}],
        "name": "name",
        "en_name": "en_name",
        "id": 5
      }],
      "id": 6,
      "email": "email",
      "username": "username"
    }, {
      "en_fullname": "en_fullname",
      "branchId": "branchId",
      "password": "password",
      "userStatus": 1,
      "phone": "phone",
      "permissions": [{}, {}],
      "fullName": "fullName",
      "groups": [{
        "permissions": [{}, {}],
        "name": "name",
        "en_name": "en_name",
        "id": 5
      }, {
        "permissions": [{}, {}],
        "name": "name",
        "en_name": "en_name",
        "id": 5
      }],
      "id": 6,
      "email": "email",
      "username": "username"
    }];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updated user
 * This can only be done by the logged in user.
 *
 * body User Updated user object
 * username String name that need to be updated
 * returns User
 **/
exports.updateUser = function (body) {
  return new Promise(async function (resolve, reject) {
    const userList = await helpers.hashPassword(body)
    User.updateUser(userList, (err, user) => {
      if (err || !user) {
        reject({
          resBody: {
            payload: null,
            msg: err
          },
        })
      } else {
        // Issue token
        const userData = {
          isActive: user.isActive,
          email: user.email,
          branchId: user.branchId,
          fullName: user.fullName,
          role: user.role,
          _id: user._id,
          firstLogin: user.firstLogin
        };
        const token = jwt.sign(userData, secret, {
          expiresIn: 60 * 60
        });
        resolve({
          resBody: {
            payload: {
              userData,
              token
            },
            msg: "updated successfully",
            code: 200
          },
        })

      }
    });
  })
}

/**
 * Updated user
 * This can only be done by the logged in user.
 *
 * body User Updated user object
 * username String name that need to be updated
 * returns User
 **/
exports.updateUserById = function (id, body) {
  return new Promise(async function (resolve, reject) {
    const userList = await helpers.hashPassword([body])
    User.updateUserById(id, userList, (err, user) => {
      if (err || !user) {
        reject({
          resBody: {
            payload: null,
            msg: err
          },
        })
      } else {
        // Issue token
        const userData = {
          isActive: user.isActive,
          email: user.email,
          branchId: user.branchId,
          fullName: user.fullName,
          role: user.role,
          _id: user._id,
          firstLogin: user.firstLogin
        };
        const token = jwt.sign(userData, secret, {
          expiresIn: 60 * 60
        });
        resolve({
          resBody: {
            payload: {
              userData,
              token
            },
            msg: "updated successfully",
            code: 200
          },
        })

      }
    });
  })
}

/**
 * Logs user into the system
 *
 * body User The user username & Password for login
 * returns User
 **/
exports.userLogin = function (user) {
  return new Promise(function (resolve, reject) {
    try {
      const { email, password } = user;
      return User.findUserByEmail(email.toLowerCase(), (err, user) => {
        if (err)
          reject({
            resBody: {
              payload: null,
              msg: err
            },
          })
        else if (!user) {
          reject({
            resBody: {
              payload: null,
              msg: "المستخدم غير موجود"
            },
          })
        } else {
          if (user.isActive) {
            return helpers.isCorrectPassword(password, user, (err, same) => {
              if (err)
                reject(err)
              else if (!same) {
                reject({
                  resBody: {
                    payload: null,
                    msg: "كلمة مرور خطأ"
                  },
                })
              } else {
                // Issue token
                const userData = {
                  isActive: user.isActive,
                  email: user.email,
                  branchId: user.branchId,
                  groups: user.groups,
                  fullName: user.fullName,
                  role: user.role,
                  id: user._id,
                  firstLogin: user.firstLogin
                };
                const token = jwt.sign(userData, secret, {
                  expiresIn: 60 * 60
                });
                resolve({
                  resBody: {
                    payload: {
                      userData,
                      token
                    },
                    msg: "logged in successfully",
                    code: 200
                  },
                  token: token
                })

              }
            });
          } else {
            reject({
              resBody: {
                payload: null,
                msg: "المستخدم غير نشط"
              },
            })
          }
        }
      }
      );
    } catch (err) {
      reject({
        resBody: {
          payload: null,
          msg: err
        },
      })
    }
  });
}


/**
 * Logs out current logged in user session
 *
 * no response value expected for this operation
 **/
exports.userLogout = function () {
  return new Promise(function (resolve, reject) {
    console.log("logged out successfully!");
    resolve();
  });
}

