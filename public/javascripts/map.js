(function(){

  $(document).ready(initialize);

  var map = L.map('map', {
      center: [24.4, 54.56],
      zoom: 11
      });

  var markerLayerGroup = L.layerGroup();
  var leafletLayerGroup = L.layerGroup().addTo(map);
  var breadCrumbGroup = L.layerGroup().addTo(map);

  var geoJSONLayer = L.geoJson().addTo(map);
  var socket = io();

  var crumbTimer = setInterval(layCrumb, 2000)

  var crumbArray = [];

  var showbts = false;
  var showGsm = false;
  var showUmts = false;

  var planeIcon = L.icon({
      iconUrl: '../images/plane.png',

      iconSize:     [28, 28], // size of the icon
      iconAnchor:   [14, 14], // point of the icon which will correspond to marker's location
      popupAnchor:  [-14, -14] // point from which the popup should open relative to the iconAnchor
  });

  var crumbIcon = L.icon({
    iconUrl: '../images/breadcrumb.png',
    iconSize:     [8, 8],
    iconAnchor:   [4,4]
  })

  var aircraftMarker = L.rotatedMarker([0, 0], {icon: planeIcon}).addTo(map)

  var Aircraft = {
    latitude: 0,
    longitude: 0,
    heading: 0
  }

  function initialize(){
		initMap();
    initDraw();

    socket.on('GPS', gpsReceived);
    socket.on('AllLayers', layersReceived);
    socket.on('AddLayer', layersReceived);
    socket.on('RemoveLayers', removeLayers);

    $('#center-location').click(centerLocation);
    $('#marker-location').click(addMarker);
    $('#show-bts').click(showBts);
    $('#remove-layers').click(emitRemoveLayers);

    map.on('mousemove', function(e) {
      var lat = numeral(e.latlng.lat).format('0.00000');
      var lng = numeral(e.latlng.lng).format('0.00000');
      $('#cursor-location').text(lat + " " + lng );
    });

    // MAP EVENTS
    map.on('draw:created', mapObjectAdded)
    //map.on('zoomend', getBts);
    //map.on('dragend', getBts);

    // END MAP EVENTS

/*
    if (document.addEventListener) {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        }, false);
    } else {
        document.attachEvent('oncontextmenu', function() {
            window.event.returnValue = false;
        });
    }
    */
  }

  function initMap() {
		L.tileLayer('maps/tiles/{z0}/{x0}/{x1}/{y0}/{y1}.png').addTo(map);
	}

  function initDraw() {
    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    var drawControl = new L.Control.Draw({
        edit: {
            featureGroup: drawnItems
        }
    });
    map.addControl(drawControl);
  };

  function mapObjectAdded(e){
    var layer = e.layer.toGeoJSON();
    var type = e.layerType;

    layer.properties.layerType = type;

    if(type == 'circle'){
      layer.properties.radius = e.layer._mRadius
    }

    try {
      //layer.bindPopup('LAT: ' + e.layer._latlng.lat +'<br>LON: '+ e.layer._latlng.lng);

      socket.emit('LayerAdded', layer)
      //drawnItems.addLayer(layer);
    }
    catch(err) {
      console.log(err);
    }
  }

  function layersReceived(layer){
    if($.isArray(layer)) {
      for(var i=0; i< layer.length; i++) {
        if(layer[i].data.properties.layerType == 'circle') {
          leafletLayerGroup.addLayer(createCircle(layer[i]));
        }
        else {
          geoJSONLayer.addData(layer[i].data);
        }
      }
    }
    else {
      if(layer.data.properties.layerType == 'circle') {
        leafletLayerGroup.addLayer(createCircle(layer));
      }
      else {
        geoJSONLayer.addData(layer.data);
      }
    }
  }

  function removeLayers(){
    markerLayerGroup.clearLayers();
    leafletLayerGroup.clearLayers();
    geoJSONLayer.clearLayers();
  }

  function emitRemoveLayers(){
    try {
      socket.emit('RemoveLayers');
    }
    catch(err) {
      console.log(err);
    }
  }

  function gpsReceived(sentence) {
    if (sentence.lat != "" || sentence.lon !=""){

      var coordinates = dgmToDd(sentence.lat, sentence.lon);

      aircraftMarker.setAngle(Aircraft.latitude, Aircraft.longitude, coordinates.lat, coordinates.lon);
      aircraftMarker.setLatLng(L.latLng(coordinates.lat, coordinates.lon));

      Aircraft.latitude = coordinates.lat;
      Aircraft.longitude = coordinates.lon;

     if (sentence.numSat > 3){
       $('#gps').removeClass('bad-gps');
       $('#gps').addClass('good-gps');

     } else{
       $('#gps').removeClass('good-gps');
       $('#gps').addClass('bad-gps');
     }

     var lat = numeral(Aircraft.latitude).format('0.00000');
     var lon = numeral(Aircraft.longitude).format('0.00000');
      $('#plane-location').text(lat + " " + lon);
    }
  }

  function showBts() {
    if(showbts == false) {
      $('#show-bts').addClass('active');
      showbts = true;
      getBts();
    }
    else {
      $('#show-bts').removeClass('active');
      showbts = false;
      removeBts();
    }
  }

  function getBts() {
    //var url = '/celltowers/?lat='+lat+'&lng='+lng+'&limit='+limitVal
    removeBts();
    if($('#show-bts').hasClass('active')) {
      var bounds = map.getBounds();
      var url = '/celltowers?lat1='+bounds.getNorthEast().lat + "&lon1=" + bounds.getNorthEast().lng + "&lat2=" + bounds.getNorthWest().lat + "&lon2=" + bounds.getNorthWest().lng + "&lat3=" + bounds.getSouthWest().lat + "&lon3=" + bounds.getSouthWest().lng + "&lat4=" + bounds.getSouthEast().lat + "&lon4=" + bounds.getSouthEast().lng;
      $.get(url, function(data){
        var markerArray = new Array(data.length)
        $('#bts-number').text('Num BTS: ' + data.celltowers.length)
        for(var i=0; i<data.celltowers.length; i++){
          var cell = data.celltowers[i];
          var text = "Radio: " + cell.radio + "</br>" +
                     "Cell: " + cell.cell+ "</br>" +
                     "MCC: " + cell.mcc + "</br>" +
                     "Net: " + cell.net + "</br>" +
                     "Range(m): " +cell.range;
          markerArray[i] = (L.marker([cell.lat, cell.lon]).bindPopup(text));
        }
        markerLayerGroup = L.layerGroup(markerArray).addTo(map);
      });
    }
  };

  function removeBts() {
    $('#bts-number').text('');
    map.removeLayer(markerLayerGroup);
  }

	function centerLocation() {
		var lat = $('#center-lat').val();
		var lng = $('#center-lon').val();
		map.panTo({lat,lng})
	}

  function addMarker() {
    var lat = $('#marker-lat').val();
    var lng = $('#marker-lon').val();
    console.log(lat+' '+lng)
    leafletLayerGroup.addLayer(new L.Marker(L.latLng({lat: lat, lng: lng})));
  }

  function layCrumb(){
    if(crumbArray.length > 10){
      map.removeLayer(crumbArray[9]);
      crumbArray.pop();
    }
    var position = new L.Marker(L.latLng({lat: Aircraft.latitude, lng: Aircraft.longitude}), {icon: crumbIcon});
    crumbArray.push(position);
    map.addLayer(position);
  }

  function dgmToDd(lat, lon) {
    var degrees = lat.slice(0,2) * 1;
    var minutes = lat.slice(2,10) / 60;

    var latitude = degrees + minutes;

    degrees = lon.slice(0,3) * 1;
    minutes = lon.slice(3,11) / 60;

    var longitude = degrees + minutes;

    return {lat: latitude, lon: longitude};
  }

  function angleFromCoordinate(startLat, startLong, endLat, endLong) {
    var brng = Math.atan2(startLat - endLat, startLong - endLong);
    brng = brng * (180 / Math.PI);
    brng = (brng + 360) % 360;
    brng = 360 - brng;
    return brng;
  }

Math.degrees = function(rad)
 {
   return rad*(180/Math.PI);
 }

Math.radians = function(deg)
 {
   return deg * (Math.PI/180);
 }

function createCircle(layer) {
  if(layer.data.properties.layerType == 'circle'){

    var lat = layer.data.geometry.coordinates[1];
    var lon = layer.data.geometry.coordinates[0];
    var radius = layer.data.properties.radius;
    var circle = L.circle([lat, lon], radius);

    return circle;
  }
}

})();
