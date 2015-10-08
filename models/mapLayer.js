module.exports = MapLayer;

var Mongo = require('mongodb');
var fs = require('fs');
var path = require('path');

function MapLayer(data) {
  this.data = data;
}

MapLayer.prototype.insert = function(fn){
  try {
    var maplayers = global.webmap.db.collection('maplayers');
    var self = this;

    maplayers.insert(self, function(err, record){
      fn(err, record);
    });
  }
  catch(err){
    logger.error('mapLayer: ' + err);
  }
};

MapLayer.removeLayers = function(fn){
  try{
    var mapLayers = global.webmap.db.collection('maplayers');
    mapLayers.remove({}, function(err, records){
      fn(err, records);
    });
  }
  catch(err){
    logger.error('mapLayer: ' + err);
  }
}

MapLayer.deleteById = function(id, fn){
  try{
    var mapLayers = global.webmap.db.collection('maplayers');

    items.remove({_id:_id}, function(err, count){
      fn(count);
    });
  }
  catch(err){
    logger.error('mapLayer: ' + err);
  }
};

MapLayer.findAll = function(fn){
  try{
    var mapLayers = global.webmap.db.collection('maplayers');
    mapLayers.find().toArray(function(err, records){
      fn(err, records);
    });
  }
  catch(err){
    logger.error('mapLayer: ' + err);
  }
};
