module.exports = GPS;

function GPS(){};

GPS.insert = function(line, fn){
  try {
    var nmea = global.webmap.db.collection('nmea');

    nmea.insert(line, function(err, record){
      fn(err, record);
    });
  }
  catch(err){
    logger.error('GPS: ' + err);
  }
};
