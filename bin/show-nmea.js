var mapSockets = require('./mapSockets');
var gps = require('../models/gps');
var started = false;

exports.flightPath = function(req, res, next) {
  if(started){
    next();
  }
  started = true;
  //var nmeaData = global.webmap.db.collection('nmea');
  var query = {sentence: 'GGA'}
  gps.findByQuery(query, function(err, records){
    if(err){
      logger.error('show-nmea: ' + err);
    }
    else{
      nmea = records;
      for(var i=0; i<=nmea.length; i++){
        mapSockets.EmitGPS(nmea[i]);
      }
    }
  });
  next();
}
