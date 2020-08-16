'use strict';
const tokenValidation = require('../utils/tokenValidation')
var Branch = require("../controllers/Branch");


module.exports.createbranch = function createbranch (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  Branch.createbranch(req, res);
  //});
};


module.exports.deleteBranchesById = function deleteBranchesById (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  Branch.deleteBranchesById(req, res);
  //});
};


module.exports.getBranchByGeo = function getBranchByGeo (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  Branch.getBranchByGeo(req, res);
  //});
};


module.exports.listBranches = function listBranches (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  Branch.listBranches(req, res);
  //});
};


module.exports.updateBranchs = function updateBranchs (req, res, next) {
  // tokenValidation(req, res, (succes) => {
  //   if (succes)
  Branch.updateBranchs(req, res);
  //});
};
