var MapLayer = require('../models/mapLayer')

exports.Insert = function(data){
  var newLayer = new MapLayer(data);
  newLayer.insert(function(err, record){
    if(err) {
      console.log('Layer error');
    }
    else {
      socket.emit('LayerID', newLayer._id);
    }
  });
}

exports.RemoveLayers = function(){
  MapLayer.removeLayers(function(err, number){
    if(err) {
      console.log('Error removing Layers')
    }
    else {
      console.log('Removed layers: ' + number);
    }
  })
}

exports.GetLayers = function(){
  MapLayer.findAll(function(err, records){
    if(err) {
      console.log('Error removing Layers');
    }
    else {
      console.log('Emitting GeoJSON layers: ' + records.length);
      socket.emit('AllLayers', records);
    }
  })
}
