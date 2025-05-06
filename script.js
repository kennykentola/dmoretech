const ADMIN_CREDENTIALS = { email: 'admin@store.com', password: 'admin123' };

window.adminLogin = function () {
    const email = document.getElementById('admin-email')?.value;
    const password = document.getElementById('admin-password')?.value;
    const error = document.getElementById('login-error');

    if (!error) {
        console.warn('login-error element not found');
        return;
    }

    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
        localStorage.setItem('adminLoggedIn', 'true');
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        displayDashboard();
    } else {
        error.textContent = 'Invalid email or password';
    }
};

window.adminLogout = function () {
    localStorage.removeItem('adminLoggedIn');
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('admin-email').value = '';
    document.getElementById('admin-password').value = '';
    document.getElementById('login-error').textContent = '';
};

window.displayDashboard = function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    const productsTable = document.querySelector('#products-table tbody');
    productsTable.innerHTML = '';

    cart.forEach((item, index) => {
        const customer = findCustomerByProduct(item.id);
        const timestamp = item.timestamp ? new Date(item.timestamp).toLocaleString() : 'N/A';
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td class="hide-mobile">${timestamp}</td>
            <td>${customer ? customer.email : 'Unknown'}</td>
            <td><button class="delete-btn" onclick="deleteProduct('cart', ${index})">Delete</button></td>
        `;
        productsTable.appendChild(row);
    });

    orderHistory.forEach((item, index) => {
        const customer = findCustomerByProduct(item.id);
        const timestamp = item.timestamp ? new Date(item.timestamp).toLocaleString() : 'N/A';
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>1</td>
            <td class="hide-mobile">${timestamp}</td>
            <td>${customer ? customer.email : 'Unknown'}</td>
            <td><button class="delete-btn" onclick="deleteProduct('orderHistory', ${index})">Delete</button></td>
        `;
        productsTable.appendChild(row);
    });

    const customers = JSON.parse(localStorage.getItem('customers')) || [];
    const customersTable = document.querySelector('#customers-table tbody');
    customersTable.innerHTML = '';

    customers.forEach(customer => {
        const products = findProductsByCustomer(customer.email);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td class="hide-mobile">${customer.address || 'Not provided'}</td>
            <td>${products.join(', ') || 'None'}</td>
        `;
        customersTable.appendChild(row);
    });
};

window.findCustomerByProduct = function (productId) {
    const customers = JSON.parse(localStorage.getItem('customers')) || [];
    return customers.find(customer => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
        return cart.some(item => item.id === productId && item.email === customer.email) ||
               orderHistory.some(item => item.id === productId && item.email === customer.email);
    });
};

window.findProductsByCustomer = function (email) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    const products = [];
    cart.forEach(item => {
        if (item.email === email) products.push(`${item.name} (Cart)`);
    });
    orderHistory.forEach(item => {
        if (item.email === email) products.push(`${item.name} (Order)`);
    });
    return products;
};

window.deleteProduct = function (source, index) {
    if (!confirm('Are you sure you want to delete this product?')) return;
    let items = JSON.parse(localStorage.getItem(source)) || [];
    items.splice(index, 1);
    localStorage.setItem(source, JSON.stringify(items));
    displayDashboard();
};

window.checkCustomer = function () {
    const email = document.getElementById('customer-email')?.value;
    const phone = document.getElementById('customer-phone')?.value;
    const error = document.getElementById('customer-error');

    if (!error) {
        console.warn('customer-error element not found');
        return;
    }

    if (!email || !phone) {
        error.textContent = 'Email and phone number are required';
        return;
    }

    let customers = JSON.parse(localStorage.getItem('customers')) || [];
    let customer = customers.find(c => c.email === email || c.phone === phone);

    if (customer) {
        error.textContent = 'This email or phone number is already registered. Please log in.';
        const registerSection = document.getElementById('register-section');
        const passwordSection = document.getElementById('password-section');
        const loginButton = document.getElementById('login-button');
        const checkCustomerButton = document.getElementById('checkCustomer');
        if (registerSection) registerSection.style.display = 'none';
        if (passwordSection) passwordSection.style.display = 'block';
        if (loginButton) loginButton.style.display = 'inline-block';
        if (checkCustomerButton) checkCustomerButton.style.display = 'none';
    } else {
        customerLogin();
    }
};

window.customerLogin = function () {
    const email = document.getElementById('customer-email')?.value;
    const phone = document.getElementById('customer-phone')?.value;
    const password = document.getElementById('customer-password')?.value || document.getElementById('login-password')?.value;
    const address = document.getElementById('address-input')?.value;
    const error = document.getElementById('customer-error');

    if (!error) {
        console.warn('customer-error element not found');
        return;
    }

    let customers = JSON.parse(localStorage.getItem('customers')) || [];
    let customer = customers.find(c => c.email === email && c.phone === phone);

    if (customer) {
        if (customer.password !== password) {
            error.textContent = 'Incorrect password';
            return;
        }
        localStorage.setItem('currentCustomer', JSON.stringify(customer));
        updateCustomerData(email);
        window.location.href = '/home.html';
    } else {
        customer = { email, phone, password, address };
        customers.push(customer);
        localStorage.setItem('customers', JSON.stringify(customers));
        localStorage.setItem('currentCustomer', JSON.stringify(customer));
        updateCustomerData(email);
        window.location.href = '/home.html';
    }
};

window.resetPassword = function () {
    const email = document.getElementById('customer-email')?.value;
    const phone = document.getElementById('customer-phone')?.value;
    const verifyChars = document.getElementById('password-verify')?.value;
    const newPassword = document.getElementById('new-password')?.value;
    const error = document.getElementById('customer-error');

    if (!error) {
        console.warn('customer-error element not found');
        return;
    }

    let customers = JSON.parse(localStorage.getItem('customers')) || [];
    let customer = customers.find(c => c.email === email && c.phone === phone);

    if (!customer) {
        error.textContent = 'No account found with this email/phone';
        return;
    }

    if (verifyChars.length < 2 || verifyChars.length > 3 || !customer.password.includes(verifyChars)) {
        error.textContent = 'Invalid verification characters';
        return;
    }

    customer.password = newPassword;
    localStorage.setItem('customers', JSON.stringify(customers));
    alert('Password reset successfully! Please log in.');
    const forgotPasswordSection = document.getElementById('forgot-password-section');
    const passwordSection = document.getElementById('password-section');
    const loginButton = document.getElementById('login-button');
    const resetPasswordButton = document.getElementById('reset-password-button');
    if (forgotPasswordSection) forgotPasswordSection.style.display = 'none';
    if (passwordSection) passwordSection.style.display = 'block';
    if (loginButton) loginButton.style.display = 'inline-block';
    if (resetPasswordButton) resetPasswordButton.style.display = 'none';
};

window.customerLogout = function () {
    localStorage.removeItem('currentCustomer');
    const welcomeMessage = document.getElementById('welcome-message');
    const registerSection = document.getElementById('register-section');
    const passwordSection = document.getElementById('password-section');
    const forgotPasswordSection = document.getElementById('forgot-password-section');
    const customerEmail = document.getElementById('customer-email');
    const customerPhone = document.getElementById('customer-phone');
    const customerPassword = document.getElementById('customer-password');
    const addressInput = document.getElementById('address-input');
    const loginPassword = document.getElementById('login-password');
    const passwordVerify = document.getElementById('password-verify');
    const newPassword = document.getElementById('new-password');
    const logoutButton = document.getElementById('logout-button');
    const loginButton = document.getElementById('login-button');
    const resetPasswordButton = document.getElementById('reset-password-button');
    const customerError = document.getElementById('customer-error');
    const checkCustomerButton = document.querySelector('button[onclick="checkCustomer()"]');

    if (welcomeMessage) welcomeMessage.style.display = 'none';
    if (registerSection) registerSection.style.display = 'block';
    if (passwordSection) passwordSection.style.display = 'none';
    if (forgotPasswordSection) forgotPasswordSection.style.display = 'none';
    if (customerEmail) customerEmail.value = '';
    if (customerPhone) customerPhone.value = '';
    if (customerPassword) customerPassword.value = '';
    if (addressInput) addressInput.value = '';
    if (loginPassword) loginPassword.value = '';
    if (passwordVerify) passwordVerify.value = '';
    if (newPassword) newPassword.value = '';
    if (logoutButton) logoutButton.style.display = 'none';
    if (loginButton) loginButton.style.display = 'none';
    if (resetPasswordButton) resetPasswordButton.style.display = 'none';
    if (customerError) customerError.textContent = '';
    if (checkCustomerButton) checkCustomerButton.style.display = 'inline-block';
};

window.updateCustomerData = function (email) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.map(item => ({ ...item, email, timestamp: item.timestamp || new Date().toISOString() }));
    localStorage.setItem('cart', JSON.stringify(cart));

    let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    orderHistory = orderHistory.map(item => ({ ...item, email, timestamp: item.timestamp || new Date().toISOString() }));
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
};

window.initAutocomplete = function () {
    const autocompleteElement = document.getElementById('address-input');
    if (autocompleteElement) {
        autocompleteElement.componentRestrictions = { country: 'ng' };
        autocompleteElement.addEventListener('placechange', () => {
            const place = autocompleteElement.place;
            if (place && place.formatted_address) {
                autocompleteElement.value = place.formatted_address;
            }
        });
    }
};

const products = [
    {
        id: 'fan',
        name: 'Fan',
        image: 'https://i.postimg.cc/rmTVV1xk/th-1.jpg',
        price: '₦25000.00',
        rating: [1, 1, 1, 0, 0],
        colors: ['red', 'blue', 'white'],
        description: 'A high-quality fan with multiple speed settings and durable design, perfect for home or office use.'
    },
    {
        id: 'oven',
        name: 'oven',
        image: 'https://i.postimg.cc/43WYS2j0/download-1.jpg',
        price: '₦170000.24',
        rating: [1, 1, 0, 0, 0],
        colors: ['green', 'grey', 'brown'],
        description: 'Stylish and comfortable oven suitable for all seasons, crafted with premium materials.'
    },
    {
        id: 'airblower',
        name: 'Air blower',
        image: 'https://i.postimg.cc/Kzjn6vxC/shopping.webp',
        price: '₦27.24',
        rating: [1, 1, 1, 1, 0],
        colors: ['brown', 'green', 'blue'],
        description: 'Elegant shirt with a modern fit, ideal for casual and semi-formal occasions.'
    },
    {
        id: 'microwave',
        name: 'microwave',
        image: 'https://i.postimg.cc/cC7Mkg8h/images.jpg',
        price: '₦43.67',
        rating: [1, 1, 1, 1, 1],
        colors: ['red', 'grey', 'blue'],
        description: 'Durable and fashionable microwave designed for comfort and easy home use.'
    },
    {
        id: 'hometheater',
        name: 'home theater',
        image: 'https://i.postimg.cc/J0sPT45d/download-5.jpg',
        price: '₦10.23',
        rating: [1, 1, 1, 1, 1],
        colors: ['blank', 'blue', 'brown'],
        description: 'Comfortable home theater made for high-quality and to give you best sounds.'
    },
    {
        id: 'iron',
        name: 'pressing iron',
        image: 'https://i.postimg.cc/YSTRywjX/download-4.jpg',
        price: '₦09.28',
        rating: [1, 0, 0, 0, 0],
        colors: ['brown', 'red', 'green'],
        description: 'high quality pressing iron for your cloths.'
    },
    {
        id: 'solarproduct',
        name: 'solar product',
        image: 'https://i.postimg.cc/d0SC5RNw/download.webp',
        price: '₦06.24',
        rating: [1, 1, 1, 1, 1],
        colors: ['grey', 'blank', 'blank'],
        description: 'Trendy solar product is in our storeget the the best here .'
    },
    {
        id: 'fan',
        name: 'pressing iron',
        image: 'https://i.postimg.cc/6qcQTtvz/download-3.jpg',
        price: '₦43.67',
        rating: [1, 1, 1, 1, 1],
        colors: ['grey', 'red', 'blue'],
        description: 'high quality pressing iron for your cloths.'
    },
    {
        id: 'fan',
        name: 'Ceiling Fan',
        image: 'https://i.postimg.cc/LXhDx8Hg/fans-ox-mega-62-ceiling-fan-1-0.webp',
        price: '₦37.24',
        rating: [1, 1, 1, 1, 1],
        colors: ['grey', 'black', 'blue'],
        description: 'high quality  ceiling fan to cool your home for you.'
    },
    {
        id: 'frige',
        name: 'washing machine',
        image: 'https://i.postimg.cc/2jMWQ6pB/download-2.jpg',
        price: '₦10.23',
        rating: [1, 1, 1, 1, 1],
        colors: ['blank', 'blue', 'brown'],
        description: ' wash your clothes with good washing machine that last for ever.'
    },
    {
        id: 'frige',
        name: 'frige',
        image: 'https://i.postimg.cc/RhVP7YQk/hs1.png',
        price: '₦15.24',
        rating: [1, 1, 1, 1, 1],
        colors: ['blank', 'red', 'blue'],
        description: 'frige to cool you food and other things .'
    },
    {
        id: 'frige',
        name: 'frige',
        image: 'https://i.postimg.cc/zD02zJq8/na2.png',
        price: '₦09.28',
        rating: [1, 0, 0, 0, 0],
        colors: ['blank', 'grey', 'brown'],
        description: 'frige to cool you food and other things.'
    }
];

window.getProductById = function (id) {
    return products.find(product => product.id === id);
};

window.displayProduct = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = getProductById(productId);

    if (product) {
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;

        const ratingContainer = document.getElementById('product-rating');
        ratingContainer.innerHTML = '';
        product.rating.forEach(star => {
            const i = document.createElement('i');
            i.className = star ? 'bx bxs-star' : 'bx bx-star';
            ratingContainer.appendChild(i);
        });

        const colorsContainer = document.getElementById('product-colors');
        colorsContainer.innerHTML = '';
        product.colors.forEach(color => {
            const i = document.createElement('i');
            i.className = `bx bxs-circle ${color}`;
            colorsContainer.appendChild(i);
        });

        updateCartSummary();
    } else {
        document.getElementById('product-name').textContent = 'Product Not Found';
    }
};

window.contactWhatsApp = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = getProductById(productId);
    if (product) {
        const message = `Hello, I'm interested in purchasing the ${product.name} priced at ${product.price}. Please provide further details.`;
        const whatsappUrl = `https://wa.me/+2348142259939?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
        orderHistory.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

        const ownerMessage = `New order inquiry: ${product.name} at ${product.price}`;
        const ownerWhatsappUrl = `https://wa.me/+2348142259939?text=${encodeURIComponent(ownerMessage)}`;
        window.open(ownerWhatsappUrl, '_blank');
    }
};

