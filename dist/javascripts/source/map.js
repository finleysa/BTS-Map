(function () {

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

  var crumbTimer;
  var crumbTimerStarted = false;
  var followingPlaneTimer;
  var followPlaneTimerStarted = false;
  var followingPlane = false;

  var showbts = false;
  var showGsm = false;
  var showUmts = false;

  var planeIcon = L.icon({
    iconUrl: '../images/plane.png',

    iconSize: [28, 28], // size of the icon
    iconAnchor: [14, 14], // point of the icon which will correspond to marker's location
    popupAnchor: [-14, -14] // point from which the popup should open relative to the iconAnchor
  });

  var crumbIcon = L.icon({
    iconUrl: '../images/breadcrumb.png',
    iconSize: [8, 8],
    iconAnchor: [4, 4]
  });

  var aircraftMarker = L.rotatedMarker([0, 0], { icon: planeIcon }).addTo(map);

  var Aircraft = {
    latitude: 0,
    longitude: 0,
    heading: 0,
    altiitude: 0,
    speedKnots: 0
  };

  function initialize() {
    initMap();
    initDraw();
    addCalendar();

    socket.on('GPS', gpsReceived);
    socket.on('AllLayers', layersReceived);
    socket.on('AddLayer', layersReceived);
    socket.on('RemoveLayers', removeLayers);

    $('#center-location').click(centerLocation);
    $('#marker-location').click(addMarker);
    $('#remove-layers').click(emitRemoveLayers);
    $('#port-select').change(function () {
      var portText = $('#port-select option:selected').text()
      if(portText != "")
        socket.emit('ChangePort', portText);
    });
    $('#follow-plane').click(followPlane);
    $('#datepicker').change(downloadGPS);

    map.on('mousemove', function (e) {
      var lat = numeral(e.latlng.lat).format('0.00000');
      var lng = numeral(e.latlng.lng).format('0.00000');
      $('#cursor-location').text("Cursor: " + lat + " " + lng);
    });

    // MAP EVENTS
    map.on('draw:created', mapObjectAdded);
    map.on('draw:deleted', mapObjectDeleted);

    map.on('zoomend', getBts);
    map.on('dragend', getBts);
    // END MAP EVENTS
  }

  function initMap() {
    L.tileLayer('maps/tiles/{z0}/{x0}/{x1}/{y0}/{y1}.png').addTo(map);
  }

  function initDraw() {
    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    var drawControl = new L.Control.Draw({
      edit: {
        featureGroup: geoJSONLayer
      }
    });
    map.addControl(drawControl);
  };

  function addCalendar() {
    $("#datepicker").datepicker({
      changeMonth: true,
      changeYear: true
    });
  }

  function mapObjectAdded(e) {
    var layer = e.layer.toGeoJSON();
    var type = e.layerType;

    layer.properties.layerType = type;

    if (type == 'circle') {
      layer.properties.radius = e.layer._mRadius;
    }

    try {
      //layer.bindPopup('LAT: ' + e.layer._latlng.lat +'<br>LON: '+ e.layer._latlng.lng);
      console.log(e.layer);
      socket.emit('LayerAdded', layer);
      //drawnItems.addLayer(layer);
    } catch (err) {
      console.log(err);
    }
  }

  function mapObjectDeleted(e) {
    console.log(e.target);
    //socket.emit('LayerRemoved', e.layer)
  }

  function layersReceived(layer) {
    if ($.isArray(layer)) {
      for (var i = 0; i < layer.length; i++) {
        if (layer[i].data.properties.layerType == 'circle') {
          leafletLayerGroup.addLayer(createCircle(layer[i]));
        } else {
          geoJSONLayer.addData(layer[i].data);
        }
      }
    } else {
      if (layer.data.properties.layerType == 'circle') {
        leafletLayerGroup.addLayer(createCircle(layer));
      } else {
        console.log("single layer: " + layer.data);
        geoJSONLayer.addData(layer.data);
      }
    }
  }

  function removeLayers() {
    markerLayerGroup.clearLayers();
    leafletLayerGroup.clearLayers();
    geoJSONLayer.clearLayers();
  }

  function emitRemoveLayers() {
    try {
      socket.emit('RemoveLayers');
    } catch (err) {
      console.log(err);
    }
  }

  function downloadGPS() {
    $('#downloadgps').remove();
    var date = $('#datepicker').val();
    var a = $('<a>',{
      class: 'btn btn-info btn-sm',
      id: 'downloadgps',
      text: 'Download',
      href: '/getgps?date=' + date
    }).appendTo('#download-gps');
  }

  function gpsReceived(sentence) {
    if (sentence.sentence == "VTG" || sentence.sentence == "RMC") {
      aircraftMarker.setAngle(sentence.trackTrue);
      Aircraft.speedKnots = sentence.speedKnots;
    } else if (sentence.sentence == "GGA" && sentence.lat != "" && sentence.lon != "") {

      var coordinates = dgmToDd(sentence.lat, sentence.lon);
      aircraftMarker.setLatLng(L.latLng(coordinates.lat, coordinates.lon));

      Aircraft.latitude = coordinates.lat;
      Aircraft.longitude = coordinates.lon;
      Aircraft.altitude = sentence.alt;

      if (sentence.fixType == "fix") {
        $('#gps').removeClass('bad-gps');
        $('#gps').addClass('good-gps');
        startCrumbTimer();
      } else {
        $('#gps').removeClass('good-gps');
        $('#gps').addClass('bad-gps');
        stopCrumbTimer();
      }

      var lat = numeral(Aircraft.latitude).format('0.00000');
      var lon = numeral(Aircraft.longitude).format('0.00000');
      var alt = numeral(Aircraft.altitude * 3.280839895).format('0');

      $('#plane-location').text("Aircraft: " + lat + " " + lon);
      $('#plane-altitude').text("Altitude: " + alt + " ft");
      $('#plane-speed').text("Speed: " + Aircraft.speedKnots + " knots");
    }
  }

  function followPlane() {
    followingPlane = !followingPlane;
    if (followingPlane) {
      startPlaneFollowTimer();
      $('#fptext').css("color", '#00ff00');
    } else {
      stopPlaneFollowTimer();
      $('#fptext').removeAttr('style');
    }
  }

  function showBts() {
    if (showbts == false) {
      $('#show-bts').addClass('active');
      showbts = true;
      getBts();
    } else {
      $('#show-bts').removeClass('active');
      showbts = false;
      removeBts();
    }
  }

  function getFlightPath() {
    var url = '/flightpath';
    $.get(url, function (data) {
      var gpsArray = new Array(data.length);
      for (var i = 0; i < data.length; i++) {}
    });
  }

  function getBts() {
    //var url = '/celltowers/?lat='+lat+'&lng='+lng+'&limit='+limitVal
    removeBts();
    if ($('#show-bts').hasClass('active')) {
      var bounds = map.getBounds();
      var url = '/celltowers?lat1=' + bounds.getNorthEast().lat + "&lon1=" + bounds.getNorthEast().lng + "&lat2=" + bounds.getNorthWest().lat + "&lon2=" + bounds.getNorthWest().lng + "&lat3=" + bounds.getSouthWest().lat + "&lon3=" + bounds.getSouthWest().lng + "&lat4=" + bounds.getSouthEast().lat + "&lon4=" + bounds.getSouthEast().lng;
      $.get(url, function (data) {
        console.log(data);
        var markerArray = new Array(data.length);
        $('#bts-number').text('Num BTS: ' + data.celltowers.length);
        for (var i = 0; i < data.celltowers.length; i++) {
          var cell = data.celltowers[i];
          var text = "Radio: " + cell.radio + "</br>" + "Cell: " + cell.cell + "</br>" + "MCC: " + cell.mcc + "</br>" + "Net: " + cell.net + "</br>" + "Range(m): " + cell.range;
          markerArray[i] = L.marker([cell.lat, cell.lon]).bindPopup(text);
        }
        markerLayerGroup = L.layerGroup(markerArray).addTo(map);
      });
    }
  };

  function startCrumbTimer() {
    if (crumbTimerStarted == false) {
      crumbTimer = setInterval(layCrumb, 4000);
      crumbTimerStarted = true;
    }
  }

  function stopCrumbTimer() {
    if (crumbTimerStarted == true) {
      clearTimeout(crumbTimer);
      crumbTimerStarted = false;
    }
  }

  function startPlaneFollowTimer() {
    followingPlaneTimer = setInterval(function () {
      map.panTo({ lat: Aircraft.latitude, lon: Aircraft.longitude });
    }, 5000);
  }

  function stopPlaneFollowTimer() {
    clearTimeout(followingPlaneTimer);
  }

  function removeBts() {
    $('#bts-number').text('');
    map.removeLayer(markerLayerGroup);
  }

  function centerLocation() {
    var lat = $('#center-lat').val();
    var lng = $('#center-lon').val();
    map.panTo({ lat: lat, lon: lng });
  }

  function addMarker() {
    var lat = $('#marker-lat').val();
    var lng = $('#marker-lon').val();
    console.log(lat + ' ' + lng);
    var marker = new L.Marker(L.latLng({ lat: lat, lng: lng }));
    marker = marker.toGeoJSON();
    socket.emit('LayerAdded', marker);
  }

  function layCrumb() {
    var position = new L.Marker(L.latLng({ lat: Aircraft.latitude, lng: Aircraft.longitude }), { icon: crumbIcon });
    breadCrumbGroup.addLayer(position);
    var newTimer = setTimeout(function () {
      map.removeLayer(position);
    }, 600 * 1000);
  }

  function dgmToDd(lat, lon) {
    var degrees = lat.slice(0, 2) * 1;
    var minutes = lat.slice(2, 10) / 60;

    var latitude = degrees + minutes;

    degrees = lon.slice(0, 3) * 1;
    minutes = lon.slice(3, 11) / 60;

    var longitude = degrees + minutes;

    return { lat: latitude, lon: longitude };
  }

  function createCircle(layer) {
    if (layer.data.properties.layerType == 'circle') {

      var lat = layer.data.geometry.coordinates[1];
      var lon = layer.data.geometry.coordinates[0];
      var radius = layer.data.properties.radius;
      var circle = L.circle([lat, lon], radius);

      return circle;
    }
  }
})();