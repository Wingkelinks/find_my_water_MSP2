// Resources referenced for map integration:
// Code Institute course material,
// Sam Codes - JS Google Maps API Tutorial: https://www.youtube.com/watch?v=uPhWSyRqQDA&t=2597s,
// Google Maps API documentation
// Change marker icon: https://icons8.com/

// Set default map to Australia
function initMap() {
	//Map options
	var options = {
		zoom: 5,
		center: {
			lat: -24.86958929627374,
			lng: 134.70932442476536,
		},
		mapId: "c43ed644e130993f",
	};

	//Default map of Australia
	var map = new google.maps.Map(document.getElementById("map"), options);
}
// Set map to New South Wales on button click
document.getElementById("categ-1").addEventListener("click", mapNSW);

function mapNSW() {
	var NSW = { lat: -32.63995735777177, lng: 146.131786144861 };
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 6,
		center: NSW,
		mapId: "c43ed644e130993f",
	});

	// Add NSW Main Marker
	var marker = new google.maps.Marker({
		position: NSW,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: {
			url: "https://img.icons8.com/clouds/100/000000/outdoor-swimming-pool.png",
		},
	});

	// Add NSW markers to array
	let MarkerArray = [
		{
			//NSW main marker
			location: { lat: -32.63995735777177, lng: 146.131786144861 },
			content: `<h1>New South Wales</h1><h3 style="font-size:1.2rem;">The majority of Australia's ocean pools are located in NSW. From Yamba in the North, to Bermagui in the South, there are approximately 100 in total. The pools that are dotted on this map represent <i>true</i> ocean pools. In other words, a perfect blend of the natural environment and human efforts - each pool, a product of its location. Dating back to the late 19th century, these pools were designed to protect European settlers from the dangers of the Australian surf.</h3>`,
			imageIcon:
				"https://img.icons8.com/clouds/100/000000/outdoor-swimming-pool.png",
		},

		//// North Coast (5) ////
		{
			// Angourie Blue Pool
			location: { lat: -29.479114795697832, lng: 153.3636986108333 },
			content: `<h3>Angourie Blue Pool</h3>`,
		},
		{
			// Blackhead
			location: { lat: -32.0707, lng: 152.5442 },
			imageIcon: {
				url: "https://img.icons8.com/ultraviolet/80/4a90e2/marker.png",
			},
			content: `
			<div>
			<a href="https://allintooceanpoolsinc.org/ocean-pools/black-head-rock-pool/" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Blackhead Rockpool<b></h2></a>
			<h3 style="font-size:1.1rem;">Opened in 1940. Blackead boasts a 50m lap pool, in gorgeous surrounds.</h3>
			</div>
			<h3 style="color:#bf3648;">Main St, Black Head NSW 2430</h3>
			<div>
			<img src="assets/media/NSW_blackhead_nl.jpg" width="200" height="100">
			</div>
			<div><a href="https://www.theguardian.com/lifeandstyle/ng-interactive/2020/jan/21/water-worlds-the-magic-of-new-south-wales-ocean-pools" target="_blank">Image source</a>
			</div>`,
		},
		{
			// Forster Ocean Baths
			location: { lat: -32.179053928167896, lng: 152.51468527487043 },
			content: `<h3>Forster Ocean Baths</h3>`,
		},
		{
			// Sawtell Memorial Pool
			location: { lat: -30.376568392884632, lng: 153.10146327932551 },
			content: `<h3>Sawtell Memorial Pool</h3>`,
		},
		{
			// Yamba Baths
			location: { lat: -29.435710311528698, lng: 153.36545894371312 },
			imageIcon: {
				url: "https://img.icons8.com/ultraviolet/80/4a90e2/marker.png",
			},
			content: `
			<div>
			<a href="https://oceanpoolsnsw.net.au/yamba-rock-pool-yamba-nsw/" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Yamba Baths<b></h2></a>
			<h3 style="font-size:1.1rem;">Yamba's ocean pool is the northernmost along the NSW coast. It was built in 1969.</h3>
			</div>
			<h3 style="color:#bf3648;">Marine Parade, Yamba NSW 2464</h3>
			<div>
			<img src="assets/media/NSW_yamba_nl.jpg" width="200" height="100">
			</div>
			<div><a href="https://www.theguardian.com/lifeandstyle/ng-interactive/2020/jan/21/water-worlds-the-magic-of-new-south-wales-ocean-pools" target="_blank">Image source</a>
			</div>`,
		},

		//// Mid-north Coast (3) ////
		{
			// Newcastle Ocean Baths
			location: { lat: -32.929286433262696, lng: 151.79065766928017 },
			content: `<h3>Newcastle Ocean Baths</h3>`,
		},
		{
			// Bogey Hole, Newcastle
			location: { lat: -32.93511581377122, lng: 151.7816812360391 },
			content: `<h3>Bogey Hole, Newcastle</h3>`,
		},
		{
			// Newcastle Mereweather Ocean Baths
			location: { lat: -32.950853798182244, lng: 151.75608798926146 },
			imageIcon: {
				url: "https://img.icons8.com/ultraviolet/80/4a90e2/marker.png",
			},
			content: `
			<div>
			<a href="https://newcastle.nsw.gov.au/explore/recreation/beaches-baths/ocean-baths" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Newcastle Merewether Ocean Baths<b></h2></a>
			<h3 style="font-size:1.1rem;">Opened in 1935, Merewether ocean pools are the largest in the Southern Hemisphere. It features two large pools; one deep with diving blocks and one shallow with a sandy beach. A popular, family-friendly swimming spot in Newcastle.</h3>
			</div>
			<h3 style="color:#bf3648;">3a Ocean St, Merewether NSW 2291</h3>
			<div>
			<img src="assets/media/NSW_merewether.jpg" width="200" height="100">
			</div>
			<div><a href="https://www.newcastleherald.com.au/story/1887282/merewether-baths-upgrade-in-limbo/https://www.newcastleherald.com.au/story/1887282/merewether-baths-upgrade-in-limbo/" target="_blank">Image source</a>
			</div>`,
		},

		//// Central Coast () ////
		{
			// The Entrance Ocean Baths
			location: { lat: -33.34958893816434, lng: 151.5048530315713 },
			content: `<h3>The Entrance Ocean Baths</h3>`,
		},
		{
			// Terrigal Rockpool
			location: { lat: -33.447793876288536, lng: 151.4472353024432 },
			content: `<h3>Terrigal Rockpool</h3>`,
		},
		{
			// MacMasters Beach Rockpool
			location: { lat: -33.5009051323597, lng: 151.42613018404592 },
			content: `<h3>MacMasters Beach Rockpool</h3>`,
		},
		{
			// Pearl Beach Rockpool
			location: { lat: -33.54577138713682, lng: 151.30921556128678 },
			content: `<h3>Pearl Beach Rockpool</h3>`,
		},

		//// Northern Beaches ////
		{
			// Avalon
			location: { lat: -33.637400331980764, lng: 151.3320275499997 },
			content: `<h3>Avalon</h3>`,
		},
		{
			// Balmoral Baths
			location: { lat: -33.82201005407921, lng: 151.25346508008064 },
			content: `<h3>Balmoral Baths</h3>`,
		},
		{
			// Bilgola Rockpool
			location: { lat: -33.646011306811765, lng: 151.32722734429757 },
			content: `<h3>Bilgola Rockpool</h3>`,
		},
		{
			// Collaroy Rockpool
			location: { lat: -33.73356394045482, lng: 151.30462952667375 },
			content: `<h3>Collaroy Rockpool</h3>`,
		},
		{
			// Dee Why Rockpool
			location: { lat: -33.75495357633734, lng: 151.2990800842935 },
			content: `<h3>Dee Why Rockpool</h3>`,
		},
		{
			// Fairlight
			location: { lat: -33.798500579895574, lng: 151.27638287929017 },
			content: `<h3>Fairlight Tidal Pool</h3>`,
		},
		{
			// Fairy Bower Ocean Pool
			location: { lat: -33.80079120205697, lng: 151.29446634272404 },
			content: `<h3>Fairy Bower Ocean Pool</h3>`,
		},
		{
			// Freshwater
			location: { lat: -33.78154207435666, lng: 151.2947794985859 },
			imageIcon: {
				url: "https://img.icons8.com/ultraviolet/80/4a90e2/marker.png",
			},
			content: `<div>
		    <a href="http://www.wildswimmingaustralia.com/locations/freshwater-ocean-pool/" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Freshwater Ocean Pool<b></h2></a>
			<h3 style="font-size:1.1rem;">The first ocean pool to be opened in Sydney's Northern Beaches in 1925. Freshwater boasts a 50m pool in an ideal location.</h3>
			</div>
			<h3 style="color:#bf3648;">4 Lumsdaine Dr, Freshwater NSW 2096</h3>
			<div>
			<img src="../assets/media/NSW_freshwater.jpg" width="200" height="150">
			</div>`,
		},
		{
			// Maccullum Seawater Pool
			location: { lat: -33.843106899816384, lng: 151.23254559554508 },
			content: `<h3>Maccullum Seawater Pool</h3>`,
		},
		{
			// Mona Vale Rockpool
			location: { lat: -33.679290289461726, lng: 151.31389351183137 },
			content: `<h3>Mona Vale Rockpool</h3>`,
		},
		{
			// Newport
			location: { lat: -33.65701895814698, lng: 151.32274623657264 },
			content: `<h3>Newport</h3>`,
		},
		{
			// North Curl Curl
			location: { lat: -33.76749988885745, lng: 151.3018477998107 },
			content: `<h3>North Curl Curl </h3>`,
		},
		{
			// North Narrabeen
			location: { lat: -33.70338545942512, lng: 151.30931108147055 },
			content: `<h3>North Narrabeen</h3>`,
		},
		{
			// Palm Beach Rockpool
			location: { lat: -33.599725208861, lng: 151.3290467371505 },
			content: `<h3>Palm Beach Rockpool</h3>`,
		},
		{
			// Paradise Beach Baths
			location: { lat: -33.62365967757351, lng: 151.31900518243074 },
			content: `<h3>Paradise Beach Baths</h3>`,
		},
		{
			// Queenscliff Rockpool
			location: { lat: -33.78619715723261, lng: 151.28939903253854 },
			content: `<h3>Queenscliff Rockpool</h3>`,
		},
		{
			// South Curl Curl Rockpool
			location: { lat: -33.774447762524424, lng: 151.29350246897116 },
			content: `<h3>South Curl Curl Rockpool</h3>`,
		},
		{
			// Taylors Point Baths
			location: { lat: -33.63547966952564, lng: 151.30712827100257 },
			content: `<h3>Taylors Point Baths</h3>`,
		},
		{
			// Whale Beach Ocean Pool
			location: { lat: -33.61375915703364, lng: 151.33318362738808 },
			content: `<h3>Whale Beach Ocean Pool</h3>`,
		},

		//// Eastern Beaches ////
		{
			// Bondi Icebergs
			location: { lat: -33.8952, lng: 151.2745 },
			content: `<h3>Bondi Icebergs</h3>`,
		},
		{
			// North Bondi Childrens' Pool (Wally Weeks & Mermaid Pool)
			location: { lat: -33.890870850910126, lng: 151.2828383962746 },
			content: `<h3>North Bondi Childrens' Pool (Wally Weeks & Mermaid Pool)</h3>`,
		},
		{
			// Bronte Baths
			location: { lat: -33.90518336226847, lng: 151.2693380990867 },
			content: `<h3>Bronte Baths</h3>`,
		},
		{
			// Giles Baths
			location: { lat: -33.920004247964826, lng: 151.26092184921202 },
			content: `<h3>Giles Baths</h3>`,
		},
		{
			// Ivor Rowe Rockpool
			location: { lat: -33.93337574549712, lng: 151.26185565136623 },
			content: `<h3>Ivor Rowe Rockpool</h3>`,
		},
		{
			// Mahon Ocean Pool
			location: { lat: -33.94290747720461, lng: 151.26375156840868 },
			content: `<h3>Mahon Ocean Pool</h3>`,
		},
		{
			// Malabar Ocean Pool
			location: { lat: -33.968317224425775, lng: 151.25471339908356 },
			content: `<h3>Malabar Ocean Pool</h3>`,
		},
		{
			// McIver Baths
			location: { lat: -33.923984806797506, lng: 151.25872057065516 },
			content: `<h3>McIver Baths</h3>`,
		},
		{
			// Ross Jones Rockpool
			location: { lat: -33.92282354539231, lng: 151.25803020412556 },
			content: `<h3>Ross Jones Rockpool</h3>`,
		},
		{
			// Watson's Bay Baths
			location: { lat: -33.84267106610239, lng: 151.28259991079236 },
			content: `</h3>Watson's Bay Baths</h3>`,
		},
		{
			// Wylie's Baths
			location: { lat: -33.925453716510084, lng: 151.25941794502484 },
			content: `<h3>Wylie's Baths</h3>`,
		},

		//// Southern Beaches ////
		{
			// North Cronulla
			location: { lat: -34.05292734409442, lng: 151.1562812545879 },
			content: `<h3>North Cronulla</h3>`,
		},
		{
			// Oak Park Rockpool
			location: { lat: -34.070154930888094, lng: 151.15596443738463 },
			content: `<h3>Oak Park Rockpool</h3>`,
		},
		{
			//  Shelley Beach Ocean Pool
			location: { lat: -34.064612613473145, lng: 151.15577586502133 },
			content: `<h3> Shelley Beach Ocean Pool</h3>`,
		},
		{
			//  South Cronulla
			location: { lat: -34.053762151359855, lng: 151.15568501976688 },
			content: `<h3> South Cronulla</h3>`,
		},

		//// Illawara ////
		{
			// Austinmer
			location: { lat: -34.307852171885536, lng: 150.9352893069852 },
			content: `<h3> Austinmer</h3>`,
		},
		{
			// Bellambi
			location: { lat: -34.36594270310622, lng: 150.92427078811258 },
			content: `<h3> Bellambi</h3>`,
		},
		{
			// Bulgo Beach Pool
			location: { lat: -34.21686677728874, lng: 151.01112713537734 },
			content: `<h3> Bulgo Beach Pool</h3>`,
		},
		{
			//  Bulli Rockpool
			location: { lat: -34.33961377477255, lng: 150.92672035181008 },
			content: `<h3> Bulli Rockpool</h3>`,
		},
		{
			// Coalcliff Rockpool
			location: { lat: -34.2465431445343, lng: 150.97676622817653 },
			content: `<h3>Coalcliff Rockpool</h3>`,
		},
		{
			// Coledale Rockpool
			location: { lat: -34.291921770617215, lng: 150.9467890956899 },
			content: `<h3>Coledale Rockpool</h3>`,
		},
		{
			// Towradgi Rockpool
			location: { lat: -34.385969437405215, lng: 150.91550056546578 },
			content: `<h3>Towradgi Rockpool</h3>`,
		},
		{
			// Wombarra Rockpool
			location: { lat: -34.28020982901749, lng: 150.95613496790156 },
			content: `<h3>Wombarra Rockpool</h3>`,
		},
		{
			// Woonona Rockpool
			location: { lat: -34.34746779115992, lng: 150.92337237059448 },
			content: `<h3>Woonona Rockpool</h3>`,
		},

		//// South Coast ////
		{
			// Aslings Beach Rockpool
			location: { lat: -37.063035868022425, lng: 149.91064438055565 },
			content: `<h3>Aslings Beach Rockpool</h3>`,
		},

		//// Eurobodalla ////
		{
			// Bermagui Blue Pool
			location: { lat: -36.42952574456306, lng: 150.08399805784413 },
			imageIcon: {
				url: "https://img.icons8.com/ultraviolet/80/4a90e2/marker.png",
			},
			content: `<div>
		    <a href="https://www.sapphirecoast.com.au/point-of-interest/bermagui-blue-pool-2/" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Bermagui Blue Pool<b></h2></a>
			<h3 style="font-size:1.1rem;">The Blue Pool was built between 1936-1939. It has steps going down to the pool and it includes a 'big' pool and a 'little' pool. </h3>
			<h3 style="color:#bf3648;">Pacific Drive, Bermagui NSW 2546</h3>
			<img src="../assets/media/NSW_bermagui.jpg" width="200" height="100">
			</div>`,
		},
		{
			// Bruce Steer Ocean Pool
			location: { lat: -36.41503448435911, lng: 150.10298959565486 },
			content: `<h3>Bruce Steer Ocean Pool</h3>`,
		},
	];

	// Loop through markers
	for (let i = 0; i < MarkerArray.length; i++) {
		addMarker(MarkerArray[i]);
	}

	// Add all other NSW markers
	function addMarker(property) {
		var marker = new google.maps.Marker({
			position: property.location,
			map: map,
		});

		//Check for custom icon
		if (property.imageIcon) {
			//set icon
			marker.setIcon(property.imageIcon);
		}

		// Check for content to display info windows on markers
		if (property.content) {
			// Display Info Windows
			var detailWindow = new google.maps.InfoWindow({
				content: property.content,
				maxWidth: 200,
			});

			marker.addListener("click", () => {
				detailWindow.open(map, marker);
			});
		}
	}
}

