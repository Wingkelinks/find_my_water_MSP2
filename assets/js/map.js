/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function myFunction() {
	var x = document.getElementById("nav-normal");
	if (x.className === "hamburger-bar") {
		x.className += " responsive";
	} else {
		x.className = "hamburger-bar";
	}
}

// Google Maps

function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 8,
		center: {
			lat: -33.865143, // Sydney
			lng: 151.2099,
		},
	});

	var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	var locations = [
		{ lat: -33.925453716510084, lng: 151.25941794502484 }, // Wylie's Baths
		{ lat: -33.923984806797506, lng: 151.25872057065516 }, // McIver Baths
		{ lat: -33.8952, lng: 151.2745 }, // Bondi Icebergs
		{ lat: -33.9201, lng: 151.2606 }, // Giles Baths
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
