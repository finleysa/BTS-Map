var express = require('express');
var router = express.Router();
var io = require('socket.io')();
var mime = require('mime');
var path = require('path');
var fs = require('fs');
var Cell = require('../models/celltower');
var MapLayer = require('../models/mapLayer');
var nmea = require('../bin/nmea');
var Gps = require('../models/gps');
var zlib = require('zlib');

/* GET home page. */
router.get('/', function(req, res, next) {
  nmea.GetPorts(function(data){
    console.log(data);
    res.render('index', { ports: data});
  });
});

router.get('/celltowers', function(req, res, next) {
  Cell.findNearest(req.query, function(records) {
    console.log(records);
    res.json('index', {celltowers: records});
  });
});

router.post('/filter', function(req, res, next) {
  Cell.filterBts(req.body, function(success){

  })
})

router.get('/getgps', function(req, res, next) {
  var date = req.query.date;
  Gps.findByDate(date, function(records){
    // create date string
    date = new Date(date);
    var month = (date.getMonth() + 1).toString();
    if(month.length == 1) {
      month = '0' + month;
    }
    date = date.getFullYear() +''+ month +''+ date.getDate();

    // create file
    var filepath = __dirname + '/../gps_logs/' + date + '.txt.gzip'
    var file = fs.createWriteStream(filepath);
    file.on('error', function(err) {
      logger.error("/getgps : " + err);
    });
    records.forEach(function(v) { file.write(JSON.stringify(v) + "\n"); });
    file.end(function(){
      // send file
      var gzip = zlib.createGzip();
      var filename = path.basename(filepath);
      var mimetype = mime.lookup(filepath);
      res.setHeader('Content-disposition', 'attachment; filename=' + filename);
      res.setHeader('Content-type', mimetype);

      var filestream = fs.createReadStream(filepath);
      filestream.pipe(gzip).pipe(res);
    });
  });
});

module.exports = router;
