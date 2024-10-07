let user = {};
let otpCode = null; // OTP placeholder

// Show/Hide Password Functionality
document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordField = document.getElementById("loginPassword");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        this.innerHTML = "&#128065;"; // Eye open
    } else {
        passwordField.type = "password";
        this.innerHTML = "&#128065;"; // Eye close
    }
});

// Switch to Signup Form
function showSignup() {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("signupContainer").style.display = "block";
}

// Switch to Login Form
function showLogin() {
    document.getElementById("signupContainer").style.display = "none";
    document.getElementById("loginContainer").style.display = "block";
}

// Signup Functionality
function signup() {
    const username = document.getElementById("signupUsername").value;
    const phone = document.getElementById("signupPhone").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password === confirmPassword) {
        // Store user information
        user.username = username;
        user.password = password;
        user.phone = phone;

        alert("Signup successful! Please login.");
        showLogin(); // Redirect to login page
    } else {
        alert("Passwords do not match!");
    }
}

// Login Functionality
function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Verify user credentials
    if (username === user.username && password === user.password) {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("welcomeContainer").style.display = "block";
        document.getElementById("welcomeUsername").textContent = user.username;
    } else {
        alert("Invalid username or password!");
    }
}

// Forgot Password Functionality
function forgotPassword() {
    const phone = prompt("Enter your registered phone number:");
    if (phone === user.phone) {
        otpCode = Math.floor(100000 + Math.random() * 900000); // Generate OTP
        alert("Your OTP is: " + otpCode); // Simulating sending OTP via SMS
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("otpContainer").style.display = "block";
    } else {
        alert("Phone number not registered.");
    }
}

// Verify OTP
function verifyOTP() {
    const otpInput = document.getElementById("otpInput").value;
    if (otpInput == otpCode) {
        document.getElementById("otpContainer").style.display = "none";
        document.getElementById("resetPasswordContainer").style.display = "block";
    } else {
        alert("Invalid OTP.");
    }
}

// Reset Password Functionality
function resetPassword() {
    const newPassword = document.getElementById("newPassword").value;
    const confirmNewPassword = document.getElementById("confirmNewPassword").value;

    if (newPassword === confirmNewPassword) {
        user.password = newPassword; // Update password
        alert("Password reset successful! Please login.");
        document.getElementById("resetPasswordContainer").style.display = "none";
        showLogin();
    } else {
        alert("Passwords do not match!");
    }
}
