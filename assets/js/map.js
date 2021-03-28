// Toggle between adding and removing the "responsive" class to navigation when the user clicks on the hamburger bar //

function myFunction() {
	var x = document.getElementById("nav-normal");
	if (x.className === "hamburger-bar") {
		x.className += " responsive";
	} else {
		x.className = "hamburger-bar";
	}
}

// Resources referenced for map integration:
// Code Institute course material,
// Brad Traversy - Google Maps JS API Tutorial https://www.youtube.com/watch?v=Zxf1mnP5zcw,
// Google Maps API documentation
// Change marker color reference:
// https://medium.com/free-code-camp/how-to-change-javascript-google-map-marker-color-8a72131d1207#:~:text=Add%20different%20color%20markers,-To%20add%20a&text=png%20at%20the%20end%20of,%2Fgreen%2Ddot.png%20.

// Set default map to Australia
function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 4,
		center: {
			lat: -24.86958929627374,
			lng: 134.70932442476536,
		},
	});
}

// Set map to New South Wales on button click
document.getElementById("categ-1").addEventListener("click", mapNSW);

function mapNSW() {
	var NSW = { lat: -32.63995735777177, lng: 146.131786144861 };
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 6,
		center: NSW,
	});
	var marker = new google.maps.Marker({
		position: NSW,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: {
			url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
		},
	});

	// Adding NSW Markers
	var labels = [];

	var locations = [
		// New South Wales Pools
		// North Coast (5)

		{ lat: -29.479114795697832, lng: 153.3636986108333 }, // Angourie Blue Pool
		{ lat: -32.0707, lng: 152.5442 }, //Blackhead
		{ lat: -32.179053928167896, lng: 152.51468527487043 }, //Forster Ocean Baths
		{ lat: -30.376568392884632, lng: 153.10146327932551 }, // Sawtell Memorial Pool
		{ lat: -29.435710311528698, lng: 153.36545894371312 }, // Yamba Baths

		// Mid-north Coast (3)
		{ lat: -32.929286433262696, lng: 151.79065766928017 }, // Newcastle Ocean Baths
		{ lat: -32.93511581377122, lng: 151.7816812360391 }, // Newcastle Bogey Hole
		{ lat: -32.950853798182244, lng: 151.75608798926146 }, // Newcastle Mereweather Ocean Baths

		// Central Coast ()
		{ lat: -33.34958893816434, lng: 151.5048530315713 }, // The Entrance Ocean Baths
		{ lat: -33.447793876288536, lng: 151.4472353024432 }, // Terrigal Rockpool
		{ lat: -33.5009051323597, lng: 151.42613018404592 }, // MacMasters Beach Rockpool
		{ lat: -33.54577138713682, lng: 151.30921556128678 }, // Pearl Beach Rockpool

		// Northern Beaches
		{ lat: -33.637400331980764, lng: 151.3320275499997 }, // Avalon
		{ lat: -33.646011306811765, lng: 151.32722734429757 }, // Bilgola Rockpool
		{ lat: -33.73356394045482, lng: 151.30462952667375 }, // Collaroy Rockpool
		{ lat: -33.75495357633734, lng: 151.2990800842935 }, // Dee Why Rockpool
		{ lat: -33.80079120205697, lng: 151.29446634272404 }, // Fairy Bower Ocean Pool
		{ lat: -33.78154207435666, lng: 151.2947794985859 }, // Freshwater
		{ lat: -33.679290289461726, lng: 151.31389351183137 }, // Mona Vale
		{ lat: -33.65701895814698, lng: 151.32274623657264 }, // Newport
		{ lat: -33.76749988885745, lng: 151.3018477998107 }, // North Curl Curl Rockpool
		{ lat: -33.70338545942512, lng: 151.30931108147055 }, // North Narrabeen
		{ lat: -33.599725208861, lng: 151.3290467371505 }, // Palm Beach Rockpool
		{ lat: -33.62365967757351, lng: 151.31900518243074 }, // Paradise Beach Baths
		{ lat: -33.78619715723261, lng: 151.28939903253854 }, // Queenscliff Rockpool
		{ lat: -33.774447762524424, lng: 151.29350246897116 }, // South Curl Curl Rockpool
		{ lat: -33.63547966952564, lng: 151.30712827100257 }, // Taylors Point Baths
		{ lat: -33.61375915703364, lng: 151.33318362738808 }, // Whale Beach Ocean Pool

		// Eastern Beaches
		{ lat: -33.8952, lng: 151.2745 }, // Bondi Icebergs
		{ lat: -33.890870850910126, lng: 151.2828383962746 }, //North Bondi Childrens' Pool (Wally Weeks & Mermaid Pool)
		{ lat: -33.90518336226847, lng: 151.2693380990867 }, // Bronte Baths
		{ lat: -33.920004247964826, lng: 151.26092184921202 }, // Giles Baths
		{ lat: -33.93337574549712, lng: 151.26185565136623 }, // Ivor Rowe Rockpool
		{ lat: -33.94290747720461, lng: 151.26375156840868 }, // Mahon Ocean Pool
		{ lat: -33.968317224425775, lng: 151.25471339908356 }, // Malabar Ocean Pool
		{ lat: -33.923984806797506, lng: 151.25872057065516 }, // McIver Baths
		{ lat: -33.92282354539231, lng: 151.25803020412556 }, // Ross Jones Rockpool
		{ lat: -33.925453716510084, lng: 151.25941794502484 }, // Wylie's Baths

		// Southern Beaches
		{ lat: -34.05292734409442, lng: 151.1562812545879 }, // North Cronulla
		{ lat: -34.070154930888094, lng: 151.15596443738463 }, // Oak Park Rockpool
		{ lat: -34.064612613473145, lng: 151.15577586502133 }, // Shelley Beach Ocean Pool
		{ lat: -34.053762151359855, lng: 151.15568501976688 }, // South Cronulla

		// Illawara
		{ lat: -34.307852171885536, lng: 150.9352893069852 }, // Austinmer
		{ lat: -34.36594270310622, lng: 150.92427078811258 }, // Bellambi
		{ lat: -34.21686677728874, lng: 151.01112713537734 }, // Bulgo Beach Pool
		{ lat: -34.33961377477255, lng: 150.92672035181008 }, // Bulli Rockpool
		{ lat: -34.2465431445343, lng: 150.97676622817653 }, // Coalcliff Rockpool
		{ lat: -34.291921770617215, lng: 150.9467890956899 }, // Coledale Rockpool
		{ lat: -34.385969437405215, lng: 150.91550056546578 }, // Towradgi Rockpool
		{ lat: -34.28020982901749, lng: 150.95613496790156 }, // Wombarra Rockpool
		{ lat: -34.34746779115992, lng: 150.92337237059448 }, // Woonona Rockpool

		// South Coast
		// Eurobodalla
		{ lat: -33.826743387347115, lng: 151.25520673640543 }, // Balmoral Baths

		{ lat: -36.42952574456306, lng: 150.08399805784413 }, // Bermagui
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
// End NSW

// Set map to Queensland on button click
document.getElementById("categ-2").addEventListener("click", mapQLD);

function mapQLD() {
	var QLD = { lat: -22.993157431425242, lng: 145.44954722595563 };
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 6,
		center: QLD,
	});
	var marker = new google.maps.Marker({
		position: QLD,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: {
			url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
		},
	});

	// Adding QLD Markers
	var labels = [];

	var locations = [
		// 	// Queensland Pools
		{ lat: -26.71103426866837, lng: 153.30404906522853 }, // Kings Beach
		{ lat: -27.345186123803426, lng: 153.38905660810025 }, //Wynnum
		{ lat: -26.25768764160519, lng: 153.07536326917028 }, // Noosa - natural
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

// End QLD

// Set map to Western Australia on button click
document.getElementById("categ-3").addEventListener("click", mapWA);

function mapWA() {
	var WA = { lat: -26.40935212833484, lng: 122.01047659269663 };
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: WA,
	});
	var marker = new google.maps.Marker({
		position: WA,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: {
			url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
		},
	});

	// Adding WA Markers
	var labels = [];

	var locations = [
		// 	// Western Australia Pools
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

// End WA

// Set map to South Australia on button click
document.getElementById("categ-4").addEventListener("click", mapSA);

function mapSA() {
	var SA = { lat: -29.989723761048964, lng: 135.1682426288512 };
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: SA,
	});
	var marker = new google.maps.Marker({
		position: SA,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: {
			url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
		},
	});

	// Adding SA Markers
	var labels = [];

	var locations = [
		// South Australia Pools
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

// End SA

// Set map to Victoria on button click
document.getElementById("categ-5").addEventListener("click", mapVIC);

function mapVIC() {
	var VIC = { lat: -37.04324072981648, lng: 144.03031949861648 };
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: VIC,
	});
	var marker = new google.maps.Marker({
		position: VIC,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: {
			url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
		},
	});

	// Adding VIC Markers
	var labels = [];

	var locations = [
		// Victorian Pools
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

// End VIC

// Set map to Northern Territory on button click
document.getElementById("categ-6").addEventListener("click", mapNT);

function mapNT() {
	var NT = { lat: -19.535990044685192, lng: 133.37768771047277 };
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: NT,
	});
	var marker = new google.maps.Marker({
		position: NT,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: {
			url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
		},
	});

	// Adding NT Markers
	var labels = [];

	var locations = [
		// Northern Territory Pools
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

// End NT

// Set map to Tasmania on button click
document.getElementById("categ-7").addEventListener("click", mapTAS);

function mapTAS() {
	var TAS = { lat: -41.8497075251421, lng: 146.4572132342973 };
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: TAS,
	});
	var marker = new google.maps.Marker({
		position: TAS,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: {
			url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
		},
	});

	// Adding TAS Markers
	var labels = [];

	var locations = [
		// Tasmanian Pools
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

// End TAS
