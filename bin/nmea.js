var serialport = require('serialport');
var nmea = require('nmea');
var initialized = false;
var io = require('socket.io')();
var port = new serialport.SerialPort('/dev/cu.usbserial', {
                baudrate: 4800,
                parser: serialport.parsers.readline('\r\n')},
                false);

exports.connect = function(req, res, next){
  if(initialized){
    next();
  }else{
    exports.gps(next);
  }
};

exports.gps = function(fn){
  port.open(function (error) {
    if (!error) {
      initialized = true;
      console.log("GPS Port opened.");

      port.on('data', function(line) {
        var line = nmea.parse(line);
        if(global.socket && line.sentence == "GGA")
          socket.emit("GPS", line);

      });
    } else {
      initialized = false;
    }
  });

  fn();
};
