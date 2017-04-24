
angular.module('googleMapApp', [])
.controller('mapController', function(placeName){
    var trial = "trial";
     var map = new google.maps.Map(placeName, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 13,
    mapTypeId: 'roadmap'
  });

  var searchBox = new google.maps.places.SearchBox(placeName);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(placeName);

   map.addListener('bounds_changed', function () {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];

  searchBox.addListener('places_changed', function () {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    markers.forEach(function (marker) {
      marker.setMap(null);
    });

    var bounds = new google.maps.LatLngBounds();

    console.log("Bounds" + bounds)
    places.forEach(function (place) {
      if (!place.geometry) {
        return;
      }

      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      markers.push(new google.maps.Marker({
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

});