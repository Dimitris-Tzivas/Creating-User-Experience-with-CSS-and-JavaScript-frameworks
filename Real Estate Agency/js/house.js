let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

//Maps for every house
//Get url of the page
let house = document.URL.slice(-6, -5); //
if (house === "0") {
  house = "10";
}
console.log(house);

function initMap() {
  //Map options
  var options = [
    {
      zoom: 13,
      center: { lat: 42.3601, lng: -71.0589 },
    },
    {
      zoom: 13,
      center: { lat: 50.0121, lng: 20.985842 },
    },
    {
      zoom: 13,
      center: { lat: 51.509865, lng: -0.118092 },
    },
    {
      zoom: 13,
      center: { lat: 48.85341, lng: 2.3488 },
    },
    {
      zoom: 13,
      center: { lat: 48.58392, lng: 7.74553 },
    },
    {
      zoom: 13,
      center: { lat: 25.276987, lng: 55.296249 },
    },
    {
      zoom: 13,
      center: { lat: 52.520008, lng: 13.404954 },
    },
    {
      zoom: 13,
      center: { lat: 41.902782, lng: 12.496366 },
    },
    {
      zoom: 13,
      center: { lat: 59.334591, lng: 18.06324 },
    },
    {
      zoom: 13,
      center: { lat: 59.284073, lng: 11.109403 },
    },
  ];

  // New map
  var map = new google.maps.Map(
    document.getElementById("map"),
    options[house - 1]
  );

  //Array of markers
  var markers = [
    {
      coords: { lat: 42.3601, lng: -71.0589 },
      iconImage: "../images/map-icons/pin.png",
      content: "<h5>It's waiting for you!</h5>",
    },
    {
      coords: { lat: 50.0121, lng: 20.985842 },
      iconImage: "../images/map-icons/pin.png",
      content: "<h5>It's waiting for you!</h5>",
    },
    {
      coords: { lat: 51.509865, lng: -0.1180929 },
      iconImage: "../images/map-icons/pin.png",
      content: "<h5>It's waiting for you!</h5>",
    },
    {
      coords: { lat: 48.85341, lng: 2.3488 },
      iconImage: "../images/map-icons/pin.png",
      content: "<h5>It's waiting for you!</h5>",
    },
    {
      coords: { lat: 48.58392, lng: 7.74553 },
      iconImage: "../images/map-icons/pin.png",
      content: "<h5>It's waiting for you!</h5>",
    },
    {
      coords: { lat: 25.276987, lng: 55.296249 },
      iconImage: "../images/map-icons/pin.png",
      content: "<h5>It's waiting for you!</h5>",
    },
    {
      coords: { lat: 52.520008, lng: 13.404954 },
      iconImage: "../images/map-icons/pin.png",
      content: "<h5>It's waiting for you!</h5>",
    },
    {
      coords: { lat: 41.902782, lng: 12.496366 },
      iconImage: "../images/map-icons/pin.png",
      content: "<h5>It's waiting for you!</h5>",
    },
    {
      coords: { lat: 59.334591, lng: 18.06324 },
      iconImage: "../images/map-icons/pin.png",
      content: "<h5>It's waiting for you!</h5>",
    },
    {
      coords: { lat: 59.284073, lng: 11.109403 },
      iconImage: "../images/map-icons/pin.png",
      content: "<h5>It's waiting for you!</h5>",
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