// Set map to Queensland on button click
document.getElementById("categ-2").addEventListener("click", mapQLD);

function mapQLD() {
	var QLD = { lat: -22.993157431425242, lng: 145.44954722595563 };
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 6,
		center: QLD,
		mapId: "c43ed644e130993f",
	});

	// Add QLD Main Marker
	var marker = new google.maps.Marker({
		position: QLD,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: {
			url: "https://img.icons8.com/clouds/100/000000/outdoor-swimming-pool.png",
		},
	});

	// Add QLD markers to array
	let MarkerArray = [
		{
			location: { lat: -22.993157431425242, lng: 145.44954722595563 },
			imageIcon:
				"https://img.icons8.com/clouds/100/000000/outdoor-swimming-pool.png",
			content: `<h1>Queensland</h1><h3 style="font-size:1.2rem;">One would think Queensland would be home to a number of ocean pools with its abundance of stunning beaches, however this is sadly not the case. It really only has three recorded ocean baths, which include some interesting bayside pools. It should be noted that there are a number of 'ghost pools' located in Qld, however they are not located on this map.</h3>`,
		},
		{
			// Amity Point
			location: { lat: -27.40131056114682, lng: 153.43798942607484 },
			content: `<h3>Amity Point Swimming Enclosure, Stradbroke Island</h3>`,
		},
		{
			// Kings Beach
			location: { lat: -26.801393494570224, lng: 153.14868734840599 },
			imageIcon: {
				url: "https://img.icons8.com/ultraviolet/80/4a90e2/marker.png",
			},
			content: `
			<div>
			<a href="https://www.queensland.com/au/en/things-to-do/attractions/p-56b2616e2880253d74c49f3c-kings-beach-beachfront-salt-water-pool.html" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Kings Beach Saltwater Pool<b></h2></a>
			<h3 style="font-size:1.1rem;">Also known as the Sir Francis Nicklin Memorial Pool, it is situated on the Northern end of Kings Beach, near Caloundra. It features disabled access, lifeguard supervision in Summer and a spray park.</h3>
			</div>
			<h3 style="color:#bf3648;"> 36 Esplanade, Kings Beach QLD 4551</h3>
			<div>
			<img src="../assets/media/QLD_kingsbeach.jpeg" width="200" height="100">
			</div>
			<div><a href="https://www.queensland.com/us/en/things-to-do/attractions/p-56b2616e2880253d74c49f3c-kings-beach-beachfront-salt-water-pool.html" target="_blank">Image source</a>
			</div>
`,
		},
		{
			// Settlement Cove Lagoon, Redcliff
			location: { lat: -27.230421200258192, lng: 153.11704920675038 },
			content: `<h3>Settlement Cove Lagoon, Redcliff</h3>`,
		},
		{
			//Wynnum
			location: { lat: -27.4428, lng: 153.1774 },
			content: `<h3>Wynnyum Wading Pool</h3>`,
		},
	];

	// Loop through markers
	for (let i = 0; i < MarkerArray.length; i++) {
		addMarker(MarkerArray[i]);
	}

	// Add all other QLD markers
	function addMarker(property) {
		var marker = new google.maps.Marker({
			position: property.location,
			map: map,
			mapId: "c43ed644e130993f",
		});

		//Check for custom icon
		if (property.imageIcon) {
			//set icon
			marker.setIcon(property.imageIcon);
		}

		// Check for content to display info windows on markers
		if (property.content) {
			// Display Info Windows
			var detailWindow = new google.maps.InfoWindow({
				content: property.content,
				maxWidth: 200,
			});

			marker.addListener("click", () => {
				detailWindow.open(map, marker);
			});
		}
	}
}

