document.querySelector("form").addEventListener("submit", function (e) {
    const phoneInput = document.getElementById("phone");
    const phoneNumber = phoneInput.value.trim();
    const successMessage = document.getElementById("success-message");

    const phonePattern = /^\d{10}$/;

    if (!phonePattern.test(phoneNumber)) {
        alert("Please enter a valid 10-digit phone number.");
        e.preventDefault(); // Stop submission
        successMessage.style.display = "none"; // Hide success if error
    } else {
        e.preventDefault(); // Prevent default for demo purpose (optional)
        successMessage.style.display = "block"; // Show success
    }
});
