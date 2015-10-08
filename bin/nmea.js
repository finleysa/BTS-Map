var serialport = require('serialport');
var nmea = require('nmea');
var mapSockets = require('./mapSockets');
var initialized = false;
var io = require('socket.io')();
var port = new serialport.SerialPort('COM3', {
                baudrate: 4800,
                parser: serialport.parsers.readline('\r\n')},
                false);

var testPort;

exports.connect = function(req, res, next){
  if(initialized){
    next();
  }else{
    exports.gps(next);
  }
};

exports.changePort = function(port){
  console.log('POR !!!!!T' +port)
  port.close(function(err){
    console.log(err);
  });
  port = new serialport.SerialPort(port, {
                  baudrate: 4800,
                  parser: serialport.parsers.readline('\r\n')},
                  false);

  exports.gps();
}

exports.gps = function(fn){
  port.open(function (error) {
    if (!error) {
      initialized = true;
      logger.info("GPS Port opened.");

      port.on('data', function(line) {
        try{
          var line = nmea.parse(line);
          var nmeaData = global.webmap.db.collection('nmea');

          if(line.sentence == "GGA") {
            mapSockets.EmitGPS(line);
            nmeaData.insert(line);
          }
          if(line.sentence == "VTG") {
            mapSockets.EmitGPS(line);
            nmeaData.insert(line);
          }
        } catch(e) {
          logger.error('nmea: ' + e)
        }

      });
    } else {
      //logger.error('nmea: ' + error)
      initialized = false;
    }
    fn();
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
