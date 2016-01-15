var simStarted = false;
var nmea;
var iterator = 0;
var mapSockets = require('./mapSockets');
var gps = require('../models/gps');

exports.startSimulator = function(req, res, next) {
  if(simStarted){
    next();
  } else {
    simStarted = true;
    //var nmeaData = global.webmap.db.collection('nmea');
    var query = { $or: [{sentence: 'GGA'}, {sentence: 'RMC'}, {sentence: 'VTG'}, {date: '01/12/2016'}] }
    gps.findByQuery(query, function(records){
      logger.info('nmea-simulator: ' + records.length);
      nmea = records;
      var crumbTimer = setInterval(layCrumb, 1000);
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
      iterator+=10;
      layCrumb();
    }
    else{
      iterator++;
    }
  }
}
