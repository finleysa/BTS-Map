module.exports = Celltower;

var Mongo = require('mongodb');
var fs = require('fs');
var path = require('path');

function Celltower(cell){
  this.radio = cell.radio;
  this.mcc = cell.mcc;
  this.net = cell.net;
  this.area = cell.area;
  this.cell = cell.cell;
  this.unit = cell.unit;
  this.lon = cell.lon;
  this.lat = cell.lat;
  this.range = cell.range;
  this.samples = cell.samples;
  this.changeable = cell.changeable;
  this.created = cell.created;
  this.updated = cell.updated;
  this.averageSignal = cell.averageSignal;
  this.coordinates = [cell.lon, cell.lat];
}

Celltower.findNearest = function(q, fn){
  var celltowers = global.webmap.db.collection('celltowers');
  console.log(q)
  celltowers.find({'geometry': {
    $geoWithin: {
      $geometry: {
        type: 'Polygon',
        coordinates: [ [ [q.lon1 * 1, q.lat1 * 1 ],
        [q.lon2 * 1, q.lat2 * 1],
        [q.lon3 * 1, q.lat3 * 1],
        [q.lon4 * 1, q.lat4 * 1],
        [q.lon1 * 1, q.lat1 * 1] ] ] } } } }).toArray(function(err, records){
    fn(records);
  })

  //celltowers.find({'geometry': { $near: { $geometry: { type: "Point", coordinates: [54.444, 24.444] }, $maxDistance: 80000 } } }).toArray(function(err, records){
  //  fn(records);
  //});

};
