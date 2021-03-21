/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function myFunction() {
	var x = document.getElementById("navigation");
	if (x.className === "hamburger-bar") {
		x.className += " responsive";
	} else {
		x.className = "hamburger-bar";
	}
}

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("navigation").style.top = "0";
	} else {
		document.getElementById("navigation").style.top = "-82px";
	}
}
