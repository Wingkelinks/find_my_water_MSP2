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
