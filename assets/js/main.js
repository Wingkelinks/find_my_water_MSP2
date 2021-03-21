/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function myFunction() {
	var x = document.getElementById("navigation");
	if (x.className === "hamburger-bar + menu") {
		x.className += " responsive";
	} else {
		x.className = "hamburger-bar + menu";
	}
}
