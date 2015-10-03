(function(){

  $(document).ready(initialize);

  var map = L.map('map', {
      center: [24.444, 54.444],
      zoom: 12
      });

  var markerLayerGroup = L.layerGroup();
  var socket = io();

  var showbts = false;
  var showGsm = false;
  var showUmts = false;

  var planeIcon = L.icon({
      iconUrl: '../images/plane.png',

      iconSize:     [28, 28], // size of the icon
      iconAnchor:   [14, 14], // point of the icon which will correspond to marker's location
      popupAnchor:  [-14, -14] // point from which the popup should open relative to the iconAnchor
  });

  var aircraftMarker = L.marker([0, 0], {icon: planeIcon}).addTo(map)

  var Aircraft = {
    latitude: '',
    longitude: '',
  }

  function initialize(){
		initMap();
    initDraw();
    socket.on('GPS', gpsRecieved);
    $('#center-location').click(centerLocation);
    $('#show-bts').click(showBts)

    map.on('mousemove', function(e) {
      var lat = numeral(e.latlng.lat).format('0.00000');
      var lng = numeral(e.latlng.lng).format('0.00000');
      $('#cursor-location').text(lat + " " + lng );
    });

    // MAP EVENTS
    map.on('draw:created', mapObjectAdded)
    map.on('zoomend', getBts);
    map.on('dragend', getBts);
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
		L.tileLayer('maps/tiles/{z0}/{x0}/{x1}/{y0}/{y1}.png').addTo(map); //gMapCatcher
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

    map.on('draw:created', function (e) {
        var type = e.layerType,
            layer = e.layer;
        drawnItems.addLayer(layer);
    });
  };

  function mapObjectAdded(e){
    console.log(e.layer);
    socket.send('LayerAdded', e)
  }

  function gpsRecieved(sentence) {
    if (sentence.lat != "" || sentence.lon !=""){

      var coordinates = dgmToDd(sentence.lat, sentence.lon);

      Aircraft.latitude = coordinates.lat;
      Aircraft.longitude = coordinates.lon;
      aircraftMarker.setLatLng(L.latLng(Aircraft.latitude, Aircraft.longitude));

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

  function dgmToDd(lat, lon) {
    var degrees = lat.slice(0,2) * 1;
    var minutes = lat.slice(2,10) / 60;

    var latitude = degrees + minutes;

    degrees = lon.slice(0,3) * 1;
    minutes = lon.slice(3,11) / 60;

    var longitude = degrees + minutes;

    return {lat: latitude, lon: longitude};
  }
})();
