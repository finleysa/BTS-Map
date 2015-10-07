var winston = require('winston');
var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: 'webmap.log' })
  ]
});


exports.connect = function(req, res, next){
  try{
    global.logger = logger;
    next();
  }
  catch(err)
  {
    console.log('Could not start Winston Logger: ' + err);
    next();
  }
};