// Set map to Western Australia on button click
document.getElementById("categ-3").addEventListener("click", mapWA);

function mapWA() {
	var WA = { lat: -26.40935212833484, lng: 122.01047659269663 };
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: WA,
		mapId: "c43ed644e130993f",
	});

	// Add WA Main Marker
	var marker = new google.maps.Marker({
		position: WA,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: {
			url: "https://img.icons8.com/clouds/100/000000/outdoor-swimming-pool.png",
		},
	});

	// Add WA markers to array
	let MarkerArray = [
		{
			location: { lat: -26.40935212833484, lng: 122.01047659269663 },
			imageIcon:
				"https://img.icons8.com/clouds/100/000000/outdoor-swimming-pool.png",
			content: `<h1>Western Australia</h1><h3 style="font-size:1.2rem;">Around Perth a couple of naturally occuring ocean pools can be found. In Western Australia there is impetus amongsht communities for ocean pools to be built. The town of Mosman Park, is set to be the location for Perth's first 'real' ocean pool.</h3>`,
		},
		{
			// Hamersley Pool
			location: { lat: -31.861981869909286, lng: 115.75220723068354 },
			content: `<h3>Hamersley Pool</h3>`,
		},
		{
			// Mettam's Pool
			location: { lat: -31.86365477683206, lng: 115.75195541521052 },
			imageIcon: {
				url: "https://img.icons8.com/ultraviolet/80/4a90e2/marker.png",
			},
			content: `
			<div>
		    <a href="https://visitperth.com/see-and-do/beaches/mettams-pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Mettam's Pool<b></h2></a>
			<h3 style="font-size:1.1rem;">A naturally formed lagoon due to a shallow reef (1.5m deep) that is crescent shaped. A popular spot for snorkelling and family outtings. The beach can be accessed by stairs and a ramp. It is not patrolled by Surf Lifesaving.</h3>
			</div>
			<h3 style="color:#bf3648;">West Coast Drive,
			North Beach, Perth, WA 6020</h3>
			<div>
			<img src="../assets/media/WA_mettams.jpeg" width="200" height="100">
			</div>
			<div><a href="https://visitperth.com/see-and-do/beaches/mettams-pool" target="_blank">Image source</a>
			</div>`,
		},
		{
			// Anastacia's Rock pool
			location: { lat: -17.972976736604696, lng: 122.1776284613671 },
			content: `<h3>Anastacia's Rock pool</h3>`,
		},
	];

	// Loop through markers
	for (let i = 0; i < MarkerArray.length; i++) {
		addMarker(MarkerArray[i]);
	}

	// Add all other WA markers
	function addMarker(property) {
		var marker = new google.maps.Marker({
			position: property.location,
			map: map,
			mapId: "c43ed644e130993f",
		});

		//Check for custom icon
		if (property.imageIcon) {
			//set icon
			marker.setIcon(property.imageIcon);
		}

		// Check for content to display info windows on markers
		if (property.content) {
			// Display Info Windows
			var detailWindow = new google.maps.InfoWindow({
				content: property.content,
				maxWidth: 200,
			});

			marker.addListener("click", () => {
				detailWindow.open(map, marker);
			});
		}
	}
}

