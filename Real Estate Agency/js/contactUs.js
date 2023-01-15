function initMap() {
  //Map options
  var options = {
    zoom: 13,
    center: { lat: 47.35954, lng: 8.54896 },
  };

  // New map
  var map = new google.maps.Map(document.getElementById("map"), options);

  //Array of markers
  var markers = [
    {
      coords: { lat: 47.35954, lng: 8.54896 },
      iconImage: "../images/map-icons/pin.png",
      content: "<h5>Here we are, come say hi!</h5>",
    },
  ];

  //loop through markers
  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  //Add Marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });

    //Check for customicon
    if (props.iconImage) {
      //Set icon image
      marker.setIcon(props.iconImage);
    }

    //Check content
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    }
  }
}
