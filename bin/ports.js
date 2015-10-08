var serialport = require("serialport");
var nmea = require('nmea');
var gpsPort;

serialport.list(function (err, ports) {
  ports.forEach(function(port) {
    gpsPort = new serialport.SerialPort(port.comName.toString(), {
                    baudrate: 4800,
                    parser: serialport.parsers.readline('\r\n')},
                    false);
    gpsPort.open(function(err){
      console.log('OPENED')
      if(!err){
        serialport.on('data', function(line) {
          try {
            var line = nmea.parse(line);
              console.log(line);
          } catch(err) {
            logger.error('nmea: ' + err);
          }
        });
      } else {
        console.log(err);
      }
    });
  });
});
