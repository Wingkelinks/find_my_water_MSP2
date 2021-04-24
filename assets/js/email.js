function sendMail(contactForm) {
	emailjs
		.send("service_4a70f3d", "template_so9imuu", {
			from_name: contactForm.name.value,
			from_email: contactForm.email.value,
			subject: contactForm.subject.value,
			message: contactForm.message.value,
		})
		.then(
			function (response) {
				console.log("SUCCESS", response);
			},
			function (error) {
				console.log("FAILED", error);
			}
		);
	return false; // To block from loading a new page
}

//
// https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal
var modal = document.getElementById("alertModal");

// Get the button that opens the modal
var btn = document.getElementById("sendBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the send button, open the modal
btn.onclick = function () {
	modal.style.display = "block";
};

// When the user clicks on X, close the modal
span.onclick = function () {
	modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
