var simStarted = false;
var nmea;
var iterator = 0;
var mapSockets = require('./mapSockets');
var gps = require('../models/gps')

exports.startSimulator = function(req, res, next) {
  if(simStarted){
    next();
  } else {
    simStarted = true;
    //var nmeaData = global.webmap.db.collection('nmea');
    var query = { $or: [{sentence: 'GGA'}, {sentence: 'RMC'}, {sentence: 'VTG'}] }
    gps.findByQuery(query, function(err, records){
      if(err){
        logger.error('nmea-simulator: ' + err);
      }
      else{
        logger.info('nmea-simulator: ' + records.length);
        nmea = records;
        var crumbTimer = setInterval(layCrumb, 1000);
      }
    });
    next();
  }
}

function layCrumb() {
  if(iterator < nmea.length) {
    mapSockets.EmitGPS(nmea[iterator]);

    if(nmea[iterator].sentence == 'RMC' ||
       nmea[iterator].sentence == 'VTG')
    {
      iterator++;
      layCrumb();
    }
    else{
      iterator+=10;
    }
  }
}