window.addToCart = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = getProductById(productId);
    if (product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const currentCustomer = JSON.parse(localStorage.getItem('currentCustomer'));
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                email: currentCustomer?.email || 'guest',
                quantity: 1,
                timestamp: new Date().toISOString()
            });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
        updateCartSummary();

        const ownerMessage = `Item added to cart: ${product.name} at ${product.price} (Qty: ${existingItem ? existingItem.quantity + 1 : 1})`;
        const ownerWhatsappUrl = `https://wa.me/+2348142259939?text=${encodeURIComponent(ownerMessage)}`;
        window.open(ownerWhatsappUrl, '_blank');
    }
};

window.updateCartSummary = function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        const li = document.createElement('li');
        li.className = 'empty-cart';
        li.textContent = 'Your cart is empty';
        cartItems.appendChild(li);
    } else {
        cart.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${item.name} (Qty: ${item.quantity})</span><span>${item.price}</span>`;
            cartItems.appendChild(li);
        });
    }
};

window.sendCartToWhatsApp = function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    const cartMessage = cart.map(item => `${item.name} (Qty: ${item.quantity}) - ${item.price}`).join('\n');
    const message = `Cart Contents:\n${cartMessage}\nPlease confirm order details.`;
    const whatsappUrl = `https://wa.me/+2348142259939?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
};

