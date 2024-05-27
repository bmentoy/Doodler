document.addEventListener("DOMContentLoaded", function () {
    const logoElement = document.querySelector(".Logo");
    const homeLink = document.querySelector(".nav-link:nth-child(1)");
    const aboutLink = document.querySelector(".nav-link:nth-child(2)");
    const servicesLink = document.querySelector(".nav-link:nth-child(3)");
    const helpLink = document.querySelector(".nav-link:nth-child(4)");
    const loginButton = document.querySelector(".btnLogin-popup");
    const signupButton = document.querySelector(".btnSignup-popup");
    const loginPopup = document.getElementById("loginPopup");
    const signupPopup = document.getElementById("signupPopup");
    const closeLoginButton = document.querySelector(".login-popup .close");
    const closeSignupButton = document.querySelector(".signup-popup .close");
    const signupForm = document.querySelector(".signup-box form");

    // Function to navigate to the home page
    function goToHome() {
        window.location.href = "index.html"; // Change "index.html" to your home page URL
    }

    // Reload the page when clicking on the Doodler logo
    logoElement.addEventListener("click", goToHome);

    // Reload the page when clicking on the Home link
    homeLink.addEventListener("click", goToHome);

    // Scroll to the About section when clicking on the About link
    aboutLink.addEventListener("click", function () {
        const aboutSection = document.querySelector("#about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    });

    // Scroll to the Services section when clicking on the Services link
    servicesLink.addEventListener("click", function () {
        const servicesSection = document.querySelector("#services");
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
        }
    });

    // Scroll to the Help section when clicking on the Help link
    helpLink.addEventListener("click", function () {
        const helpSection = document.querySelector("#help");
        if (helpSection) {
            helpSection.scrollIntoView({ behavior: "smooth" });
        }
    });

    // Show/hide the login section when the "Login" button is clicked
    loginButton.addEventListener("click", function () {
        loginPopup.style.display = "block";
        document.body.classList.add("login-blur");
    });

    // Show/hide the signup section when the "Sign Up" button is clicked
    signupButton.addEventListener("click", function () {
        signupPopup.style.display = "block";
        document.body.classList.add("signup-blur");
    });

    // Close the login popup when the close button is clicked
    closeLoginButton.addEventListener("click", function () {
        loginPopup.style.display = "none";
        document.body.classList.remove("login-blur");
    });

    // Close the signup popup when the close button is clicked
    closeSignupButton.addEventListener("click", function () {
        signupPopup.style.display = "none";
        document.body.classList.remove("signup-blur");
    });

    // Close the login popup when clicking outside the popup
    window.addEventListener("click", function (event) {
        if (event.target === loginPopup) {
            loginPopup.style.display = "none";
            document.body.classList.remove("login-blur");
        }
    });

    // Close the signup popup when clicking outside the popup
    window.addEventListener("click", function (event) {
        if (event.target === signupPopup) {
            signupPopup.style.display = "none";
            document.body.classList.remove("signup-blur");
        }
    });

    // Validate password on signup form submission
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            const password = signupForm.querySelector("#signup-password").value;
            const confirmPassword = signupForm.querySelector("#confirm-password").value;
            const passwordError = document.getElementById("passwordError");

            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()])(?=.*[a-zA-Z]).{8,15}$/;

            if (!passwordRegex.test(password)) {
                event.preventDefault(); // Prevent form submission
                passwordError.textContent = "Password must be 8-15 characters long and include at least one number, one lowercase and one uppercase letter, and one special character.";
                passwordError.style.color = "red";
            } else if (password !== confirmPassword) {
                event.preventDefault(); // Prevent form submission
                passwordError.textContent = "Passwords do not match. Please insert the same password.";
                passwordError.style.color = "red";
            } else {
                passwordError.textContent = ""; // Clear error message if passwords match and meet criteria
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const passwordField = document.getElementById("signup-password");
    const confirmPasswordField = document.getElementById("confirm-password");
    const passwordError = document.getElementById("passwordError");

    // Function to validate password criteria
    function validatePassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
        return regex.test(password);
    }

    // Function to handle form submission
    signupForm.addEventListener("submit", function (event) {
        const password = passwordField.value;
        const confirmPassword = confirmPasswordField.value;

        // Check if passwords match
        if (password !== confirmPassword) {
            event.preventDefault(); // Prevent form submission
            passwordError.textContent = "Passwords do not match. Please insert the same password.";
            passwordError.style.color = "red";
            return; // Stop further processing
        }

        // Check if password meets criteria
        if (!validatePassword(password)) {
            event.preventDefault(); // Prevent form submission
            passwordError.textContent = "Password must contain 8-15 characters including a number, a lowercase and an uppercase alphabet, and a special character.";
            passwordError.style.color = "red";
        }
    });
});
