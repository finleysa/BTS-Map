var express = require('express');
var router = express.Router();
var io = require('socket.io')();
var Cell = require('../models/celltower');
var MapLayer = require('../models/mapLayer');
var nmea = require('../bin/nmea');
var Gps = require('../models/gps');

/* GET home page. */
router.get('/', function(req, res, next) {
  nmea.GetPorts(function(data){
    console.log(data);
    res.render('index', { ports: data});
  });
});

router.get('/celltowers', function(req, res, next){
  Cell.findNearest(req.query, function(records){
    console.log(records);
    res.json('index', {celltowers: records});
  });
});

router.post('/filter', function(req, res, next){
  Cell.filterBts(req.body, function(success){
  })
})

router.get('/flightpath', function(req, res, next){
  Gps.findAll(req.query, function(records){
    console.log(records.length);
    res.json('index', {flightpath: records});
  });
});

module.exports = router;
