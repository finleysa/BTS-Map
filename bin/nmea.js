var serialport = require('serialport');
var nmea = require('nmea');
var mapSockets = require('./mapSockets');
var io = require('socket.io')();
var gps = require('../models/gps');
var initialized = false;

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

      port.on('data', function(line) {
        try{
          console.log(line);
          var line = nmea.parse(line);
          line.datetime = new Date().getTime()
          gps.insert(line, function(err){
            if (err){
              logger.error('nmea: ' + err)
            } else {
              mapSockets.EmitGPS(line);
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
