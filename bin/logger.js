var winston = require('winston');
global.logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: 'webmap.log' })
  ]
});


exports.connect = function(req, res, next){
  try{
    next();
  }
  catch(err)
  {
    console.log('Could not start Winston Logger: ' + err);
    next();
  }
};