// Set map to South Australia on button click
document.getElementById("categ-4").addEventListener("click", mapSA);

function mapSA() {
	var SA = { lat: -29.989723761048964, lng: 135.1682426288512 };
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: SA,
		mapId: "c43ed644e130993f",
	});

	// Add SA Main Marker
	var marker = new google.maps.Marker({
		position: SA,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: {
			url: "https://img.icons8.com/clouds/100/000000/outdoor-swimming-pool.png",
		},
	});

	// Add SA markers to array
	let MarkerArray = [
		{
			location: { lat: -29.989723761048964, lng: 135.1682426288512 },
			imageIcon:
				"https://img.icons8.com/clouds/100/000000/outdoor-swimming-pool.png",
			content: `
			<h1>South Australia</h1><h3 style="font-size:1.2rem;">Some gorgeous spots can be found along the South Australian coastline. The ocean pools generally feature swimming enclosures, often built alongside jetties.</h3>`,
		},
		{
			// Edithburgh Tidal Pool
			location: { lat: -35.066811176580934, lng: 137.76212769246703 },
			content: `<h3>Edithburgh Tidal Pool</h3>`,
		},
		{
			// Kingcote Tidal Pool
			location: { lat: -35.647671468407204, lng: 137.73531949402707 },
			content: `<h3>Kingcote Tidal Pool</h3>`,
		},
		{
			// Moonta Bay Seawater Pool
			location: { lat: -34.05228960265014, lng: 137.55847902686108 },
			content: `<h3>Moonta Bay Seawater Pool</h3>`,
		},
		{
			// Streaky Bay Swimming Enclosure
			location: { lat: -32.79299652662819, lng: 134.21424084507686 },
			imageIcon: {
				url: "https://img.icons8.com/ultraviolet/80/4a90e2/marker.png",
			},
			content: `
			<div>
		    <a href="https://streakybay.com.au/explore/attractions-activities/cycle-swim-get-fit/" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Streaky Bay Swimming Enclosure<b></h2></a>
			<h3 style="font-size:1.1rem;">The Streaky Bay jetty was built between 1891 and 1896. In 1936, the pool was added alongside the 300m jetty. Shark proofing the pool was a necessary addition after a 2.7m shark was caught off the jetty! </h3>
			</div>
			<h3 style="color:#bf3648;">36 Alfred Terrace, Streaky Bay SA 5680</h3>
			<div>
			<img src="../assets/media/SA_streakybay.jpg" width="200" height="100">
			</div>
			<div><a href="https://streakybay.com.au/explore/attractions-activities/cycle-swim-get-fit/" target="_blank">Image source</a>
			</div>`,
		},
		{
			// Smoky Bay Jetty Swimming Enclosure
			location: { lat: -32.378470801435626, lng: 133.9343639553862 },
			content: `<h3>Smoky Bay Jetty Swimming Enclosure</h3>`,
		},
		{
			// Port Lincoln Foreshore Swimming Enclosure
			location: { lat: -34.71836710674295, lng: 135.8592934091666 },
			content: `<h3>Port Lincoln Foreshore Swimming Enclosure</h3>`,
		},
	];

	// Loop through markers
	for (let i = 0; i < MarkerArray.length; i++) {
		addMarker(MarkerArray[i]);
	}

	// Add all other SA markers
	function addMarker(property) {
		var marker = new google.maps.Marker({
			position: property.location,
			map: map,
			mapId: "c43ed644e130993f",
		});

		//Check for custom icon
		if (property.imageIcon) {
			//set icon
			marker.setIcon(property.imageIcon);
		}

		// Check for content to display info windows on markers
		if (property.content) {
			// Display Info Windows
			var detailWindow = new google.maps.InfoWindow({
				content: property.content,
				maxWidth: 200,
			});

			marker.addListener("click", () => {
				detailWindow.open(map, marker);
			});
		}
	}
}

