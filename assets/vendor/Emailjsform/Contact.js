// Initialize EmailJS
(function() {
  emailjs.init("ihZWyLfmwyF_QUaVH"); // Replace with your Public Key from EmailJS
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Show loading message
  document.getElementById("loading").style.display = "block";
  document.getElementById("error-message").style.display = "none";
  document.getElementById("sent-message").style.display = "none";

  // Send form via EmailJS
  emailjs.sendForm("service_py990fb", "template_dj3j3ii", this)
    .then(function() {
      document.getElementById("loading").style.display = "none";
      document.getElementById("sent-message").style.display = "block";
      document.getElementById("contact-form").reset();

      // Show success popup
      const popup = document.getElementById("success-popup");
      if (popup) {
        popup.style.display = "flex";  // show popup
        setTimeout(() => {
          popup.style.display = "none"; // auto-hide after 2.5s
        }, 2500);
      }

    }, function(error) {
      document.getElementById("loading").style.display = "none";
      document.getElementById("error-message").innerText =
        "Failed to send message: " + error.text;
      document.getElementById("error-message").style.display = "block";
    });
});
