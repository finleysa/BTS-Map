module.exports = GPS;

function GPS(){};

GPS.insert = function(line, fn){
  try {
    var nmeaData = global.webmap.db.collection('nmea');

    nmeaData.insert(line, function(err, record){
      fn(err);
    });
  }
  catch(err){
    logger.error('gps: ' + err);
  }
};

GPS.findAll = function(fn){
  try{
    var nmeaData = global.webmap.db.collection('nmea');
    nmeaData.find().toArray(function(err, records){
      fn(err, records);
    });
  }
  catch(err){
    logger.error('gps: ' + err);
  }
};

GPS.findByQuery = function(query, fn) {
  try{
    var nmeaData = global.webmap.db.collection('nmea');
    nmeaData.find(query).sort({timestamp: 1}).toArray(function(err, records){
      fn(err, records);
    });
  }
  catch(err){
    logger.error('gps: ' + err);
  }
};
