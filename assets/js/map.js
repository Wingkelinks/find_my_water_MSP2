// Resources referenced for map integration:
// Code Institute course material,
// Sam Codes - JS Google Maps API Tutorial: https://www.youtube.com/watch?v=uPhWSyRqQDA&t=2597s,
// Google Maps API documentation
// Change marker icon: https://icons8.com/

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (88px out of the top view)

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
document
	.getElementById("categ-1")
	.addEventListener("click", mapNSW, scrollFunction);

function scrollFunction() {
	// Make map scroll into view on button click
	map.scrollIntoView();
}

function mapNSW() {
	var NSW = { lat: -32.63995735777177, lng: 146.131786144861 };
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
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
			content: `
			<a href="https://www.visitnsw.com/destinations/north-coast/clarence-valley/yamba/attractions/angourie-blue-and-green-pools" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Angourie Blue Pool<b></h2></a>
			<h3 style="color:#bf3648;">The Crescent, Angourie NSW 2464</h3>`,
		},
		{
			// Blackhead
			location: { lat: -32.0707, lng: 152.5442 },
			imageIcon: {
				url: "https://img.icons8.com/ultraviolet/80/4a90e2/marker.png",
			},
			content: `

			<div>
			<a href="https://allintooceanpoolsinc.org/ocean-pools/black-head-rock-pool/" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Blackhead Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">Main St, Black Head NSW 2430</h3>
			<div style="font-size:1rem;">
			<p>Open: 24hrs</p>
			<p>Admission: free</p>
			<p>Built: 1940</p>
			Features:
			<ul>
			<li>30m pool</li>
			<li>Wading pool</li>
			</ul>
			</div>
			</div>
			<div>
			<img src="assets/media/NSW_black_head.jpg" width="200" height="100">
			</div>
			<div><a href="https://coastbeat.com.au/ocean-pools-of-the-nsw-north-coast/" target="_blank">Image source</a>
			</div>`,
		},
		{
			// Forster Ocean Baths
			location: { lat: -32.179053928167896, lng: 152.51468527487043 },
			content: `
			<a href="https://oceanpoolsnsw.net.au/forster-ocean-baths-forster-nsw-2428/" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Forster Ocean Baths<b></h2></a>
			<h3 style="color:#bf3648;">North St, Forster NSW 2428</h3>`,
		},
		{
			// Sawtell Memorial Pool
			location: { lat: -30.376568392884632, lng: 153.10146327932551 },
			content: `
			<a href="https://oceanpoolsnsw.net.au/sawtell-memorial-pool-sawtell-nsw/" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Sawtell Memorial Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">Boronia St, Sawtell NSW 2452</h3>`,
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
			<h3 style="font-size:1.1rem;">Yamba's ocean pool is the northernmost along the NSW coast.</h3>
			<h3 style="color:#bf3648;">Marine Parade, Yamba NSW 2464</h3>
			<div style="font-size:1rem;">
			<p>Open: 24hrs</p>
			<p>Admission: free</p>
			<p>Built: 1969</p>
			Features:
			<ul>
			<li>33m pool</li>
			<li>Ablutions</li>
			</ul>
			</div>
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
			content: `
			<a href="https://newcastle.nsw.gov.au/explore/recreation/beaches-and-baths/ocean-baths" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Newcastle Ocean Baths<b></h2></a>
			<h3 style="color:#bf3648;">30 Shortland Esplanade, Newcastle NSW 2300</h3>`,
		},
		{
			// Bogey Hole, Newcastle
			location: { lat: -32.93511581377122, lng: 151.7816812360391 },
			content: `
			<a href="https://www.visitnsw.com/destinations/north-coast/newcastle-area/newcastle/attractions/bogey-hole" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Bogey Hole, Newcastle<b></h2></a>
			<h3 style="color:#bf3648;">Shortland Esplanade, Newcastle NSW 2300</h3>`,
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
			<h3 style="font-size:1.1rem;">The largest ocean pools in the Southern Hemisphere!</h3>
			<h3 style="color:#bf3648;">3a Ocean St, Merewether NSW 2291</h3>
			<div style="font-size:1rem;">
			<p>Open: 24hrs<a href="https://newcastle.nsw.gov.au/explore/recreation/beaches-baths/ocean-baths" target="_blank" style="color:#bf36b8;"> (subject to cleaning)</a href></p>
			<p>Admission: free</p>
			<p>Built: 1935</p>
			Features:
			<ul>
			<li>Main pool: 50m x 100m </li>
			<li>Childrens pool: 35m x 100m </li>
			<li>Ablutions</li>
			</ul>
			Swimming Clubs:
			<ul>
			<li>Merewether Mackerels</li>
			<li>Dixon Park Coldies</li>
			</ul>
			</div>
			</div>
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
			content: `
			<a href="https://www.visitnsw.com/destinations/central-coast/wyong-area/the-entrance/attractions/the-entrance-ocean-baths" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>The Entrance Ocean Baths<b></h2></a>
			<h3 style="color:#bf3648;">88 Ocean Parade, The Entrance NSW 2261</h3>
			`,
		},
		{
			// Terrigal Rock Pool
			location: { lat: -33.447793876288536, lng: 151.4472353024432 },
			content: `
			<a href="https://oceanpoolsnsw.net.au/terrigal-rock-pool-terrigal-nsw-2260/" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Terrigal Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">Terrigal Esplanade, Terrigal NSW 2260</h3>`,
		},
		{
			// MacMasters Beach Rock Pool
			location: { lat: -33.5009051323597, lng: 151.42613018404592 },
			content: `
			<a href="https://oceanpoolsnsw.net.au/macmasters-beach-rock-pool-nsw-2251/" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>MacMasters Beach Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">Macmasters Beach NSW 2251</h3>`,
		},
		{
			// Pearl Beach Rockpool
			location: { lat: -33.54577138713682, lng: 151.30921556128678 },
			content: `
			<a href="https://oceanpoolsnsw.net.au/pearl-beach-rock-pool-pearl-beach-nsw-2256/" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Pearl Beach Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">Green Point Rd, Pearl Beach NSW 2256</h3>
			`,
		},

		//// Northern Beaches ////
		{
			// Avalon
			location: { lat: -33.637400331980764, lng: 151.3320275499997 },
			content: `
			
			<a href="https://www.northernbeaches.nsw.gov.au/things-to-do/recreation-area/avalon-rockpool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Avalon Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">Surfside Ave, Avalon Beach NSW 2107</h3>`,
		},
		{
			// Balmoral Baths
			location: { lat: -33.82201005407921, lng: 151.25346508008064 },
			content: `
			<a href="https://oceanpoolsnsw.net.au/balmoral-baths-balmoral-nsw-2088/" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Balmoral Baths<b></h2></a>
			<h3 style="color:#bf3648;">Balmoral, Mosman NSW 2088</h3>`,
		},
		{
			// Bilgola Rockpool
			location: { lat: -33.646011306811765, lng: 151.32722734429757 },
			content: `
			<a href="https://www.northernbeaches.nsw.gov.au/things-to-do/recreation-area/bilgola-rockpool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Bilgola Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">1 The Serpentine, Bilgola Beach NSW 2107</h3>`,
		},
		{
			// Collaroy Rockpool
			location: { lat: -33.73356394045482, lng: 151.30462952667375 },
			content: `
			<a href="https://www.northernbeaches.nsw.gov.au/things-to-do/recreation-area/collaroy-rockpool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Collaroy Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">Beach Rd, Collaroy NSW 2097</h3>
			`,
		},
		{
			// Dee Why Rockpool
			location: { lat: -33.75495357633734, lng: 151.2990800842935 },
			content: `
			<a href="https://www.northernbeaches.nsw.gov.au/things-to-do/recreation-area/dee-why-rockpool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Collaroy Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">Oaks Ave, Dee Why NSW 2099</h3>
			`,
		},
		{
			// Fairlight
			location: { lat: -33.798500579895574, lng: 151.27638287929017 },
			content: `
			<a href="https://www.northernbeaches.nsw.gov.au/things-to-do/recreation-area/fairlight-rockpool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Fairlight Tidal Pool<b></h2></a>
			<h3 style="color:#bf3648;">Fairlight Walk, Fairlight NSW 2093</h3>`,
		},
		{
			// Fairy Bower Ocean Pool
			location: { lat: -33.80079120205697, lng: 151.29446634272404 },
			content: `
			<a href="https://www.northernbeaches.nsw.gov.au/things-to-do/recreation-area/fairy-bower-rockpool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Fairy Bower Ocean Pool<b></h2></a>
			<h3 style="color:#bf3648;">5B Marine Parade, Manly NSW 2095</h3>`,
		},
		{
			// Freshwater
			location: { lat: -33.78154207435666, lng: 151.2947794985859 },
			imageIcon: {
				url: "https://img.icons8.com/ultraviolet/80/4a90e2/marker.png",
			},
			content: `<div>
		    <a href="http://www.wildswimmingaustralia.com/locations/freshwater-ocean-pool/" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Freshwater Ocean Pool<b></h2></a>
			<h3 style="font-size:1.1rem;">The first ocean pool to be opened in Sydney's Northern Beaches.</h3>
			<h3 style="color:#bf3648;">4 Lumsdaine Dr, Freshwater NSW 2096</h3>
			<div style="font-size:1rem;">
			<p>Open: 24hrs<a href="https://www.northernbeaches.nsw.gov.au/things-to-do/recreation-area/freshwater-rockpool" target="_blank" style="color:#bf36b8;"> (subject to cleaning)</a href></p>
			<p>Admission: free</p>
			<p>Built: 1925</p>
			Features:
			<ul>
			<li>50m pool </li>
			<li>Ablutions</li>
			<li>Ramp access</li>
			</ul>
			Swimming Clubs:
			<ul>
			<li>Freshwater Amaateur Swimming Club</li>
			</ul>
			</div>

			</div>
			
			<div>
			<img src="assets/media/NSW_freshwater.jpg" width="200" height="150">
			</div>`,
		},
		{
			// Maccullum Seawater Pool
			location: { lat: -33.843106899816384, lng: 151.23254559554508 },
			content: `
			<a href="https://www.northsydney.nsw.gov.au/Recreation_Facilities/Places_of_Interest/Maccallum_Pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Maccullum Seawater Pool<b></h2></a>
			<h3 style="color:#bf3648;">Milson Rd, Cremorne Point NSW 2090</h3>`,
		},
		{
			// Mona Vale Rockpool
			location: { lat: -33.679290289461726, lng: 151.31389351183137 },
			content: `
			<a href="https://www.northernbeaches.nsw.gov.au/things-to-do/recreation-area/mona-vale-rockpool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Mona Vale Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">Surfview Rd, Mona Vale NSW 2103</h3>`,
		},
		{
			// Newport
			location: { lat: -33.65701895814698, lng: 151.32274623657264 },
			content: `
			<a href="https://www.northernbeaches.nsw.gov.au/things-to-do/recreation-area/newport-rockpool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Newport Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">Calvert Parade, Newport NSW 2106</h3>`,
		},
		{
			// North Curl Curl
			location: { lat: -33.76749988885745, lng: 151.3018477998107 },
			content: `
			<a href="https://www.northernbeaches.nsw.gov.au/things-to-do/recreation-area/north-curl-curl-rockpool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>North Curl Curl Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">Huston Parade, North Curl Curl NSW 2099</h3>`,
		},
		{
			// North Narrabeen
			location: { lat: -33.70338545942512, lng: 151.30931108147055 },
			content: `
			<a href="https://www.northernbeaches.nsw.gov.au/things-to-do/recreation-area/north-narrabeen-rockpool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>North Narrabeen Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">Narrabeen Park Parade, North Narrabeen NSW 2101</h3>`,
		},
		{
			// Palm Beach Rockpool
			location: { lat: -33.599725208861, lng: 151.3290467371505 },
			content: `<h3>Palm Beach Rockpool</h3>
			<a href="https://www.northernbeaches.nsw.gov.au/things-to-do/recreation-area/palm-beach-rockpool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Palm Beach Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">LOT 1 Rock Bath Rd, Palm Beach NSW 2108</h3>`,
		},
		{
			// Paradise Beach Baths
			location: { lat: -33.62365967757351, lng: 151.31900518243074 },
			content: `
			<a href="https://www.northernbeaches.nsw.gov.au/things-to-do/recreation-area/paradise-beach" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Palm Beach Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">LOT 7310 Paradise Ave, Avalon Beach NSW 2107</h3>`,
		},
		{
			// Queenscliff Rockpool
			location: { lat: -33.78619715723261, lng: 151.28939903253854 },
			content: `
			<a href="https://www.northernbeaches.nsw.gov.au/things-to-do/recreation-area/queenscliff-rockpool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Queenscliff Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">2096 N Steyne, Queenscliff NSW 2095</h3>`,
		},
		{
			// South Curl Curl Rockpool
			location: { lat: -33.774447762524424, lng: 151.29350246897116 },
			content: `
			<a href="https://www.northernbeaches.nsw.gov.au/things-to-do/recreation-area/south-curl-curl-rockpool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>South Curl Curl Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">Carrington Parade, Curl Curl NSW 2096</h3>`,
		},
		{
			// Taylors Point Baths
			location: { lat: -33.63547966952564, lng: 151.30712827100257 },
			content: `
			<a href="https://www.northernbeaches.nsw.gov.au/things-to-do/recreation-area/taylors-point-baths" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Taylors Point Baths<b></h2></a>
			<h3 style="color:#bf3648;">164 Hudson Parade, Clareville NSW 2107</h3>`,
		},
		{
			// Whale Beach Ocean Pool
			location: { lat: -33.61375915703364, lng: 151.33318362738808 },
			content: `
			<a href="https://www.northernbeaches.nsw.gov.au/things-to-do/recreation-area/whale-beach-rockpool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Whale Beach Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">17 Malo Rd, Whale Beach NSW 2107</h3>`,
		},

		//// Eastern Beaches ////
		{
			// Bondi Icebergs
			location: { lat: -33.8952, lng: 151.2745 },
			imageIcon: {
				url: "https://img.icons8.com/ultraviolet/80/4a90e2/marker.png",
			},
			content: `<div>
		    <a href="https://icebergs.com.au/swimming-pool/pool-sauna/ target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Bondi Icebergs Pool<b></h2></a>
			<h3 style="font-size:1.1rem;">Arguably one of the most famous ocean pools in the world.</h3>
			<h3 style="color:#bf3648;">1 Notts Ave, Bondi Beach NSW 2026</h3>
			<div style="font-size:1rem;">
			Opening Hours:
			<ul>
			<li>Mon, Tue ,Wed, Fri: 6am – 6:30pm</li>
			<li>Thursday: closed for cleaning.</li>
			<li>Sat & Sun: 6.30am – 6:30pm</li>
			</ul>
			<p>Admission: $ Bondi Iceberg Club Prices</p>
			<p>Built: 1929</p>
			Features:
			<ul>
			<li>Main pool: 50m </li>
			<li>Children's pool: 25m </li>
			<li>Ablutions</li>
			<li>Lifeguard Supervision</li>
			</ul>
			Swimming Clubs:
			<ul>
			<li>Bondi Icebergs</li>
			<li>Bondi Icecubes Junior Club</li>
			</ul>
			</div>

			</div>
			
			<div>
			<img src="assets/media/NSW_bondi_icebergs3.jpg" width="200" height="150">
			</div>`,
		},
		{
			// North Bondi Childrens' Pool (Wally Weeks & Mermaid Pool)
			location: { lat: -33.890870850910126, lng: 151.2828383962746 },
			content: `
			<a href="https://allintooceanpoolsinc.org/ocean-pools/north-bondi-childrens-pool-%E2%80%A8mermaid-pool-mermaid-baths/" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>North Bondi Childrens' Pool (Wally Weekes & Mermaid Pool)<b></h2></a>
			<h3 style="color:#bf3648;">65 Ramsgate Ave, North Bondi NSW 2026</h3>`,
		},
		{
			// Bronte Baths
			location: { lat: -33.90518336226847, lng: 151.2693380990867 },
			imageIcon: {
				url: "https://img.icons8.com/ultraviolet/80/4a90e2/marker.png",
			},
			content: `<div>
		    <a href="https://wanderersandwarriors.com/bronte-baths-sydney/ target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Bronte Baths<b></h2></a>
			<h3 style="font-size:1.1rem;">There are claims that the "Australian Crawl" (freestyle), was made famous in the Bronte pool.</h3>
			<h3 style="color:#bf3648;">Bronte Park, Bronte NSW 2024</h3>
			<div style="font-size:1rem;">
			<p>Open: 24hrs</p>
			<p>Admission: Free</p>
			<p>Built: late 1880's</p>
			Features:
			<ul>
			<li>30m pool</li>
			<li>Children's pool</li>
			<li>Ablutions</li>
			</ul>
			</div>

			</div>
			
			<div>
			<img src="assets/media/NSW_bronte_baths.jpg" width="200" height="150">
			</div>`,
		},
		{
			// Giles Baths
			location: { lat: -33.920004247964826, lng: 151.26092184921202 },
			content: `
			<a href="https://www.randwick.nsw.gov.au/facilities-and-recreation/beaches-and-coast/ocean-pools/giles-baths" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Giles Baths<b></h2></a>
			<h3 style="color:#bf3648;">105-109R Beach St, Coogee NSW 2034</h3>`,
		},
		{
			// Ivor Rowe Rockpool
			location: { lat: -33.93337574549712, lng: 151.26185565136623 },
			content: `
			<a href="https://www.randwick.nsw.gov.au/facilities-and-recreation/beaches-and-coast/ocean-pools/ivor-rowe-rockpool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Ivor Rowe Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">1 Bunya Parade, South Coogee NSW 2034</h3>`,
		},
		{
			// Mahon Ocean Pool
			location: { lat: -33.94290747720461, lng: 151.26375156840868 },
			content: `
			<a href="https://www.randwick.nsw.gov.au/facilities-and-recreation/beaches-and-coast/ocean-pools/mahon-pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Mahon Ocean Pool<b></h2></a>
			<h3 style="color:#bf3648;">15R Marine Parade, Maroubra NSW 2035</h3>`,
		},
		{
			// Malabar Ocean Pool
			location: { lat: -33.968317224425775, lng: 151.25471339908356 },
			content: `
			<a href="https://www.randwick.nsw.gov.au/facilities-and-recreation/beaches-and-coast/ocean-pools/malabar-ocean-pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Malabar Ocean Pool<b></h2></a>
			<h3 style="color:#bf3648;">Bay Parade, Malabar NSW 2036</h3>`,
		},
		{
			// McIver Baths
			location: { lat: -33.923984806797506, lng: 151.25872057065516 },
			content: `
			<a href="https://www.randwick.nsw.gov.au/facilities-and-recreation/beaches-and-coast/ocean-pools/mcivers-ladies-baths" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>McIver Baths<b></h2></a>
			<h3 style="color:#bf3648;">145-149R Beach St, Coogee NSW 2034</h3>`,
		},
		{
			// Ross Jones Rockpool
			location: { lat: -33.92282354539231, lng: 151.25803020412556 },
			content: `
			<a href="https://www.randwick.nsw.gov.au/facilities-and-recreation/beaches-and-coast/ocean-pools/ross-jones-memorial-pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Ross Jones Memorial Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">133R Beach St, Coogee NSW 2034</h3>`,
		},
		{
			// Watson's Bay Baths
			location: { lat: -33.84267106610239, lng: 151.28259991079236 },
			content: `
			<a href="https://www.woollahra.nsw.gov.au/recreation/parks,_reserves_and_playgrounds/list_of_parks_and_playgrounds/parks_and_playgrounds/watson_bay_baths" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Watson's Bay Baths<b></h2></a>
			<h3 style="color:#bf3648;">Marine Parade, Watsons Bay NSW 2030</h3>`,
		},
		{
			// Wylie's Baths
			location: { lat: -33.925453716510084, lng: 151.25941794502484 },
			content: `
			<a href="https://www.randwick.nsw.gov.au/facilities-and-recreation/beaches-and-coast/ocean-pools/wylies-baths" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Wylie's Baths<b></h2></a>
			<h3 style="color:#bf3648;">4B Neptune St, Coogee NSW 2034</h3>`,
		},

		//// Southern Beaches ////
		{
			// North Cronulla
			location: { lat: -34.05292734409442, lng: 151.1562812545879 },
			content: `
			<a href="https://www.sydney.com/destinations/sydney/sydney-south/cronulla/attractions/north-cronulla-rock-pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>North Cronulla Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">Kingsway, Cronulla NSW 2230</h3>`,
		},
		{
			// Oak Park Rockpool
			location: { lat: -34.070154930888094, lng: 151.15596443738463 },
			content: `
			<a href="http://www.sutherlandshire.nsw.gov.au/Outdoors/Beaches/Beach-Locations/Oak-Park-Beach-Cronulla" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Oak Park Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">Kingsway, Cronulla NSW 2230</h3>`,
		},
		{
			//  Shelly Beach Ocean Pool
			location: { lat: -34.064612613473145, lng: 151.15577586502133 },
			content: `<a href="http://www.sutherlandshire.nsw.gov.au/Outdoors/Beaches/Beach-Locations/Shelly-Park-Beach-Cronulla" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Shelly Beach Ocean Pools<b></h2></a>
			<h3 style="color:#bf3648;">63-66 The Esplanade, Cronulla NSW 2230</h3>`,
		},
		{
			//  South Cronulla
			location: { lat: -34.053762151359855, lng: 151.15568501976688 },
			content: `<a href="https://www.sutherlandshire.nsw.gov.au/Outdoors/Foreshore-Facilities/Tidal-Baths-and-Rock-Pools/2021-Maintenance-Closure-Dates-for-Cronulla-Beach-Ocean-Pool-South-Cronulla" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>South Cronulla Beach Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">Kingsway, Cronulla NSW 2230</h3>`,
		},

		//// Illawara ////
		{
			// Austinmer
			location: { lat: -34.307852171885536, lng: 150.9352893069852 },
			content: `
			<a href="https://www.wollongong.nsw.gov.au/explore/our-pools/pools/rockpools/austinmer-rock-pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Austinmer Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">135 Lawrence Hargrave Dr, Austinmer NSW 2515</h3>`,
		},
		{
			// Bellambi
			location: { lat: -34.36594270310622, lng: 150.92427078811258 },
			content: `
			<a href="https://www.wollongong.nsw.gov.au/explore/our-pools/pools/rockpools/bellambi-rock-pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Bellambi Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">29 Pembroke Mews, Bellambi NSW 2518</h3>`,
		},
		{
			// Bulgo Beach Pool
			location: { lat: -34.21686677728874, lng: 151.01112713537734 },
			content: `
			<a href="https://oceanpoolsnsw.net.au/bulgo-pool-bulgo-near-otford-nsw-2508/" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Bulgo Beach Pool<b></h2></a>
			<h3 style="color:#bf3648;">Bulgo, near Otford, NSW 2508</h3>`,
		},
		{
			//  Bulli Rockpool
			location: { lat: -34.33961377477255, lng: 150.92672035181008 },
			content: `
			<a href="https://www.wollongong.nsw.gov.au/explore/our-pools/pools/rockpools/bulli-rock-pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Bulli Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">LOT 68 Trinity Row, Bulli NSW 2516</h3>
			`,
		},
		{
			// Coalcliff Rockpool
			location: { lat: -34.2465431445343, lng: 150.97676622817653 },
			content: `
			<a href="https://www.wollongong.nsw.gov.au/explore/our-pools/pools/rockpools/coalcliff-rock-pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Coalcliff Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">Paterson Rd, Coalcliff NSW 2508</h3>`,
		},
		{
			// Coledale Rockpool
			location: { lat: -34.291921770617215, lng: 150.9467890956899 },
			content: `
			<a href="https://wollongong.nsw.gov.au/explore/our-pools/pools/rockpools/coledale-rock-pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Coledale Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">2 Cater St, Coledale NSW 2515</h3>`,
		},
		{
			// Towradgi Rockpool
			location: { lat: -34.385969437405215, lng: 150.91550056546578 },
			content: `
			<a href="https://wollongong.nsw.gov.au/explore/our-pools/pools/rockpools/towradgi-rock-pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Towradgi Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">LOT 113 Towradgi Rd, Towradgi NSW 2518</h3>`,
		},
		{
			// Wombarra Rockpool
			location: { lat: -34.28020982901749, lng: 150.95613496790156 },
			content: `
			<a href="https://wollongong.nsw.gov.au/explore/our-pools/pools/rockpools/wombarra-rock-pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Wombarra Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">Reef Ave, Wombarra NSW 2515</h3>`,
		},
		{
			// Woonona Rockpool
			location: { lat: -34.34746779115992, lng: 150.92337237059448 },
			content: `
			<a href="https://wollongong.nsw.gov.au/explore/our-pools/pools/rockpools/woonona-rock-pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Woonona Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">LOT 116 Kurraba Rd, Woonona NSW 2517</h3>`,
		},

		//// South Coast ////
		{
			// Aslings Beach Rockpool
			location: { lat: -37.063035868022425, lng: 149.91064438055565 },
			content: `
			<a href="https://www.visitnsw.com/destinations/south-coast/merimbula-and-sapphire-coast/eden/attractions/aslings-beach-rock-pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Aslings Beach Rock Pool<b></h2></a>
			<h3 style="color:#bf3648;">Eden, NSW 2551</h3>`,
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
			<h3 style="font-size:1.1rem;"> The famous Blue Pool counts as a 'must-see' Sapphire Coast attraction. </h3>
			<h3 style="color:#bf3648;">Pacific Drive, Bermagui NSW 2546</h3>
			<div style="font-size:1rem;">
			<p>Open: 24hrs</p>
			<p>Admission: free</p>
			<p>Built: 1936-1939</p>
			Features:
			<ul>
			<li>Approx 50m pool </li>
			<li>Ablutions</li>
			<li>Step access</li>
			<li>Scenic lookout</li>
			</ul>
			</div>

			<img src="assets/media/NSW_bermagui.jpg" width="200" height="100">
			</div>`,
		},
		{
			// Bruce Steer Ocean Pool
			location: { lat: -36.41503448435911, lng: 150.10298959565486 },
			content: `
			<a href="https://www.visitnsw.com/destinations/south-coast/merimbula-and-sapphire-coast/bermagui/attractions/bruce-steer-pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Bruce Steer Ocean Swimming Pool<b></h2></a>
			<h3 style="color:#bf3648;">River, Bermagui NSW</h3>`,
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
document
	.getElementById("categ-2")
	.addEventListener("click", mapQLD, scrollFunction);

function scrollFunction() {
	map.scrollIntoView();
}

function mapQLD() {
	var QLD = { lat: -22.993157431425242, lng: 145.44954722595563 };
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
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
			content: `
			<a href="https://stradbrokeisland.com/tour-item/amity-enclosure/" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Amity Point Swimming Enclosure<b></h2></a>
			<h3 style="color:#bf3648;">Amity Point, Stradbroke Isalnd, QLD 4183</h3>`,
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
			<h3 style="color:#bf3648;"> 36 Esplanade, Kings Beach QLD 4551</h3>
			<div style="font-size:1rem;">
			Opening hours: <ul><li>4.30am - 9.00pm</ul></li>
			Features:<ul>
			<li>disabled access</li>
			<li>lifeguard supervision (Summer)</li>
			<li>25m pool</li>
			</ul>
			</div>
			</div>
			<div>
			<img src="assets/media/QLD_kingsbeach.jpeg" width="200" height="100">
			</div>
			<div><a href="https://www.queensland.com/us/en/things-to-do/attractions/p-56b2616e2880253d74c49f3c-kings-beach-beachfront-salt-water-pool.html" target="_blank">Image source</a>
			</div>
`,
		},
		{
			// Settlement Cove Lagoon, Redcliff
			location: { lat: -27.230421200258192, lng: 153.11704920675038 },
			content: `
			<a href="https://www.visitmoretonbayregion.com.au/natural-attractions/settlement-cove-lagoon-redcliffe" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Settlement Cove Lagoon<b></h2></a>
			<h3 style="color:#bf3648;">Redcliffe Parade, Redcliffe QLD 4020</h3>`,
		},

		{
			// Townsville
			location: { lat: -19.237901332098527, lng: 146.79870596309195 },
			content: `
			<a href="https://www.townsville.qld.gov.au/facilities-and-recreation/parks-beaches-and-community-venues/the-strand-and-beaches" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Strand Rock Pool, Townsville<b></h2></a>
			<h3 style="color:#bf3648;">The Strand, North Ward QLD 4810</h3>`,
		},
		{
			//Wynnum
			location: { lat: -27.4428, lng: 153.1774 },
			content: `
			<a href="https://www.visitbrisbane.com.au/information/articles/activities/wynnum-wading-pool?sc_lang=en-au" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Wynnum Wading Pool<b></h2></a>
			<h3 style="color:#bf3648;">Wynnum Esplanade, Wynnum QLD 4178</h3>`,
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
document
	.getElementById("categ-3")
	.addEventListener("click", mapWA, scrollFunction);

function scrollFunction() {
	map.scrollIntoView();
}

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
			content: `<h1>Western Australia</h1><h3 style="font-size:1.2rem;">Around Perth a couple of naturally occuring ocean pools can be found. In Western Australia there is impetus amongst communities for ocean pools to be built. The town of Mosman Park, is set to be the location for Perth's first 'real' ocean pool.</h3>`,
		},
		{
			// Hamersley Pool
			location: { lat: -31.861981869909286, lng: 115.75220723068354 },
			content: `
			<a href="https://beachsafe.org.au/beach/wa/stirling/north-beach/hammersley-pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Hamersley Pool<b></h2></a>
			<h3 style="color:#bf3648;">213 W Coast Dr, North Beach WA 6020</h3>`,
		},
		{
			// Mettam's Pool
			location: { lat: -31.8679920213065, lng: 115.7521163478319 },
			imageIcon: {
				url: "https://img.icons8.com/ultraviolet/80/4a90e2/marker.png",
			},
			content: `
			<div>
		    <a href="https://visitperth.com/see-and-do/beaches/mettams-pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Mettam's Pool<b></h2></a>
			<h3 style="font-size:1.1rem;">A naturally formed lagoon due to a shallow reef (1.5m deep) that is crescent shaped. A popular spot for snorkelling and family outtings.</h3>
			<h3 style="color:#bf3648;">West Coast Drive,
			North Beach, Perth, WA 6020</h3>
			<div style="font-size:1rem;">
			<p>Open: 24hrs</p>
			<p>Admission: free</p>
			Features:
			<ul>
			<li>Stair & ramp access</li>
			<li>Lifeguard supervision: none </li>
			<li>Ablutions</li>
			</div>
			</div>
			</div>
			<div>
			<img src="assets/media/WA_mettams.jpeg" width="200" height="100">
			</div>
			<div><a href="https://visitperth.com/see-and-do/beaches/mettams-pool" target="_blank">Image source</a>
			</div>`,
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
document
	.getElementById("categ-4")
	.addEventListener("click", mapSA, scrollFunction);

function scrollFunction() {
	map.scrollIntoView();
}

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
			content: `
			<a href="https://southaustralia.com/products/yorke-peninsula/attraction/edithburgh-tidal-pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Edithburgh Tidal Pool<b></h2></a>
			<h3 style="color:#bf3648;">7 O'Halloran Parade, Edithburgh SA 5583</h3>`,
		},
		{
			// Kingcote Tidal Pool
			location: { lat: -35.647671468407204, lng: 137.73531949402707 },
			content: `
			<a href="https://southaustralia.com/products/kangaroo-island/attraction/kingscote-tidal-pool" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Kingscote Tidal Pool<b></h2></a>
			<h3 style="color:#bf3648;">Kingscote SA 5223</h3>`,
		},
		{
			// Moonta Bay Seawater Pool
			location: { lat: -34.05228960265014, lng: 137.55847902686108 },
			content: `
			<a href="https://southaustralia.com/products/yorke-peninsula/attraction/moonta-bay-jetty" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Moonta Bay Seawater Pool<b></h2></a>
			<h3 style="color:#bf3648;">Moonta Bay Jetty, Moonta Bay SA 5558</h3>`,
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
			<h3 style="font-size:1.1rem;">The 300m Streaky Bay jetty was built between 1891 and 1896. The pool was added in 1936. Shark proofing it was a necessary addition after a 2.7m shark was caught off the jetty! </h3>
			<h3 style="color:#bf3648;">36 Alfred Terrace, Streaky Bay SA 5680</h3>
			<div style="font-size:1rem;">
			<p>Open: 24hrs</p>
			<p>Admission: free</p>
			<p>Built: 1936</p>
			Features:
			<ul>
			<li>Netted enclosure</li>
			</div>
			</div>
			<div>
			<img src="assets/media/SA_streakybay.jpg" width="200" height="100">
			</div>
			<div><a href="https://streakybay.com.au/explore/attractions-activities/cycle-swim-get-fit/" target="_blank">Image source</a>
			</div>`,
		},
		{
			// Smoky Bay Jetty Swimming Enclosure
			location: { lat: -32.378470801435626, lng: 133.9343639553862 },
			content: `
			<a href="https://cedunatourism.com.au/far-west-coast-south-australia/smoky-bay/" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Smoky Bay Jetty Swimming Enclosure<b></h2></a>
			<h3 style="color:#bf3648;">Smoky Bay SA 5680</h3>`,
		},
		{
			// Port Lincoln Foreshore Swimming Enclosure
			location: { lat: -34.71836710674295, lng: 135.8592934091666 },
			content: `
			<a href="https://beachsafe.org.au/beach/sa/port-lincoln/port-lincoln/town-beach" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Port Lincoln Foreshore Swimming Enclosure<b></h2></a>
			<h3 style="color:#bf3648;">Port Lincoln SA 5606</h3>`,
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
document
	.getElementById("categ-5")
	.addEventListener("click", mapVIC, scrollFunction);

function scrollFunction() {
	map.scrollIntoView();
}

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
			<h1>Victoria</h1><h3 style="font-size:1.2rem;">While Victoria doesn't have a plethora of ocean pools, it is home to some vintage beauties, namely the Brighton Sea Baths and Eastern Beach Baths, located in Geelong.</h3>`,
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
			<h3 style="font-size:1.1rem;">The iconic Brighton Sea Baths date back to the 1880's. Famous for their olympic sized sea baths as well as being the home base for the orignal 'winter swimmers', the Icebergers.</h3>
			<h3 style="color:#bf3648;">251 Esplanade, Brighton VIC 3186</h3>
			<div style="font-size:1rem;">
			Opening Hours:
			<a href="https://brightonbathshealthclub.com.au/contact/" target="_blank" style="color:#bf36b8;">See Brighton Baths Website for full details</a>
			<br>
			<p>Admission: $ membership & casual visitor options</p>
			<p>Built: 1936</p>
			Features:
			<ul>
			<li>50m pools</li>
			<li>Lap lane facilities</li>
			<li>Private beach & boardwalk </li>
			<li>Ablutions</li>
			</ul>
			Swimming Clubs:
			<ul>
			<li>The Icebergers</li>
			</ul>
			</div>
			</div>
			<div>
			<img src="assets/media/VIC_brighton.jpeg" width="200" height="100">
			</div>
			<div><a href="https://www.swimmersdaily.com/2020/10/25/what-its-like-to-swim-at-the-brighton-baths/" target="_blank">Image source</a>
			</div>
			`,
		},
		{
			location: { lat: -38.67340979467835, lng: 145.6192479426571 },
			content: `
			<a href="https://www.visitbasscoast.com.au/cape-paterson-beaches" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Port Cape Paterson Bay Rockpool<b></h2></a>
			<h3 style="color:#bf3648;">16 Bay Beach Rd, Cape Paterson VIC 3995</h3>
			`,
		},
		{
			location: { lat: -38.14641969966145, lng: 144.37087759038008 },
			content: `
			<a href="https://vintagevictoria.net.au/eastern-beach-baths-geelong/" target="_blank"><h2 style="font-size:1.3rem;color:#023e8a;"><b>Eastern Beach Baths<b></h2></a>
			<h3 style="color:#bf3648;">95 Eastern Beach Rd, Geelong VIC 3220</h3>
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
document
	.getElementById("categ-6")
	.addEventListener("click", mapNT, scrollFunction);

function scrollFunction() {
	map.scrollIntoView();
}

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
			content: `<h1>Northern Territory</h1><h3 style="font-size:1.2rem;">Logic would dictate a greater number of ocean pools in this stunning part of Australia, given the ominous presence of stingers, crocs and sharks in the crystal blue waters of the Northern Territory. The research undertaken to produce this website only produced one spot, which incidentally has become known as 'Darwin's safest swimming beach'!</h3>`,
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
			<h3 style="font-size:1.1rem;">Known as <i>Darwin's safest beach</i>, the lagoon lies adjacent to the Darwin Harbour and is protected by a sea wall and stinger/shark/crocodile net.</h3>

			<h3 style="color:#bf3648;">Darwin Waterfont Precinct Recreational Lagoon, Kitchener Dr, Darwin City NT 0800</h3>
			<div style="font-size:1rem;">
			Opening Hours:
			<a href="https://www.waterfront.nt.gov.au/" target="_blank" style="color:#bf36b8;">See Darwin Waterfront Website for full details</a>
			<br>
			<p>Admission: free</p>
			Features:
			<ul>
			<li>Lifeguard Supervision</li>
			<li>Wave pool</li>
			<li>Disabled access</li>
			<li>Ablutions</li>
			</ul>
			</div>
			</div>

			<img src="assets/media/NT_darwin.jpeg" width="200" height="100">
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
