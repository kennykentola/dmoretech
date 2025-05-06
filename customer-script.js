function checkCustomer() {
    const registerSection = document.getElementById("register-section");
    if (!registerSection || registerSection.style.display === "none") {
        console.log("Register section is hidden; cannot proceed with checkCustomer.");
        return;
    }

    const emailInput = document.getElementById("customer-email");
    const phoneInput = document.getElementById("customer-phone");
    const passwordInput = document.getElementById("customer-password");
    const errorDiv = document.getElementById("customer-error");

    if (!emailInput || !phoneInput || !passwordInput || !errorDiv) {
        console.error("One or more input elements not found.");
        if (errorDiv) errorDiv.textContent = "An error occurred. Please refresh the page.";
        return;
    }

    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passwordInput.value.trim();
    console.log("Registering with email:", email, "phone:", phone, "password:", password);

    const phoneRegex = /^(?:\+234\d{10}|0[7-9]\d{9}|\+234\d{0,9}|0[7-9]\d{0,8})$/;
    const isFullNumber = phone.length === 14 && phone.startsWith("+234") || phone.length === 11 && phone.startsWith("0");

    if (!email || !phone || !password) {
        errorDiv.textContent = "Please fill in all fields.";
        return;
    }
    if (!phoneRegex.test(phone)) {
        errorDiv.textContent = "Please enter a valid Nigerian phone number (e.g., +2349048082076 or 09048082076).";
        return;
    }
    if (!isFullNumber) {
        errorDiv.textContent = "Phone number must be complete: +234 followed by 10 digits or 0 followed by 10 digits.";
        return;
    }

    let customers = JSON.parse(localStorage.getItem("customers")) || [];
    const customer = customers.find(c => c.email === email);
    console.log("Existing customers:", customers);

    if (customer) {
        requestAnimationFrame(() => {
            registerSection.style.display = "none";
            document.getElementById("password-section").style.display = "block";
            document.getElementById("login-button").style.display = "inline-block";
            document.getElementById("checkCustomer").style.display = "none";
            errorDiv.textContent = "";
        });
    } else {
        const newCustomer = { email, phone, password };
        customers.push(newCustomer);
        localStorage.setItem("customers", JSON.stringify(customers));
        localStorage.setItem("loggedInCustomer", email);
        console.log("New customer added, localStorage customers:", JSON.parse(localStorage.getItem("customers")));
        console.log("Saved customer details:", newCustomer);
        window.location.href = "/home.html"; // Redirect to home page after registration
    }
}

