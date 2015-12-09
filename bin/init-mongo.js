var MongoClient = require('mongodb').MongoClient
var assert = require('assert');
var url = 'mongodb://localhost:27017/webmap';

var start = MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  global.webmap = {};
  global.webmap.db = db;
  console.log("Connected correctly to Mongo");
});

exports.start;
