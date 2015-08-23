var express = require('express');
var router = express.Router();
var Cell = require('../models/celltower');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/celltowers', function(req, res, next){
  console.log(req.query+"!!!")
  Cell.findNearest(req.query, function(records){
    res.json('index', {celltowers: records});
  });
});

module.exports = router;
