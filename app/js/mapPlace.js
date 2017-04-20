
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 13,
    mapTypeId: 'roadmap'
  });

  var placeName = document.getElementById('placeName');
  var searchBox = new google.maps.places.SearchBox(placeName);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(placeName);

  map.addListener('bounds_changed', function () {
    searchBox.setBounds(map.getBounds());
  });

  searchBox.addListener('places_changed', function () {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    var markers = [];
    console.log(" Length of Places: " + markers.length)
    markers.forEach(function (marker) {
      marker.setMap(null);
    });

    var bounds = new google.maps.LatLnBounds();

    places.forEach(function (place) {
      if (!place.geometry) {
        console.log('Returned Places');
        return;
      }

      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      markers.push(new google.maps.Markers({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      }
      else {
        bound.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}