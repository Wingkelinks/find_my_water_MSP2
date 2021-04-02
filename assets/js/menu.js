/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function menuRespond() {
	var nav = document.getElementById("navigation");
	if (nav.className === "hamburger-bar") {
		nav.className += " responsive";
	} else {
		nav.className = "hamburger-bar";
	}
}
