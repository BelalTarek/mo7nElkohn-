var utils = require('./writer.js');
const secret = process.env.auth_secret || 'noway';
const jwt = require('jsonwebtoken');


const tokenValidation = function (req, res, callback) {
    const token = req.swagger.params['x-access-token'].value
    if (!token) {
        let response = {
            resBody: {
                payload: null,
                msg: "No Token To Verify"
            }
        }
        utils.writeJson(res, response, 401);
    } else {
        jwt.verify(token, secret, function (err, decoded) {
            if (err) {
                let response = {
                    resBody: {
                        payload: null,
                        msg: "Unauthorized: Invalid token"
                    }
                }
                utils.writeJson(res, response, 401);
            } else {
                req.user = decoded;
                return callback(true)
            }
        });
    }
}

module.exports = tokenValidation;