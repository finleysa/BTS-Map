(function(){

  $(document).ready(initialize);

  var map = L.map('map', {
      center: [24.444, 54.444],
      zoom: 12
  });

  var showbts = false;
  var markerLayerGroup = L.layerGroup();
  var showGsm = false;
  var showUmts = false;

  function initialize(){
		initMap();
    $(document).foundation();
    $('#center-location').click(centerLocation);
    $('#show-bts').click(showBts)

    map.on('mousemove', function(e){
      var lat = numeral(e.latlng.lat).format('0.00000');
      var lng = numeral(e.latlng.lng).format('0.00000');
      $('#coordinates-label').text("Lat: " + lat + " Lng: " + lng );
    });

    map.on('zoomend', getBts);
    map.on('dragend', getBts);
  }

  function showBts(){
    if(showbts == false){
      $('#show-bts').addClass('active');
      showbts = true;
      getBts();
    }
    else{
      $('#show-bts').removeClass('active');
      showbts = false;
      removeBts();
    }
  }

	function initMap(){
		var markerLayerGroup = L.layerGroup().addTo(map);
		L.tileLayer('maps/tiles/{z0}/{x0}/{x1}/{y0}/{y1}.png').addTo(map); //gMapCatcher
    $('.leaflet-control-zoom').remove();
		//L.tileLayer('maps/tiles/{z}/{x}/{y}.png').addTo(map);

	}

  function getBts(){
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
          //if (cell.radio == "UMTS" && $('#show-umts').is(':checked'))
          markerArray[i] = (L.marker([cell.lat, cell.lon]).bindPopup(cell.radio + " " + cell.cell));
        }
        markerLayerGroup = L.layerGroup(markerArray).addTo(map);
      });
    }
  };

  function removeBts(){
    $('#bts-number').text('');
    map.removeLayer(markerLayerGroup);
  }

	function centerLocation(){
		var lat = $('#center-lat').val();
		var lng = $('#center-lon').val();
		map.panTo({lat,lng})
	}

	// EVENTS


	// lat long validation RegExp
	// ^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$

})();


/*
function getPins(e){
	bounds = map.getBounds();
	url = "ws/parks/within?lat1=" + bounds.getNorthEast().lat + "&lon1=" + bounds.getNorthEast().lng + "&lat2=" + bounds.getSouthWest().lat + "&lon2=" + bounds.getSouthWest().lng;
	$.get(url, pinTheMap, "json")
}

function pinTheMap(data){
	//clear the current pins
	map.removeLayer(markerLayerGroup);

	//add the new pins
	var markerArray = new Array(data.length)
	for (var i = 0; i < data.length; i++){
		park = data[i];
		markerArray[i] = L.marker([park.pos[1], park.pos[0]]).bindPopup(park.Name);
	}

	markerLayerGroup = L.layerGroup(markerArray).addTo(map);
}

map.whenReady(getPins)
*/
