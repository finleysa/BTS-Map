var MapLayer = require('../models/mapLayer')

exports.Insert = function(data){
  var newLayer = new MapLayer(data);
  newLayer.insert(function(err){
    if(err) {
      console.log('Layer error');
    }
    else {
        console.log('Layer added');
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
