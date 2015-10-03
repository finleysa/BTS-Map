module.exports = MapLayer;

var Mongo = require('mongodb');
var fs = require('fs');
var path = require('path');

function MapLayer(data) {
  this.data = data;
}

MapLayer.prototype.insert = function(fn){
  var maplayers = global.webmap.db.collection('maplayers');
  var self = this;

  maplayers.insert(self, function(err, records){
    fn(err);
  });
};
