(function () {

  $(document).ready(initialize);

  var isMobile = false;
  // device detection
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;


  var map = L.map('map', {
    center: [0.0, 0.0],
    zoom: 4,
    zoomControl: false
  });

  var currentTileLayer;
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
    icon: planeIcon,
    latitude: 0,
    longitude: 0,
    heading: 0,
    altiitude: 0,
    speedKnots: 0
  };

  function initialize() {
    initMap();
    initDraw();
    initDraggable();
    ifIsMobile();
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
    $('input[type=radio][name=tile-type]').change(changeTile);

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
    var mapsDir = 'maps/tiles/{z0}/{x0}/{x1}/{y0}/{y1}.png';
    currentTileLayer = L.tileLayer(mapsDir);
    currentTileLayer.addTo(map);
    var osm2 = new L.TileLayer(mapsDir, {minZoom: 0, maxZoom: 13});
    var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true }).addTo(map);
  }

  function initDraw() {
    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    var drawControl = new L.Control.Draw({
      position: 'topright',
      edit: {
        featureGroup: geoJSONLayer
      }
    });
    map.addControl(drawControl);
  };

  function initDraggable() {
    $('.map-text').draggable();
  }

  function ifIsMobile() {
    if(isMobile) {
      $('.leaflet-draw').remove();
      $('#cursor-location').remove();
    }
  }

  function addCalendar() {
    $('#sandbox-container input').datepicker({
        todayBtn: "linked"
    });
  }

  function changeTile() {
    if($('#satellite').is(':checked')){
      currentTileLayer.setUrl('maps/sat_tiles/{z0}/{x0}/{x1}/{y0}/{y1}.png');
      $('#top-bar-nav').addClass('navbar-night');
      $('#top-bar-nav').removeClass('navbar-default');
    } else {
      currentTileLayer.setUrl('maps/tiles/{z0}/{x0}/{x1}/{y0}/{y1}.png');
      $('#top-bar-nav').removeClass('navbar-night');
      $('#top-bar-nav').addClass('navbar-default');
    }
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
      startCrumbTimer();
      var coordinates = dgmToDd(sentence.lat, sentence.lon);
      aircraftMarker.setLatLng(L.latLng(coordinates.lat, coordinates.lon));

      Aircraft.latitude = coordinates.lat;
      Aircraft.longitude = coordinates.lon;
      Aircraft.altitude = sentence.alt;

      if(sentence.sentence == 'GGA') {
        if (sentence.fixType == "fix") {
          $('#gps').removeClass('bad-gps some-gps');
          $('#gps').addClass('good-gps');
        } else if (sentence.numSat <=3) {
          $('#gps').removeClass('good-gps bad-gps');
          $('#gps').addClass('some-gps');
        } else {
          $('#gps').removeClass('good-gps some-gps');
          $('#gps').addClass('bad-gps');
        }
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
    map.panTo({ lat: Aircraft.latitude, lon: Aircraft.longitude });
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
