/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function menuRespond() {
	var nav = document.getElementById("navigation");
	if (nav.className === "hamburger-bar") {
		nav.className += " responsive";
	} else {
		nav.className = "hamburger-bar";
	}
}

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (88px out of the top view)

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("navigation").style.top = "0";
	} else {
		document.getElementById("navigation").style.top = "-88px";
	}
}
