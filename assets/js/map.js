// Toggle between adding and removing the "responsive" class to navigation when the user clicks on the hamburger bar //

function myFunction() {
	var x = document.getElementById("nav-normal");
	if (x.className === "hamburger-bar") {
		x.className += " responsive";
	} else {
		x.className = "hamburger-bar";
	}
}

// Initialise Google Maps
// Set to Australia
function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 4,
		center: {
			lat: -24.86958929627374,
			lng: 134.70932442476536,
		},
	});

	// Adding Markers
	var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	var locations = [
		// New South Wales
		{ lat: -33.925453716510084, lng: 151.25941794502484 }, // Wylie's Baths
		{ lat: -33.923984806797506, lng: 151.25872057065516 }, // McIver Baths
		{ lat: -33.8952, lng: 151.2745 }, // Bondi Icebergs
		{ lat: -33.9201, lng: 151.2606 }, // Giles Baths
		{ lat: -29.435710311528698, lng: 153.36545894371312 }, // Yamba Baths
		{ lat: -32.0707, lng: 152.5442 }, //Blackhead

		// Queensland
		{ lat: -26.71103426866837, lng: 153.30404906522853 }, // Kings Beach
		{ lat: -27.345186123803426, lng: 153.38905660810025 }, //Wynnum
		{ lat: -26.25768764160519, lng: 153.07536326917028 }, // Noosa - natural

		// Western Australia
		{ lat: -31.86230461300052, lng: 115.75216483915908 }, // Hamersley Pool - natural
		{ lat: -31.86365477683206, lng: 115.75195541521052 }, // Mettam's Pool - natural
		{ lat: -17.972976736604696, lng: 122.1776284613671 }, // Anastacia's Rock pool - historical/natural
	];

	var markers = locations.map(function (location, i) {
		return new google.maps.Marker({
			position: location,
			label: labels[i % labels.length],
		});
	});

	new MarkerClusterer(map, markers, {
		imagePath:
			"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
	});
}
