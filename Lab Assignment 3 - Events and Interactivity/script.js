function validateForm() {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const homeStatus = document.getElementById("homeStatus").value.trim();

    if (fullName === "") {
        alert("Please enter your full name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return false;
    } else if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (phone === "") {
        alert("Please enter your phone number.");
        return false;
    } else if (!isValidPhoneNumber(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    if (homeStatus === "") {
        alert("Please select your current home status.");
        return false;
    }

    // Additional validation logic for other fields if needed

    return true;
}

function isValidEmail(email) {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isValidPhoneNumber(phone) {
    // Basic phone number validation regex
    const regex = /^\d{10}$/;
    return regex.test(phone);
}