// Set map to Victoria on button click
document.getElementById("categ-5").addEventListener("click", mapVIC);

function mapVIC() {
	var VIC = { lat: -36.99060802458916, lng: 143.81059294870514 };
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: VIC,
		mapId: "c43ed644e130993f",
	});

	// Add VIC Marker
	var marker = new google.maps.Marker({
		position: VIC,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: {
			url: "https://img.icons8.com/clouds/100/000000/outdoor-swimming-pool.png",
		},
	});

	// Add VIC markers to array
	let MarkerArray = [
		{
			location: { lat: -36.99060802458916, lng: 143.81059294870514 },
			imageIcon:
				"https://img.icons8.com/clouds/100/000000/outdoor-swimming-pool.png",
			content: `
			<h1>Victoria</h1><h3 style="font-size:1.2rem;">Info still to come...</h3>`,
		},
		{
			// Brighton Baths
			location: { lat: -37.91003555371571, lng: 144.9855731496029 },
			imageIcon: {
				url: "https://img.icons8.com/ultraviolet/80/4a90e2/marker.png",
			},
			content: `
			<div>
		    <a href="https://brightonbathshealthclub.com.au/about/" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Brighton Baths<b></h2></a>
			<h3 style="font-size:1.1rem;">The iconic Brighton Sea Baths date back to the 1880's. Sadly the original baths were wrecked by a storm in 1934, but rebuilt again in 1936. They are famous for their olympic sized sea baths as well as being the home base for the orignal 'winter swimmers', the Icebergers.</h3>
			</div>
			<h3 style="color:#bf3648;">36 Alfred Terrace, Streaky Bay SA 5680</h3>
			<div>
			<img src="../assets/media/VIC_brighton.jpeg" width="200" height="100">
			</div>
			<div><a href="https://www.swimmersdaily.com/2020/10/25/what-its-like-to-swim-at-the-brighton-baths/" target="_blank">Image source</a>
			</div>
			`,
		},
	];

	// Loop through markers
	for (let i = 0; i < MarkerArray.length; i++) {
		addMarker(MarkerArray[i]);
	}

	// Add all other VIC markers
	function addMarker(property) {
		var marker = new google.maps.Marker({
			position: property.location,
			map: map,
			mapId: "c43ed644e130993f",
		});

		//Check for custom icon
		if (property.imageIcon) {
			//set icon
			marker.setIcon(property.imageIcon);
		}

		// Check for content to display info windows on markers
		if (property.content) {
			// Display Info Windows
			var detailWindow = new google.maps.InfoWindow({
				content: property.content,
				maxWidth: 200,
			});

			marker.addListener("click", () => {
				detailWindow.open(map, marker);
			});
		}
	}
}

