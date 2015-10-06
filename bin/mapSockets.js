var MapLayer = require('../models/mapLayer');
var io = require('socket.io')

exports.SocketServer = function(app, server){
  io = io(server);
  io.on('connection', function(socket){
    console.log('a user connected');
    exports.GetLayers(socket);
    socket.on('LayerAdded', exports.Insert);
    socket.on('RemoveLayers', exports.RemoveLayers);
  });
}

exports.Insert = function(data){
  var newLayer = new MapLayer(data);
  newLayer.insert(function(err, result){
    if(err) {
      console.log('Layer error');
    }
    else {
      console.log('Layer added');
      io.emit('AddLayer', newLayer);
    }
  });
}

exports.RemoveLayers = function(){
  MapLayer.removeLayers(function(err, number){
    if(err) {
      console.log('Error removing Layers');
    }
    else {
      console.log('Removed layers: ' + number);
      io.emit('RemoveLayers');
    }
  })
}

exports.GetLayers = function(socket) {
  MapLayer.findAll(function(err, records){
    if(err) {
      console.log('Error removing Layers');
    }
    else {
      console.log('Emitting GeoJSON layers: ' + records.length);
      //fn(records);
      socket.emit('AllLayers', records);
    }
  });
}