function customerLogin() {
    const emailInput = document.getElementById("customer-email");
    const passwordInput = document.getElementById("login-password");
    const errorDiv = document.getElementById("customer-error");

    if (!emailInput || !passwordInput || !errorDiv) {
        console.error("One or more input elements not found in customerLogin.");
        if (errorDiv) errorDiv.textContent = "An error occurred. Please refresh the page.";
        return;
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    console.log("Logging in with email:", email, "password:", password);

    let customers = JSON.parse(localStorage.getItem("customers")) || [];
    const customer = customers.find(c => c.email === email);
    console.log("Stored customers:", customers);
    console.log("Customer found:", customer, "Stored password:", customer ? customer.password : "No customer");

    if (!customer) {
        errorDiv.textContent = "Customer not found. Please register.";
        console.log("No customer found for email:", email);
        return;
    }

    if (!customer.password || customer.password === "") {
        errorDiv.textContent = "Account error: Password missing. Please reset your password.";
        console.log("Customer password is missing for email:", email);
        return;
    }

    if (customer.password === password) {
        localStorage.setItem("loggedInCustomer", email);
        window.location.href = "/home.html"; // Redirect to home page after successful login
    } else {
        errorDiv.textContent = "Incorrect password.";
        console.log("Password match:", customer.password === password);
        console.log("Input vs Stored:", password, customer.password);
        console.log("Input password length:", password.length, "Stored password length:", customer.password.length);
        console.log("Input password char codes:", password.split("").map(c => c.charCodeAt(0)));
        console.log("Stored password char codes:", customer.password.split("").map(c => c.charCodeAt(0)));
    }
}

function resetPassword() {
    const emailInput = document.getElementById("customer-email");
    const verifyTextInput = document.getElementById("password-verify");
    const newPasswordInput = document.getElementById("new-password");
    const errorDiv = document.getElementById("customer-error");

    if (!emailInput || !verifyTextInput || !newPasswordInput || !errorDiv) {
        console.error("One or more input elements not found in resetPassword.");
        if (errorDiv) errorDiv.textContent = "An error occurred. Please refresh the page.";
        return;
    }

    const email = emailInput.value.trim();
    const verifyText = verifyTextInput.value.trim();
    const newPassword = newPasswordInput.value.trim();

    let customers = JSON.parse(localStorage.getItem("customers")) || [];
    const customerIndex = customers.findIndex(c => c.email === email);

    if (customerIndex !== -1) {
        const oldPassword = customers[customerIndex].password || "";
        const verifyMatch = oldPassword ? oldPassword.includes(verifyText) : false;

        if (verifyMatch && verifyText.length >= 2 && verifyText.length <= 3) {
            customers[customerIndex].password = newPassword;
            localStorage.setItem("customers", JSON.stringify(customers));
            requestAnimationFrame(() => {
                errorDiv.textContent = "Password reset successfully! Please log in.";
                document.getElementById("forgot-password-section").style.display = "none";
                document.getElementById("password-section").style.display = "block";
                document.getElementById("login-button").style.display = "inline-block";
                document.getElementById("reset-password-button").style.display = "none";
            });
        } else {
            errorDiv.textContent = "Verification failed. Please enter 2-3 characters from your previous password.";
        }
    } else {
        errorDiv.textContent = "Customer not found.";
    }
}

function customerLogout() {
    localStorage.removeItem("loggedInCustomer");
    requestAnimationFrame(() => {
        document.getElementById("welcome-message").style.display = "none";
        document.getElementById("logout-button").style.display = "none";
        document.getElementById("register-section").style.display = "block";
        document.getElementById("password-section").style.display = "none";
        document.getElementById("forgot-password-section").style.display = "none";
        document.getElementById("checkCustomer").style.display = "inline-block";
        document.getElementById("login-button").style.display = "none";
        document.getElementById("reset-password-button").style.display = "none";
        document.getElementById("customer-email").value = "";
        document.getElementById("customer-phone").value = "";
        document.getElementById("customer-password").value = "";
        document.getElementById("login-password").value = "";
        document.getElementById("customer-error").textContent = "";
    });
}

function showWelcomeMessage(email) {
    const welcomeMessage = document.getElementById("welcome-message");
    if (!welcomeMessage) {
        console.error("Welcome message element not found.");
        return;
    }

    welcomeMessage.textContent = `Welcome, ${email}!`;
    requestAnimationFrame(() => {
        welcomeMessage.style.display = "block";
        document.getElementById("register-section").style.display = "none";
        document.getElementById("password-section").style.display = "none";
        document.getElementById("forgot-password-section").style.display = "none";
        document.getElementById("checkCustomer").style.display = "none";
        document.getElementById("login-button").style.display = "none";
        document.getElementById("reset-password-button").style.display = "none";
        document.getElementById("logout-button").style.display = "inline-block";
        document.getElementById("customer-error").textContent = "";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const forgotPasswordLink = document.getElementById("forgot-password-link");
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener("click", (e) => {
            e.preventDefault();
            requestAnimationFrame(() => {
                document.getElementById("register-section").style.display = "none";
                document.getElementById("password-section").style.display = "none";
                document.getElementById("forgot-password-section").style.display = "block";
                document.getElementById("checkCustomer").style.display = "none";
                document.getElementById("login-button").style.display = "none";
                document.getElementById("reset-password-button").style.display = "inline-block";
            });
        });
    }

    const loggedInCustomer = localStorage.getItem("loggedInCustomer");
    if (loggedInCustomer) {
        window.location.href = "/home.html"; // Redirect to home page if already logged in
    }

    const phoneInput = document.getElementById("customer-phone");
    if (phoneInput) {
        phoneInput.disabled = false;
        console.log("Phone input enabled:", !phoneInput.disabled);
    } else {
        console.error("Phone input element not found.");
    }

    // Add password visibility toggle icons (only for password fields)
    const passwordInputs = [
        document.getElementById("customer-password"),
        document.getElementById("login-password"),
        document.getElementById("new-password")
    ];
    passwordInputs.forEach(input => {
        if (input) {
            console.log("Adding toggle to password input:", input.id);
            const icon = document.createElement("i");
            icon.className = "bx bx-show password-toggle";
            icon.style.cursor = "pointer";
            icon.style.marginLeft = "5px";
            input.parentNode.insertBefore(icon, input.nextSibling);

            icon.addEventListener("click", () => {
                if (input.type === "password") {
                    input.type = "text";
                    icon.className = "bx bx-hide password-toggle";
                } else {
                    input.type = "password";
                    icon.className = "bx bx-show password-toggle";
                }
            });
        }
    });
});