// Set map to Northern Territory on button click
document.getElementById("categ-6").addEventListener("click", mapNT);

function mapNT() {
	var NT = { lat: -19.535990044685192, lng: 133.37768771047277 };
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: NT,
		mapId: "c43ed644e130993f",
	});

	// Add NT Main Marker
	var marker = new google.maps.Marker({
		position: NT,
		map: map,
		animation: google.maps.Animation.DROP,
		icon: {
			url: "https://img.icons8.com/clouds/100/000000/outdoor-swimming-pool.png",
		},
	});

	// Add NT markers to array
	let MarkerArray = [
		{
			location: { lat: -19.535990044685192, lng: 133.37768771047277 },
			imageIcon:
				"https://img.icons8.com/clouds/100/000000/outdoor-swimming-pool.png",
			content: `<h1>Northern Territory</h1><h3 style="font-size:1.2rem;">Info still to come...</h3>`,
		},
		{
			// Darwin Recreation Lagoon
			location: { lat: -12.467599383752788, lng: 130.85195891870976 },
			imageIcon: {
				url: "https://img.icons8.com/ultraviolet/80/4a90e2/marker.png",
			},
			content: `
			<div>
		    <a href="https://www.waterfront.nt.gov.au/recreation-lagoon" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Darwin Recreation Lagoon<b></h2></a>
			<h3 style="font-size:1.1rem;">The Darwin Lagoon, advertised as <i>Darwin's safest beach</i> is adjacent to the Darwin Harbour and protected by a sea wall and stinger/shark/crocodile net. Other features include a wave pool, lifeguard patrol and disability access.</h3>
			</div>
			<h3 style="color:#bf3648;">Darwin Waterfont Precinct Recreational Lagoon, Kitchener Dr, Darwin City NT 0800</h3>
			<div>
			<img src="../assets/media/NT_darwin.jpeg" width="200" height="100">
			</div>
			<div><a href="https://www.davidwallphoto.com/detail/15499-Recreation-Lagoon,-Darwin-Waterfront-Precinct,-Darwin,-Northern-Territory,-Australia.html" target="_blank">Image source</a>
			</div>`,
		},
	];

	// Loop through markers
	for (let i = 0; i < MarkerArray.length; i++) {
		addMarker(MarkerArray[i]);
	}

	// Add all other NT markers
	function addMarker(property) {
		var marker = new google.maps.Marker({
			position: property.location,
			map: map,
			mapId: "c43ed644e130993f",
		});

		//Check for custom icon
		if (property.imageIcon) {
			//set icon
			marker.setIcon(property.imageIcon);
		}

		// Check for content to display info windows on markers
		if (property.content) {
			// Display Info Windows
			var detailWindow = new google.maps.InfoWindow({
				content: property.content,
				maxWidth: 200,
			});

			marker.addListener("click", () => {
				detailWindow.open(map, marker);
			});
		}
	}
}
