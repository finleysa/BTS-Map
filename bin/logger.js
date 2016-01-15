var winston = require('winston');

exports.connect = function(req, res, next){
  try{
    global.logger = new (winston.Logger)({
      transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'webmap.log' })
      ]
    });
    next();
  }
  catch(err)
  {
    console.log('Could not start Winston Logger: ' + err);
    next();
  }
};