window.navigateToHome = function () {
    try {
        window.location.assign('/index.html#home');
    } catch (e) {
        console.error('Navigation failed:', e);
    }
};

$(document).ready(function () {
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });

    $(".menu-items a").click(function () {
        $("#checkbox").prop("checked", false);
    });

    function initializePhoneInput() {
        if ($("#customer-phone").length) {
            $("#customer-phone").intlTelInput({
                initialCountry: "ng",
                separateDialCode: true,
                preferredCountries: ["ng"],
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
            });
            if (!$("#customer-phone").val()) {
                $("#customer-phone").intlTelInput("setNumber", "+234");
            }
        }
    }

    function initializeNiceSelect() {
        if ($("select").length) {
            $("select").niceSelect();
        }
    }

    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }

    function populateBlogPosts() {
        const newArrivals = [
            {
                id: 'hometheater',
                name: 'home theater',
                image: 'https://i.postimg.cc/J0sPT45d/download-5.jpg',
                description: 'Comfortable home theater made for high-quality and to give you best sounds. #NewArrival',
                price: '₦10.23'
            },
            {
                id: 'solarproduct',
                name: 'solar products',
                image: 'https://i.postimg.cc/d0SC5RNw/download.webp',
                description: 'Trendy solar product is in our store get the best here.',
                price: '₦ depends on the product'
            },
            {
                id: 'iron',
                name: 'pressing iron',
                image: 'https://i.postimg.cc/6qcQTtvz/download-3.jpg',
                description: 'high quality pressing iron for your cloths. #NewArrival',
                price: '₦14000.67'
            }
        ];

        const samplePosts = [
            {
                message: "Introducing our latest product! #NewArrival",
                image: "https://via.placeholder.com/600x400?text=Product+1",
                permalink_url: "https://www.facebook.com/profile.php?id=100069211031689",
                created_time: "2025-05-01T10:00:00Z"
            },
            {
                message: "Check out this new product in our store! #NewArrival",
                image: "https://via.placeholder.com/600x400?text=Product+2",
                permalink_url: "https://www.facebook.com/profile.php?id=100069211031689",
                created_time: "2025-04-28T15:00:00Z"
            },
            {
                message: "General update about our store.",
                image: "https://via.placeholder.com/600x400?text=Update",
                permalink_url: "https://www.facebook.com/profile.php?id=100069211031689",
                created_time: "2025-04-25T12:00:00Z"
            }
        ];

        const blogContainer = $('#blog-posts');
        if (blogContainer.length) {
            blogContainer.empty();

            const filteredArrivals = newArrivals.filter(post => 
                post.description.toLowerCase().includes('#newarrival') || 
                post.description.toLowerCase().includes('new product')
            );

            filteredArrivals.forEach(post => {
                const postHtml = `
                    <div class="blog-post">
                        <img src="${post.image}" alt="${post.name}">
                        <div class="blog-post-content">
                            <h3>${post.name}</h3>
                            <p>${truncateText(post.description, 100)} Price: ${post.price}</p>
                            <a href="/product-detail.html?id=${post.id}">Shop Now</a>
                        </div>
                    </div>
                `;
                blogContainer.append(postHtml);
            });

            if (filteredArrivals.length === 0) {
                const filteredSamplePosts = samplePosts.filter(post => 
                    post.message.toLowerCase().includes('#newarrival') || 
                    post.message.toLowerCase().includes('new product')
                );
                filteredSamplePosts.forEach(post => {
                    const postHtml = `
                        <div class="blog-post">
                            <img src="${post.image}" alt="Product Image">
                            <div class="blog-post-content">
                                <h3>New Product Arrival</h3>
                                <p>${truncateText(post.message, 100)}</p>
                                <a href="${post.permalink_url}" target="_blank">View on Facebook</a>
                            </div>
                        </div>
                    `;
                    blogContainer.append(postHtml);
                });
                if (filteredSamplePosts.length === 0) {
                    blogContainer.append('<p>No new product arrivals at this time.</p>');
                }
            }
        }
    }

    $("#contact-form").on("submit", function (event) {
        event.preventDefault();
        const formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            message: $("#message").val(),
            timestamp: new Date().toISOString()
        };

        let contactMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        contactMessages.push(formData);
        localStorage.setItem('contactMessages', JSON.stringify(contactMessages));

        $.ajax({
            url: 'https://formspree.io/f/xzbowpjq',
            method: 'POST',
            data: formData,
            dataType: 'json',
            success: function () {
                alert('Message sent successfully!');
                $("#contact-form")[0].reset();
            },
            error: function () {
                alert('Error sending message. Please try again.');
            }
        });
    });

    function enhanceAdminDashboard() {
        if ($('#dashboard').length) {
            const contactMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
            if (contactMessages.length > 0) {
                const messagesTable = $('<div class="table-wrapper"><table id="messages-table"><thead><tr><th>Name</th><th>Email</th><th>Message</th><th class="hide-mobile">Timestamp</th></tr></thead><tbody></tbody></table></div>');
                $('#dashboard').append('<h3>Contact Messages</h3>', messagesTable);
                const tbody = $('#messages-table tbody');
                contactMessages.forEach(msg => {
                    const row = `<tr><td>${msg.name}</td><td>${msg.email}</td><td>${msg.message}</td><td class="hide-mobile">${new Date(msg.timestamp).toLocaleString()}</td></tr>`;
                    tbody.append(row);
                });
            }
        }
    }

    if (localStorage.getItem('adminLoggedIn') === 'true') {
        document.getElementById('login-form')?.style.display = 'none';
        document.getElementById('dashboard')?.style.display = 'block';
        displayDashboard();
    }

    const currentCustomer = JSON.parse(localStorage.getItem('currentCustomer'));
    if (currentCustomer) {
        const welcomeMessage = document.getElementById('welcome-message');
        const registerSection = document.getElementById('register-section');
        const logoutButton = document.getElementById('logout-button');
        const checkCustomerButton = document.querySelector('button[onclick="checkCustomer()"]');
        if (welcomeMessage) {
            welcomeMessage.textContent = `Welcome, ${currentCustomer.email}! You will be redirected to the shop.`;
            welcomeMessage.style.display = 'block';
        }
        if (registerSection) registerSection.style.display = 'none';
        if (logoutButton) logoutButton.style.display = 'inline-block';
        if (checkCustomerButton) checkCustomerButton.style.display = 'none';
        setTimeout(() => { window.location.href = '/home.html'; }, 2000);
    }

    initializePhoneInput();
    initializeNiceSelect();
    populateBlogPosts();
    enhanceAdminDashboard();

    $(window).on("resize", function () {
        initializePhoneInput();
    });

    document.getElementById('forgot-password-link')?.addEventListener('click', function (e) {
        e.preventDefault();
        const email = document.getElementById('customer-email')?.value;
        const phone = document.getElementById('customer-phone')?.value;
        const error = document.getElementById('customer-error');
        if (!error) {
            console.warn('customer-error element not found');
            return;
        }
        if (!email || !phone) {
            error.textContent = 'Please enter email and phone number first';
            return;
        }
        const registerSection = document.getElementById('register-section');
        const forgotPasswordSection = document.getElementById('forgot-password-section');
        const resetPasswordButton = document.getElementById('reset-password-button');
        const checkCustomerButton = document.querySelector('button[onclick="checkCustomer()"]');
        if (registerSection) registerSection.style.display = 'none';
        if (forgotPasswordSection) forgotPasswordSection.style.display = 'block';
        if (resetPasswordButton) resetPasswordButton.style.display = 'inline-block';
        if (checkCustomerButton) checkCustomerButton.style.display = 'none';
    });
});