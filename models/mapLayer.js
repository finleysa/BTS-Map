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

MapLayer.removeLayers = function(fn){
  var mapLayers = global.webmap.db.collection('maplayers');
  mapLayers.remove({}, function(err, records){
    fn(err, records);
  });
}

MapLayer.findAll = function(fn){
  var mapLayers = global.webmap.db.collection('maplayers');
  mapLayers.find().toArray(function(err, records){
    fn(err, records);
  });
};
