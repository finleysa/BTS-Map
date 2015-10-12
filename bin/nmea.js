var serialport = require('serialport');
var nmea = require('nmea');
var mapSockets = require('./mapSockets');
var initialized = false;
var io = require('socket.io')();
var gps = require('../models/gps');

exports.changePort = function(port){
  var port = new serialport.SerialPort(port, {
                  baudrate: 4800,
                  parser: serialport.parsers.readline('\r\n')},
                  false);

  exports.gps(port);
}

exports.gps = function(port){
  if (port.isOpen()) {
    port.close();
    logger.info("GPS Port closed.");
  }
  port.open(function (error) {
    if (!error) {
      initialized = true;
      logger.info("GPS Port opened.");
      var date = new Date();

      port.on('data', function(line) {
        try{
          var line = nmea.parse(line);

          mapSockets.EmitGPS(line);
          line.datetime = date.getUTCFullYear()+date.getUTCMonth()+date.getUTCSeconds();
          gps.insert(line, function(err){
            if (err){
              logger.error('nmea: ' + err)
            }
          });
        } catch(e) {
          logger.error('nmea: ' + e)
          port.close();
        }

      });
    } else {
      //logger.error('nmea: ' + error)
      initialized = false;
    }
  });
};

exports.GetPorts = function(fn){
  serialport.list(function (err, ports) {
    if(err) {
      logger.error('mapSockets: ' + err);
      fn([]);
    }
    else {
      fn(ports);
    }
  });
}
