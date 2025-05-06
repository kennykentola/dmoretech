const ADMIN_EMAIL = "dmoretech44@gmail.com";
const ADMIN_PASSWORD = "dmoretech44";

function adminLogin() {
    const email = document.getElementById("admin-email").value;
    const password = document.getElementById("admin-password").value;
    const errorDiv = document.getElementById("login-error");

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        errorDiv.textContent = "";
        displayProducts();
        displayCustomers();
    } else {
        errorDiv.textContent = "Invalid email or password.";
    }
}

function adminLogout() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("admin-email").value = "";
    document.getElementById("admin-password").value = "";
}

function displayProducts() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productsTableBody = document.querySelector("#products-table tbody");
    productsTableBody.innerHTML = "";

    cart.forEach((item, index) => {
        const row = document.createElement("tr");
        const timestamp = item.timestamp ? new Date(item.timestamp).toLocaleString() : "N/A";
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td class="hide-mobile">${timestamp}</td>
            <td>${item.customerEmail || "N/A"}</td>
            <td><button class="delete-btn" onclick="deleteProduct(${index})">Delete</button></td>
        `;
        productsTableBody.appendChild(row);
    });
}

function deleteProduct(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayProducts();
}

function displayCustomers() {
    const customersTableBody = document.querySelector("#customers-table tbody");
    customersTableBody.innerHTML = "";

    // Mock customer data since no customer data collection is implemented
    const mockCustomers = [
        { email: "customer1@example.com", phone: "+2348123456789", address: "123 Lagos St, Lagos", products: "Fan, Oven" },
        { email: "customer2@example.com", phone: "+2348987654321", address: "456 Abuja Rd, Abuja", products: "Air Blower" }
    ];

    mockCustomers.forEach(customer => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td class="hide-mobile">${customer.address}</td>
            <td>${customer.products}</td>
        `;
        customersTableBody.appendChild(row);
    });
}

// Check if admin is already logged in
document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("adminLoggedIn");
    if (isLoggedIn === "true") {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        displayProducts();
        displayCustomers();
    }
});