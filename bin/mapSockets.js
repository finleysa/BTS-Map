var MapLayer = require('../models/mapLayer');
var io = require('socket.io');
var nmea = require('./nmea');

exports.SocketServer = function(app, server){
  io = io(server);
  io.on('connection', function(socket){
    console.log('a user connected');
    exports.GetLayers(socket);
    socket.on('LayerAdded', exports.Insert);
    socket.on('RemoveLayer', exports.RemoveLayer);
    socket.on('RemoveLayers', exports.RemoveLayers);
    socket.on('ChangePort', nmea.changePort);
    //socket.on('GetGPS', nmea.GetGPS)
  });
}

exports.Insert = function(data){
  var newLayer = new MapLayer(data);
  newLayer.insert(function(err, result){
    if(err) {
      logger.error('mapSockets: ' + err);
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
      logger.error('mapSockets: ' + err);
    }
    else {
      console.log('Removed layers: ' + number);
      io.emit('RemoveLayers');
    }
  })
}

exports.RemoveLayer = function(layer){
  var id = layer._id;
  MapLayer.removeLayers(id, function(err, number){
    if(err) {
      logger.error('mapSockets: ' + err);
    }
    else {
      console.log('Removed layer: ' + id);
    }
  })
}

exports.GetLayers = function(socket) {
  MapLayer.findAll(function(err, records){
    if(err) {
      logger.error('mapSockets: ' + err);
    }
    else {
      console.log('Emitting GeoJSON layers: ' + records.length);
      //fn(records);
      socket.emit('AllLayers', records);
    }
  });
}

exports.EmitGPS = function(nmea){
  try {
    io.emit('GPS', nmea)
  } catch (e) {
    logger.error('mapSockets: ' + e);
  }
}
