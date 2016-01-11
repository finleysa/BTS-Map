var serialport = require('serialport');
var nmea = require('nmea');
var mapSockets = require('./mapSockets');
var initialized = false;
var io = require('socket.io')();
var gps = require('../models/gps');

exports.getPorts = function() {
  serialport.list(function (err, ports) {
    if(err) {
      logger.error('mapSockets: ' + err);
      return [];
    }
    else {
      return ports;
    }
  });
}

exports.start = function() {
  if(initialized) return;
  initialized=true;
  var portList = exports.getPorts();
  console.log(portList);
  for(var i=0; i<portList.length; i++) {
    var port = new serialport.SerialPort(port, {
                    baudrate: 4800,
                    parser: serialport.parsers.readline('\r\n')},
                    false);

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
            var line = nmea.parse(line);
            console.log(line);
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
      }
    });
  }
};
