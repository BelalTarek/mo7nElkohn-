'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appModel = mongoose.model(
  "AppConfigs",
  new Schema({ url: String, layout: String, id: Number }),
  "appConfigs"
);

/**
 * create configuration for whole layout
 * add new custom config for header,sidebar,footer,aside and styling
 *
 * layout List object of the new custom layout config
 * returns app
 **/
exports.addAppLayout = function (layout, callback) {
  appModel.create({ layout }, (err, data) => {
    if (!err && data.layout) {
      return callback(null, data.layout);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null)
    }
  });
}

/**
 *
 * returns App
 **/
exports.appGetOne = function (id, callback) {
  appModel.findById({ _id: id }, (err, data) => {
    if (!err && data && data.layout) {
      return callback(null, data.layout);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null)
    }
  });
}


/**
 * delete configuration for whole layout
 * delete custom config for header,sidebar,footer,aside and styling
 *
 * id String ID of item that needs to be deleted
 * returns app
 **/
exports.deleteAppLayout = function (id, callback) {
  appModel.deleteOne({ _id: id }, (err, data) => {
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
 * list all layout configs
 *
 * returns List
 **/
exports.getAppLayoutList = function (callback) {
  appModel.find({}, (err, data) => {
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
 * update configuration for whole layout
 * update custom config for header,sidebar,footer,aside and styling
 *
 * id String ID of item that needs to be fetched
 * layout List object of the new custom layout config
 * returns app
 **/
exports.updateAppLayout = function (id, layout, callback) {
  appModel.findOneAndUpdate({ _id: id }, { $set: { layout } }, { new: true, upsert: true, setDefaultsOnInsert: true }, (err, data) => {
    if (!err && data.layout) {
      return callback(null, data.layout);
    } else if (err) {
      return callback(err, null);
    } else {
      return callback(null, null)
    }
  });
}