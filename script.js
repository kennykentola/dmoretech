// const ADMIN_CREDENTIALS = { email: 'dmoretech44@gmail.com', password: 'dmoretech44' };

// const products = [
//     {
//         id: 'fan',
//         name: 'Fan',
//         image: 'https://i.postimg.cc/rmTVV1xk/th-1.jpg',
//         price: '₦25000.00',
//         rating: [1, 1, 1, 0, 0],
//         colors: ['red', 'blue', 'white'],
//         description: 'A high-quality fan with multiple speed settings and durable design, perfect for home or office use.'
//     },
//     {
//         id: 'oven',
//         name: 'oven',
//         image: 'https://i.postimg.cc/43WYS2j0/download-1.jpg',
//         price: '₦170000.24',
//         rating: [1, 1, 1, 0, 0],
//         colors: ['green', 'grey', 'brown'],
//         description: 'Stylish and comfortable oven suitable for all seasons, crafted with premium materials.'
//     },
//     {
//         id: 'airblower',
//         name: 'Air blower',
//         image: 'https://i.postimg.cc/Kzjn6vxC/shopping.webp',
//         price: '₦27000.24',
//         rating: [1, 1, 1, 1, 0],
//         colors: ['brown', 'green', 'blue'],
//         description: 'Elegant shirt with a modern fit, ideal for casual and semi-formal occasions.'
//     },
//     {
//         id: 'microwave',
//         name: 'microwave',
//         image: 'https://i.postimg.cc/cC7Mkg8h/images.jpg',
//         price: '₦43000.67',
//         rating: [1, 1, 1, 1, 1],
//         colors: ['red', 'grey', 'blue'],
//         description: 'Durable and fashionable microwave designed for comfort and easy home use.'
//     },
//     {
//         id: 'hometheater',
//         name: 'home theater',
//         image: 'https://i.postimg.cc/J0sPT45d/download-5.jpg',
//         price: '₦10000.23',
//         rating: [1, 1, 1, 1, 1],
//         colors: ['blank', 'blue', 'brown'],
//         description: 'Comfortable home theater made for high-quality and to give you best sounds.'
//     },
//     {
//         id: 'iron',
//         name: 'pressing iron',
//         image: 'https://i.postimg.cc/YSTRywjX/download-4.jpg',
//         price: '₦10900.28',
//         rating: [1, 1, 1, 0, 0],
//         colors: ['brown', 'red', 'green'],
//         description: 'high quality pressing iron for your cloths.'
//     },
//     {
//         id: 'solarproduct',
//         name: 'solar product',
//         image: 'https://i.postimg.cc/d0SC5RNw/download.webp',
//         price: '₦10600.24',
//         rating: [1, 1, 1, 1, 1],
//         colors: ['grey', 'blank', 'blank'],
//         description: 'Trendy solar product is in our storeget the the best here .'
//     },
//     {
//         id: 'iron2',
//         name: 'pressing iron',
//         image: 'https://i.postimg.cc/6qcQTtvz/download-3.jpg',
//         price: '₦43000.67',
//         rating: [1, 1, 1, 1, 1],
//         colors: ['grey', 'red', 'blue'],
//         description: 'high quality pressing iron for your cloths.'
//     },
//     {
//         id: 'ceilingfan',
//         name: 'Ceiling Fan',
//         image: 'https://i.postimg.cc/LXhDx8Hg/fans-ox-mega-62-ceiling-fan-1-0.webp',
//         price: '₦3700.24',
//         rating: [1, 1, 1, 1, 1],
//         colors: ['grey', 'black', 'blue'],
//         description: 'high quality ceiling fan to cool your home for you.'
//     },
//     {
//         id: 'washingmachine',
//         name: 'washing machine',
//         image: 'https://i.postimg.cc/2jMWQ6pB/download-2.jpg',
//         price: '₦10000.23',
//         rating: [1, 1, 1, 1, 1],
//         colors: ['blank', 'blue', 'brown'],
//         description: 'wash your clothes with good washing machine that last for ever.'
//     },
//     {
//         id: 'fridge1',
//         name: 'fridge',
//         image: 'https://i.postimg.cc/RhVP7YQk/hs1.png',
//         price: '₦1500.24',
//         rating: [1, 1, 1, 1, 1],
//         colors: ['blank', 'red', 'blue'],
//         description: 'fridge to cool you food and other things.'
//     },
//     {
//         id: 'fridge2',
//         name: 'fridge',
//         image: 'https://i.postimg.cc/zD02zJq8/na2.png',
//         price: '₦10900.28',
//         rating: [1, 0, 0, 0, 0],
//         colors: ['blank', 'grey', 'brown'],
//         description: 'fridge to cool you food and other things.'
//     }
// ];

// // Admin Functions
// window.adminLogin = function() {
//     const email = document.getElementById('admin-email')?.value;
//     const password = document.getElementById('admin-password')?.value;
//     const error = document.getElementById('login-error');

//     if (!error) {
//         console.warn('login-error element not found');
//         return;
//     }

//     if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
//         localStorage.setItem('adminLoggedIn', 'true');
//         document.getElementById('login-form').style.display = 'none';
//         document.getElementById('dashboard').style.display = 'block';
//         displayDashboard();
//         displayProducts();
//         displayCustomers();
//     } else {
//         error.textContent = 'Invalid email or password';
//     }
// };

// window.adminLogout = function() {
//     localStorage.removeItem('adminLoggedIn');
//     document.getElementById('login-form').style.display = 'block';
//     document.getElementById('dashboard').style.display = 'none';
//     document.getElementById('admin-email').value = '';
//     document.getElementById('admin-password').value = '';
//     document.getElementById('login-error').textContent = '';
// };

// // Product Functions
// window.addProduct = function() {
//     const id = document.getElementById('new-product-id')?.value;
//     const name = document.getElementById('new-product-name')?.value;
//     const imageInput = document.getElementById('new-product-image');
//     const price = document.getElementById('new-product-price')?.value;
//     const description = document.getElementById('new-product-description')?.value;

//     // Validation
//     if (!id || !name || !imageInput.files[0] || !price || !description) {
//         alert('All fields are required.');
//         return;
//     }

//     if (imageInput.files[0].size > 2 * 1024 * 1024) { // 2MB limit
//         alert('Image size should be less than 2MB');
//         return;
//     }

//     if (!price.match(/^₦?\d+(\.\d{1,2})?$/)) {
//         alert('Please enter a valid price (e.g., ₦27.24 or 27.24)');
//         return;
//     }

//     // Check for duplicate ID
//     let products = JSON.parse(localStorage.getItem('products')) || [];
//     if (products.some(p => p.id === id)) {
//         alert('Product ID already exists. Please use a unique ID.');
//         return;
//     }

//     // Process the image
//     const reader = new FileReader();
//     reader.onload = function(e) {
//         const newProduct = {
//             id: id,
//             name: name,
//             image: e.target.result,
//             price: price.startsWith('₦') ? price : `₦${price}`,
//             rating: [1, 1, 1, 1, 0],
//             colors: ['red', 'blue', 'green'],
//             description: description
//         };

//         products.push(newProduct);
//         localStorage.setItem('products', JSON.stringify(products));
        
//         // Clear the form
//         document.getElementById('new-product-id').value = '';
//         document.getElementById('new-product-name').value = '';
//         document.getElementById('new-product-image').value = '';
//         document.getElementById('new-product-price').value = '';
//         document.getElementById('new-product-description').value = '';
//         document.getElementById('image-preview').style.display = 'none';
        
//         // Refresh the display
//         displayProducts();
//         alert('Product added successfully!');
//     };
//     reader.onerror = function() {
//         alert('Error reading image file. Please try a different image.');
//     };
    
//     reader.readAsDataURL(imageInput.files[0]);
// };

// window.displayProducts = function() {
//     const products = JSON.parse(localStorage.getItem('products')) || [];
//     const productsTableBody = document.querySelector('#products-table tbody');

//     if (!productsTableBody) {
//         console.warn('#products-table tbody not found');
//         return;
//     }

//     productsTableBody.innerHTML = '';

//     if (products.length === 0) {
//         const row = document.createElement('tr');
//         row.innerHTML = `<td colspan="6">No products available</td>`;
//         productsTableBody.appendChild(row);
//         return;
//     }

//     products.forEach((product, index) => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${product.id}</td>
//             <td>${product.name}</td>
//             <td><img src="${product.image}" alt="${product.name}" style="width: 50px;"></td>
//             <td>${product.price}</td>
//             <td>${product.description}</td>
//             <td>
//                 <button class="edit-btn" onclick="openEditPriceModal('${product.id}', '${product.price}')">Edit Price</button>
//                 <button class="delete-btn" onclick="deleteProduct('products', ${index})">Delete</button>
//             </td>
//         `;
//         productsTableBody.appendChild(row);
//     });
// };

// // Customer Functions
// window.displayCustomers = function() {
//     const customers = JSON.parse(localStorage.getItem('customers')) || [];
//     const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
//     const customersTable = document.querySelector('#customers-table tbody');

//     if (!customersTable) {
//         console.warn('customers-table tbody not found');
//         return;
//     }

//     customersTable.innerHTML = '';

//     customers.forEach(customer => {
//         const products = findProductsByCustomer(customer.email);
//         const customerOrders = orderHistory.filter(item => item.email === customer.email);
//         const totalItems = customerOrders.length;

//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td><a href="mailto:${customer.email}">${customer.email}</a></td>
//             <td><a href="https://wa.me/${customer.phone.replace(/\D/g, '')}">${customer.phone}</a></td>
//             <td class="hide-mobile">${customer.address || 'Not provided'}</td>
//             <td>${products.join(', ') || 'None'} (Total Items: ${totalItems})</td>
//         `;
//         customersTable.appendChild(row);
//     });
// };

// window.checkCustomer = function() {
//     const email = document.getElementById('customer-email')?.value;
//     const phone = document.getElementById('customer-phone')?.value;
//     const error = document.getElementById('customer-error');

//     if (!error) {
//         console.warn('customer-error element not found');
//         return;
//     }

//     if (!email || !phone) {
//         error.textContent = 'Email and phone number are required';
//         return;
//     }

//     let customers = JSON.parse(localStorage.getItem('customers')) || [];
//     let customer = customers.find(c => c.email === email || c.phone === phone);

//     if (customer) {
//         error.textContent = 'This email or phone number is already registered. Please log in.';
//         const registerSection = document.getElementById('register-section');
//         const passwordSection = document.getElementById('password-section');
//         const loginButton = document.getElementById('login-button');
//         const checkCustomerButton = document.getElementById('checkCustomer');
//         if (registerSection) registerSection.style.display = 'none';
//         if (passwordSection) passwordSection.style.display = 'block';
//         if (loginButton) loginButton.style.display = 'inline-block';
//         if (checkCustomerButton) checkCustomerButton.style.display = 'none';
//     } else {
//         customerLogin();
//     }
// };

// window.customerLogin = function() {
//     const email = document.getElementById('customer-email')?.value;
//     const phone = document.getElementById('customer-phone')?.value;
//     const password = document.getElementById('customer-password')?.value || document.getElementById('login-password')?.value;
//     const address = document.getElementById('address-input')?.value;
//     const error = document.getElementById('customer-error');

//     if (!error) {
//         console.warn('customer-error element not found');
//         return;
//     }

//     let customers = JSON.parse(localStorage.getItem('customers')) || [];
//     let customer = customers.find(c => c.email === email && c.phone === phone);

//     if (customer) {
//         if (customer.password !== password) {
//             error.textContent = 'Incorrect password';
//             return;
//         }
//         localStorage.setItem('currentCustomer', JSON.stringify(customer));
//         updateCustomerData(email);
//         window.location.href = '/home.html';
//     } else {
//         customer = { email, phone, password, address };
//         customers.push(customer);
//         localStorage.setItem('customers', JSON.stringify(customers));
//         localStorage.setItem('currentCustomer', JSON.stringify(customer));
//         updateCustomerData(email);
//         window.location.href = '/home.html';
//     }
// };

// window.resetPassword = function() {
//     const email = document.getElementById('customer-email')?.value;
//     const phone = document.getElementById('customer-phone')?.value;
//     const verifyChars = document.getElementById('password-verify')?.value;
//     const newPassword = document.getElementById('new-password')?.value;
//     const error = document.getElementById('customer-error');

//     if (!error) {
//         console.warn('customer-error element not found');
//         return;
//     }

//     let customers = JSON.parse(localStorage.getItem('customers')) || [];
//     let customer = customers.find(c => c.email === email && c.phone === phone);

//     if (!customer) {
//         error.textContent = 'No account found with this email/phone';
//         return;
//     }

//     if (verifyChars.length < 2 || verifyChars.length > 3 || !customer.password.includes(verifyChars)) {
//         error.textContent = 'Invalid verification characters';
//         return;
//     }

//     customer.password = newPassword;
//     localStorage.setItem('customers', JSON.stringify(customers));
//     alert('Password reset successfully! Please log in.');
//     const forgotPasswordSection = document.getElementById('forgot-password-section');
//     const passwordSection = document.getElementById('password-section');
//     const loginButton = document.getElementById('login-button');
//     const resetPasswordButton = document.getElementById('reset-password-button');
//     if (forgotPasswordSection) forgotPasswordSection.style.display = 'none';
//     if (passwordSection) passwordSection.style.display = 'block';
//     if (loginButton) loginButton.style.display = 'inline-block';
//     if (resetPasswordButton) resetPasswordButton.style.display = 'none';
// };

// window.customerLogout = function() {
//     localStorage.removeItem('currentCustomer');
//     const welcomeMessage = document.getElementById('welcome-message');
//     const registerSection = document.getElementById('register-section');
//     const passwordSection = document.getElementById('password-section');
//     const forgotPasswordSection = document.getElementById('forgot-password-section');
//     const customerEmail = document.getElementById('customer-email');
//     const customerPhone = document.getElementById('customer-phone');
//     const customerPassword = document.getElementById('customer-password');
//     const addressInput = document.getElementById('address-input');
//     const loginPassword = document.getElementById('login-password');
//     const passwordVerify = document.getElementById('password-verify');
//     const newPassword = document.getElementById('new-password');
//     const logoutButton = document.getElementById('logout-button');
//     const loginButton = document.getElementById('login-button');
//     const resetPasswordButton = document.getElementById('reset-password-button');
//     const customerError = document.getElementById('customer-error');
//     const checkCustomerButton = document.querySelector('button[onclick="checkCustomer()"]');

//     if (welcomeMessage) welcomeMessage.style.display = 'none';
//     if (registerSection) registerSection.style.display = 'block';
//     if (passwordSection) passwordSection.style.display = 'none';
//     if (forgotPasswordSection) forgotPasswordSection.style.display = 'none';
//     if (customerEmail) customerEmail.value = '';
//     if (customerPhone) customerPhone.value = '';
//     if (customerPassword) customerPassword.value = '';
//     if (addressInput) addressInput.value = '';
//     if (loginPassword) loginPassword.value = '';
//     if (passwordVerify) passwordVerify.value = '';
//     if (newPassword) newPassword.value = '';
//     if (logoutButton) logoutButton.style.display = 'none';
//     if (loginButton) loginButton.style.display = 'none';
//     if (resetPasswordButton) resetPasswordButton.style.display = 'none';
//     if (customerError) customerError.textContent = '';
//     if (checkCustomerButton) checkCustomerButton.style.display = 'inline-block';
// };

// // Dashboard and Product Management
// window.displayDashboard = function() {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
//     const productsTable = document.querySelector('#cart-orders-table tbody');

//     if (!productsTable) {
//         console.warn('cart-orders-table tbody not found');
//         return;
//     }

//     productsTable.innerHTML = '';

//     if (cart.length === 0 && orderHistory.length === 0) {
//         const row = document.createElement('tr');
//         row.innerHTML = `<td colspan="7">No cart or order items available</td>`;
//         productsTable.appendChild(row);
//         return;
//     }

//     // Display cart items
//     cart.forEach((item, index) => {
//         const timestamp = item.timestamp ? new Date(item.timestamp).toLocaleString() : 'N/A';
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${item.id}</td>
//             <td>${item.name}</td>
//             <td>${item.price}</td>
//             <td>${item.quantity}</td>
//             <td class="hide-mobile">${timestamp}</td>
//             <td>${item.email || 'Unknown'}</td>
//             <td>${item.phone || 'Not provided'} | ${item.address || 'Not provided'}</td>
//             <td><button class="delete-btn" onclick="deleteProduct('cart', ${index})">Delete</button></td>
//         `;
//         productsTable.appendChild(row);
//     });

//     // Display order history items
//     orderHistory.forEach((item, index) => {
//         const timestamp = item.timestamp ? new Date(item.timestamp).toLocaleString() : 'N/A';
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${item.id}</td>
//             <td>${item.name}</td>
//             <td>${item.price}</td>
//             <td>1</td>
//             <td class="hide-mobile">${timestamp}</td>
//             <td>${item.email || 'Unknown'}</td>
//             <td>${item.phone || 'Not provided'} | ${item.address || 'Not provided'}</td>
//             <td><button class="delete-btn" onclick="deleteProduct('orderHistory', ${index})">Delete</button></td>
//         `;
//         productsTable.appendChild(row);
//     });
// };

// window.openEditPriceModal = function(productId, currentPrice) {
//     const modal = document.getElementById('edit-price-modal');
//     const priceInput = document.getElementById('edit-price-input');
//     const errorDiv = document.getElementById('edit-price-error');
//     if (modal && priceInput && errorDiv) {
//         priceInput.value = currentPrice.replace('₦', '');
//         errorDiv.textContent = '';
//         modal.style.display = 'block';
//         window.currentProductId = productId;
//     } else {
//         console.error('Modal elements not found');
//     }
// };

// window.savePrice = function() {
//     const productId = window.currentProductId;
//     const newPrice = document.getElementById('edit-price-input')?.value.trim();
//     const errorDiv = document.getElementById('edit-price-error');

//     if (!errorDiv) {
//         console.error('edit-price-error element not found');
//         return;
//     }

//     if (!newPrice.match(/^\d+(\.\d{1,2})?$/)) {
//         errorDiv.textContent = 'Please enter a valid price (e.g., 27.24)';
//         return;
//     }

//     const formattedPrice = `₦${newPrice}`;
//     editProductPrice(productId, formattedPrice);
//     closeModal();
// };

// window.editProductPrice = function(productId, newPrice) {
//     let products = JSON.parse(localStorage.getItem('products')) || [];
//     const productIndex = products.findIndex(p => p.id === productId);
//     if (productIndex !== -1) {
//         products[productIndex].price = newPrice;
//         localStorage.setItem('products', JSON.stringify(products));
//         displayProducts();
//         alert(`Price for product ${products[productIndex].name} updated to ${newPrice}`);
//     } else {
//         console.warn(`Product with ID ${productId} not found in localStorage`);
//     }
// };

// window.closeModal = function() {
//     const modal = document.getElementById('edit-price-modal');
//     const priceInput = document.getElementById('edit-price-input');
//     const errorDiv = document.getElementById('edit-price-error');
//     if (modal && priceInput && errorDiv) {
//         modal.style.display = 'none';
//         priceInput.value = '';
//         errorDiv.textContent = '';
//         delete window.currentProductId;
//     } else {
//         console.error('Modal elements not found');
//     }
// };

// window.deleteProduct = function(source, index) {
//     if (!confirm('Are you sure you want to delete this item?')) return;
//     let items = JSON.parse(localStorage.getItem(source)) || [];
//     items.splice(index, 1);
//     localStorage.setItem(source, JSON.stringify(items));
//     if (source === 'products') {
//         displayProducts();
//     } else {
//         displayDashboard();
//     }
// };

// // Helper Functions
// window.findCustomerByProduct = function(productId) {
//     const customers = JSON.parse(localStorage.getItem('customers')) || [];
//     return customers.find(customer => {
//         const cart = JSON.parse(localStorage.getItem('cart')) || [];
//         const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
//         return cart.some(item => item.id === productId && item.email === customer.email) ||
//                orderHistory.some(item => item.id === productId && item.email === customer.email);
//     });
// };

// window.findProductsByCustomer = function(email) {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
//     const products = [];
//     cart.forEach(item => {
//         if (item.email === email) products.push(`${item.name} (Cart)`);
//     });
//     orderHistory.forEach(item => {
//         if (item.email === email) products.push(`${item.name} (Order)`);
//     });
//     return products;
// };

// window.getProductById = function(id) {
//     const localProducts = JSON.parse(localStorage.getItem('products')) || [];
//     return localProducts.find(product => product.id === id) || products.find(product => product.id === id);
// };

// window.displayProduct = function() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const productId = urlParams.get('id');
//     const product = getProductById(productId);

//     if (!product) {
//         console.error('Product not found for ID:', productId);
//         const nameElement = document.getElementById('product-name');
//         if (nameElement) nameElement.textContent = 'Product Not Found';
//         return;
//     }

//     const elements = {
//         image: document.getElementById('product-image'),
//         name: document.getElementById('product-name'),
//         price: document.getElementById('product-price'),
//         description: document.getElementById('product-description'),
//         rating: document.getElementById('product-rating'),
//         colors: document.getElementById('product-colors')
//     };

//     for (const [key, element] of Object.entries(elements)) {
//         if (!element) {
//             console.warn(`Element #product-${key} not found in DOM`);
//             return;
//         }
//     }

//     elements.image.src = product.image;
//     elements.image.onerror = () => {
//         console.error('Failed to load image:', product.image);
//         elements.image.alt = 'Image not available';
//     };
//     elements.name.textContent = product.name;
//     elements.price.textContent = product.price;
//     elements.description.textContent = product.description;

//     elements.rating.innerHTML = '';
//     product.rating.forEach(star => {
//         const i = document.createElement('i');
//         i.className = star ? 'bx bxs-star' : 'bx bx-star';
//         elements.rating.appendChild(i);
//     });

//     elements.colors.innerHTML = '';
//     product.colors.forEach(color => {
//         const i = document.createElement('i');
//         i.className = `bx bxs-circle ${color}`;
//         elements.colors.appendChild(i);
//     });

//     updateCartSummary();
// };

// window.contactWhatsApp = function() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const productId = urlParams.get('id');
//     const product = getProductById(productId);
//     if (product) {
//         const message = `Hello, I'm interested in purchasing the ${product.name} priced at ${product.price}. Please provide further details.`;
//         const whatsappUrl = `https://wa.me/+2348142259939?text=${encodeURIComponent(message)}`;
//         window.open(whatsappUrl, '_blank');

//         let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
//         const currentCustomer = JSON.parse(localStorage.getItem('currentCustomer'));
//         orderHistory.push({
//             id: product.id,
//             name: product.name,
//             price: product.price,
//             image: product.image,
//             email: currentCustomer?.email || 'guest',
//             phone: currentCustomer?.phone || 'Not provided',
//             address: currentCustomer?.address || 'Not provided',
//             timestamp: new Date().toISOString()
//         });
//         localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

//         const ownerMessage = `New order inquiry: ${product.name} at ${product.price}`;
//         const ownerWhatsappUrl = `https://wa.me/+2348142259939?text=${encodeURIComponent(ownerMessage)}`;
//         window.open(ownerWhatsappUrl, '_blank');
//     }
// };

// window.addToCart = function() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const productId = urlParams.get('id');
//     const product = getProductById(productId);
//     if (product) {
//         let cart = JSON.parse(localStorage.getItem('cart')) || [];
//         const currentCustomer = JSON.parse(localStorage.getItem('currentCustomer'));

//         // Prompt for customer details if not logged in
//         let email = currentCustomer?.email || prompt('Please enter your email:');
//         let phone = currentCustomer?.phone || prompt('Please enter your phone number:');
//         let address = currentCustomer?.address || prompt('Please enter your address:');

//         if (!email || !phone) {
//             alert('Email and phone are required to add to cart.');
//             return;
//         }

//         const cartItem = {
//             id: product.id,
//             name: product.name,
//             price: product.price,
//             image: product.image,
//             email: email,
//             phone: phone,
//             address: address || 'Not provided',
//             quantity: 1,
//             timestamp: new Date().toISOString()
//         };

//         const existingItem = cart.find(item => item.id === product.id && item.email === email);
//         if (existingItem) {
//             existingItem.quantity += 1;
//         } else {
//             cart.push(cartItem);
//         }

//         localStorage.setItem('cart', JSON.stringify(cart));
//         alert(`${product.name} added to cart!`);
//         updateCartSummary();

//         const ownerMessage = `Item added to cart: ${product.name} at ${product.price} (Qty: ${existingItem ? existingItem.quantity : 1}) by ${email}`;
//         const ownerWhatsappUrl = `https://wa.me/+2348142259939?text=${encodeURIComponent(ownerMessage)}`;
//         window.open(ownerWhatsappUrl, '_blank');
//     }
// };

// window.updateCartSummary = function() {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartItems = document.getElementById('cart-items');
//     if (!cartItems) return;

//     cartItems.innerHTML = '';

//     if (cart.length === 0) {
//         const li = document.createElement('li');
//         li.className = 'empty-cart';
//         li.textContent = 'Your cart is empty';
//         cartItems.appendChild(li);
//         return;
//     }

//     const aggregatedCart = {};
//     cart.forEach(item => {
//         if (!aggregatedCart[item.id]) {
//             aggregatedCart[item.id] = {
//                 name: item.name,
//                 price: item.price,
//                 quantity: 0
//             };
//         }
//         aggregatedCart[item.id].quantity += item.quantity;
//     });

//     Object.values(aggregatedCart).forEach(item => {
//         const li = document.createElement('li');
//         li.innerHTML = `<span>${item.name} (Qty: ${item.quantity})</span><span>${item.price}</span>`;
//         cartItems.appendChild(li);
//     });
// };

// window.sendCartToWhatsApp = function() {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const currentCustomer = JSON.parse(localStorage.getItem('currentCustomer'));
//     if (cart.length === 0) {
//         alert('Your cart is empty!');
//         return;
//     }

//     const aggregatedCart = {};
//     cart.forEach(item => {
//         if (!aggregatedCart[item.id]) {
//             aggregatedCart[item.id] = {
//                 name: item.name,
//                 price: item.price,
//                 quantity: 0
//             };
//         }
//         aggregatedCart[item.id].quantity += item.quantity;
//     });

//     const cartMessage = Object.values(aggregatedCart)
//         .map(item => `${item.name} (Qty: ${item.quantity}) - ${item.price}`)
//         .join('\n');
//     const message = `Cart Contents:\n${cartMessage}\nCustomer: ${currentCustomer?.email || 'Guest'}\nPhone: ${currentCustomer?.phone || 'Not provided'}\nAddress: ${currentCustomer?.address || 'Not provided'}\nPlease confirm order details.`;
//     const whatsappUrl = `https://wa.me/+2348142259939?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');

//     localStorage.setItem('cart', JSON.stringify([]));
//     updateCartSummary();
// };

// window.updateCustomerData = function(email) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart = cart.map(item => ({ ...item, email, timestamp: item.timestamp || new Date().toISOString() }));
//     localStorage.setItem('cart', JSON.stringify(cart));

//     let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
//     orderHistory = orderHistory.map(item => ({ ...item, email, timestamp: item.timestamp || new Date().toISOString() }));
//     localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
// };

// window.navigateToHome = function() {
//     try {
//         window.location.assign('/index.html#home');
//     } catch (e) {
//         console.error('Navigation failed:', e);
//     }
// };

// // jQuery Initialization and Home Page Enhancements
// $(document).ready(function() {
//     if (typeof $ === 'undefined' || !$.fn.jquery) {
//         console.error('jQuery is not loaded');
//         return;
//     }

//     // Smooth scrolling for anchor links
//     $("a").on("click", function(event) {
//         if (this.hash !== "") {
//             event.preventDefault();
//             var hash = this.hash;
//             $("html, body").animate(
//                 {
//                     scrollTop: $(hash).offset().top,
//                 },
//                 800,
//                 function() {
//                     window.location.hash = hash;
//                 }
//             );
//         }
//     });

//     // Close mobile menu on link click
//     $(".menu-items a").click(function() {
//         $("#checkbox").prop("checked", false);
//     });

//     // Initialize phone input
//     function initializePhoneInput() {
//         if ($("#customer-phone").length) {
//             $("#customer-phone").intlTelInput({
//                 initialCountry: "ng",
//                 separateDialCode: true,
//                 preferredCountries: ["ng"],
//                 utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
//             });
//             if (!$("#customer-phone").val()) {
//                 $("#customer-phone").intlTelInput("setNumber", "+234");
//             }
//         }
//     }

//     // Initialize nice select
//     function initializeNiceSelect() {
//         if ($("select").length) {
//             $("select").niceSelect();
//         }
//     }

//     // Truncate text for blog posts
//     function truncateText(text, maxLength) {
//         if (text.length > maxLength) {
//             return text.substring(0, maxLength) + '...';
//         }
//         return text;
//     }

//     // Populate blog posts
//     function populateBlogPosts() {
//         const products = JSON.parse(localStorage.getItem('products')) || window.products || [];
//         const blogContainer = $('#blog-posts');
//         if (blogContainer.length) {
//             blogContainer.empty();

//             products.forEach(post => {
//                 const postHtml = `
//                     <div class="blog-post">
//                         <img src="${post.image}" alt="${post.name}">
//                         <div class="blog-post-content">
//                             <h3>${post.name}</h3>
//                             <p>${truncateText(post.description, 100)} Price: ${post.price}</p>
//                             <a href="/product-detail.html?id=${post.id}">Shop Now</a>
//                         </div>
//                     </div>
//                 `;
//                 blogContainer.append(postHtml);
//             });

//             if (products.length === 0) {
//                 blogContainer.append('<p>No new product arrivals at this time.</p>');
//             }
//         }
//     }

//     // Enhance admin dashboard with contact messages
//     function enhanceAdminDashboard() {
//         if (typeof $ === 'undefined' || !$.fn.jquery) {
//             console.error('jQuery is not loaded');
//             return;
//         }

//         const dashboard = $('#dashboard');
//         if (!dashboard.length) {
//             console.warn('Dashboard element not found');
//             return;
//         }

//         const contactMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
//         if (contactMessages.length === 0) {
//             return;
//         }

//         try {
//             const messagesTable = $('<div class="table-wrapper"><table id="messages-table"><thead><tr><th>Name</th><th>Email</th><th>Message</th><th class="hide-mobile">Timestamp</th></tr></thead><tbody></tbody></table></div>');
//             dashboard.append('<h3>Contact Messages</h3>', messagesTable);

//             const tbody = $('#messages-table tbody');
//             if (!tbody.length) {
//                 console.warn('Messages table tbody not found');
//                 return;
//             }

//             contactMessages.forEach(msg => {
//                 if (!msg.name || !msg.email || !msg.message || !msg.timestamp) {
//                     console.warn('Invalid contact message:', msg);
//                     return;
//                 }
//                 const row = `<tr><td>${msg.name}</td><td><a href="mailto:${msg.email}">${msg.email}</a></td><td>${msg.message}</td><td class="hide-mobile">${new Date(msg.timestamp).toLocaleString()}</td></tr>`;
//                 tbody.append(row);
//             });
//         } catch (e) {
//             console.error('Error in enhanceAdminDashboard:', e);
//         }
//     }

//     // Populate product prices and new arrivals on home page
//     function populateHomePageProducts() {
//         const localProducts = JSON.parse(localStorage.getItem('products')) || [];
//         const allProducts = localProducts.length > 0 ? localProducts : window.products || [];

//         // Populate prices for top sales and hot sales
//         $('.price').each(function() {
//             const productId = $(this).data('product-id');
//             const product = allProducts.find(p => p.id === productId);
//             if (product) {
//                 $(this).prepend(product.price);
//                 const editButton = $(this).parent().find('.edit-price-btn');
//                 if (editButton.length) {
//                     editButton.attr('onclick', `openEditPriceModal('${productId}', '${product.price.replace('₦', '')}')`);
//                 }
//             } else {
//                 console.warn(`Product not found for ID: ${productId}`);
//             }
//         });

//         // Show edit price buttons for admin
//         if (localStorage.getItem('adminLoggedIn') === 'true') {
//             $('.edit-price').css('display', 'block');
//         }

//         // Populate new arrivals
//         const newArrivalsContainer = $('#new-arrivals');
//         if (newArrivalsContainer.length) {
//             newArrivalsContainer.empty();
//             const newProducts = allProducts.slice(-4).reverse();
//             newProducts.forEach(product => {
//                 const productHtml = `
//                     <div class="best-p1">
//                         <img src="${product.image}" alt="${product.name}">
//                         <div class="best-p1-txt">
//                             <div class="name-of-p">
//                                 <p>${product.name}</p>
//                             </div>
//                             <div class="rating">
//                                 ${product.rating.map(star => `<i class='bx ${star ? 'bxs-star' : 'bx-star'}'></i>`).join('')}
//                             </div>
//                             <div class="price" data-product-id="${product.id}">
//                                 ${product.price}
//                                 <div class="colors">
//                                     ${product.colors.map(color => `<i class='bx bxs-circle ${color}'></i>`).join('')}
//                                 </div>
//                             </div>
//                             <div class="buy-now">
//                                 <button><a href="/product-detail.html?id=${product.id}">Buy Now</a></button>
//                             </div>
//                             <div class="add-cart">
//                                 <button><a href="/product-detail.html?id=${product.id}">Add To Cart</a></button>
//                             </div>
//                             <div class="edit-price" style="display: ${localStorage.getItem('adminLoggedIn') === 'true' ? 'block' : 'none'};">
//                                 <button class="edit-price-btn" onclick="openEditPriceModal('${product.id}', '${product.price.replace('₦', '')}')">Edit Price</button>
//                             </div>
//                         </div>
//                     </div>
//                 `;
//                 newArrivalsContainer.append(productHtml);
//             });
//         }
//     }

//     // Handle contact form submission
//     $("#contact-form").on("submit", function(event) {
//         event.preventDefault();
//         const formData = {
//             name: $("#name").val(),
//             email: $("#email").val(),
//             message: $("#message").val(),
//             timestamp: new Date().toISOString()
//         };

//         let contactMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
//         contactMessages.push(formData);
//         localStorage.setItem('contactMessages', JSON.stringify(contactMessages));

//         $.ajax({
//             url: 'https://formspree.io/f/xzbowpjq',
//             method: 'POST',
//             data: formData,
//             dataType: 'json',
//             success: function() {
//                 alert('Message sent successfully!');
//                 $("#contact-form")[0].reset();
//             },
//             error: function() {
//                 alert('Error sending message. Please try again.');
//             }
//         });
//     });

//     // Handle image preview for new product
//     $('#new-product-image').on('change', function(e) {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const imagePreview = $('#image-preview');
//                 if (imagePreview.length) {
//                     imagePreview.attr('src', e.target.result);
//                     imagePreview.css('display', 'block');
//                 } else {
//                     console.warn('image-preview element not found');
//                 }
//             };
//             reader.onerror = function() {
//                 alert('Error reading image file. Please try a different image.');
//             };
//             reader.readAsDataURL(file);
//         }
//     });

//     // Handle admin login state
//     if (localStorage.getItem('adminLoggedIn') === 'true') {
//         $('#login-form').hide();
//         $('#dashboard').show();
//         displayDashboard();
//         displayProducts();
//         displayCustomers();
//     }

//     // Handle customer login state
//     const currentCustomer = JSON.parse(localStorage.getItem('currentCustomer'));
//     if (currentCustomer) {
//         const welcomeMessage = $('#welcome-message');
//         const registerSection = $('#register-section');
//         const logoutButton = $('#logout-button');
//         const checkCustomerButton = $('button[onclick="checkCustomer()"]');
//         if (welcomeMessage.length) {
//             welcomeMessage.text('Welcome, ' + currentCustomer.email + '! You will be redirected to the shop.');
//             welcomeMessage.show();
//         }
//         if (registerSection.length) registerSection.hide();
//         if (logoutButton.length) logoutButton.show();
//         if (checkCustomerButton.length) checkCustomerButton.hide();
//         setTimeout(() => { window.location.href = '/home.html'; }, 2000);
//     }

//     // Initialize components and populate content
//     initializePhoneInput();
//     initializeNiceSelect();
//     populateBlogPosts();
//     populateHomePageProducts();
//     enhanceAdminDashboard();

//     // Reinitialize phone input on resize
//     $(window).on("resize", function() {
//         initializePhoneInput();
//     });

//     // Handle forgot password link
//     $('#forgot-password-link').on('click', function(e) {
//         e.preventDefault();
//         const email = $('#customer-email').val();
//         const phone = $('#customer-phone').val();
//         const error = $('#customer-error');
//         if (!error.length) {
//             console.warn('customer-error element not found');
//             return;
//         }
//         if (!email || !phone) {
//             error.text('Please enter email and phone number first');
//             return;
//         }
//         $('#register-section').hide();
//         $('#forgot-password-section').show();
//         $('#reset-password-button').show();
//         $('button[onclick="checkCustomer()"]').hide();
//     });
// });















const ADMIN_CREDENTIALS = { email: 'dmoretech44@gmail.com', password: 'dmoretech44' };

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
        rating: [1, 1, 1, 0, 0],
        colors: ['green', 'grey', 'brown'],
        description: 'Stylish and comfortable oven suitable for all seasons, crafted with premium materials.'
    },
    {
        id: 'airblower',
        name: 'Air blower',
        image: 'https://i.postimg.cc/Kzjn6vxC/shopping.webp',
        price: '₦27000.24',
        rating: [1, 1, 1, 1, 0],
        colors: ['brown', 'green', 'blue'],
        description: 'Elegant shirt with a modern fit, ideal for casual and semi-formal occasions.'
    },
    {
        id: 'microwave',
        name: 'microwave',
        image: 'https://i.postimg.cc/cC7Mkg8h/images.jpg',
        price: '₦43000.67',
        rating: [1, 1, 1, 1, 1],
        colors: ['red', 'grey', 'blue'],
        description: 'Durable and fashionable microwave designed for comfort and easy home use.'
    },
    {
        id: 'hometheater',
        name: 'home theater',
        image: 'https://i.postimg.cc/J0sPT45d/download-5.jpg',
        price: '₦10000.23',
        rating: [1, 1, 1, 1, 1],
        colors: ['blank', 'blue', 'brown'],
        description: 'Comfortable home theater made for high-quality and to give you best sounds.'
    },
    {
        id: 'iron',
        name: 'pressing iron',
        image: 'https://i.postimg.cc/YSTRywjX/download-4.jpg',
        price: '₦10900.28',
        rating: [1, 1, 1, 0, 0],
        colors: ['brown', 'red', 'green'],
        description: 'high quality pressing iron for your cloths.'
    },
    {
        id: 'solarproduct',
        name: 'solar product',
        image: 'https://i.postimg.cc/d0SC5RNw/download.webp',
        price: '₦10600.24',
        rating: [1, 1, 1, 1, 1],
        colors: ['grey', 'blank', 'blank'],
        description: 'Trendy solar product is in our storeget the the best here .'
    },
    {
        id: 'iron2',
        name: 'pressing iron',
        image: 'https://i.postimg.cc/6qcQTtvz/download-3.jpg',
        price: '₦43000.67',
        rating: [1, 1, 1, 1, 1],
        colors: ['grey', 'red', 'blue'],
        description: 'high quality pressing iron for your cloths.'
    },
    {
        id: 'ceilingfan',
        name: 'Ceiling Fan',
        image: 'https://i.postimg.cc/LXhDx8Hg/fans-ox-mega-62-ceiling-fan-1-0.webp',
        price: '₦3700.24',
        rating: [1, 1, 1, 1, 1],
        colors: ['grey', 'black', 'blue'],
        description: 'high quality ceiling fan to cool your home for you.'
    },
    {
        id: 'washingmachine',
        name: 'washing machine',
        image: 'https://i.postimg.cc/2jMWQ6pB/download-2.jpg',
        price: '₦10000.23',
        rating: [1, 1, 1, 1, 1],
        colors: ['blank', 'blue', 'brown'],
        description: 'wash your clothes with good washing machine that last for ever.'
    },
    {
        id: 'fridge1',
        name: 'fridge',
        image: 'https://i.postimg.cc/bYQ9C9RM/Whats-App-Image-2025-05-07-at-18-22-26-b132a784.jpg',
        price: '₦1500.24',
        rating: [1, 1, 1, 1, 1],
        colors: ['blank', 'red', 'blue'],
        description: 'fridge to cool you food and other things.'
    },
    {
        id: 'fridge2',
        name: 'fridge',
        image: 'https://i.postimg.cc/B6f1HRRv/download-1.webp',
        price: '₦10900.28',
        rating: [1, 0, 0, 0, 0],
        colors: ['blank', 'grey', 'brown'],
        description: 'fridge to cool you food and other things.'
    }
];

// Admin Functions
window.adminLogin = function() {
    const email = document.getElementById('admin-email')?.value;
    const password = document.getElementById('admin-password')?.value;
    const error = document.getElementById('login-error');

    if (!error) {
        console.error('login-error element not found');
        return;
    }

    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
        try {
            localStorage.setItem('adminLoggedIn', 'true');
            console.log('Admin login successful, adminLoggedIn set to true');
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('dashboard').style.display = 'block';
            displayDashboard();
            displayProducts();
            displayCustomers();
        } catch (e) {
            console.error('Error setting localStorage:', e);
            error.textContent = 'Session storage error. Please enable localStorage.';
        }
    } else {
        error.textContent = 'Invalid email or password';
    }
};

window.adminLogout = function() {
    try {
        localStorage.removeItem('adminLoggedIn');
        console.log('Admin logged out, adminLoggedIn removed');
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('admin-email').value = '';
        document.getElementById('admin-password').value = '';
        document.getElementById('login-error').textContent = '';
    } catch (e) {
        console.error('Error removing localStorage:', e);
    }
};

// Product Functions
window.addProduct = function() {
    const id = document.getElementById('new-product-id')?.value;
    const name = document.getElementById('new-product-name')?.value;
    const imageInput = document.getElementById('new-product-image');
    const price = document.getElementById('new-product-price')?.value;
    const description = document.getElementById('new-product-description')?.value;

    // Validation
    if (!id || !name || !imageInput.files[0] || !price || !description) {
        alert('All fields are required.');
        return;
    }

    if (imageInput.files[0].size > 2 * 1024 * 1024) { // 2MB limit
        alert('Image size should be less than 2MB');
        return;
    }

    if (!price.match(/^₦?\d+(\.\d{1,2})?$/)) {
        alert('Please enter a valid price (e.g., ₦27.24 or 27.24)');
        return;
    }

    // Check for duplicate ID
    let products = JSON.parse(localStorage.getItem('products')) || [];
    if (products.some(p => p.id === id)) {
        alert('Product ID already exists. Please use a unique ID.');
        return;
    }

    // Process the image
    const reader = new FileReader();
    reader.onload = function(e) {
        const newProduct = {
            id: id,
            name: name,
            image: e.target.result,
            price: price.startsWith('₦') ? price : `₦${price}`,
            rating: [1, 1, 1, 1, 0],
            colors: ['red', 'blue', 'green'],
            description: description
        };

        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
        
        // Clear the form
        document.getElementById('new-product-id').value = '';
        document.getElementById('new-product-name').value = '';
        document.getElementById('new-product-image').value = '';
        document.getElementById('new-product-price').value = '';
        document.getElementById('new-product-description').value = '';
        const imagePreview = document.getElementById('image-preview');
        if (imagePreview) imagePreview.style.display = 'none';
        
        alert('Product added successfully!');
        window.location.replace('admin.html'); // Force fresh load
    };
    reader.onerror = function() {
        alert('Error reading image file. Please try a different image.');
    };
    
    reader.readAsDataURL(imageInput.files[0]);
};

window.displayProducts = function() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productsTableBody = document.querySelector('#products-table tbody');

    if (!productsTableBody) {
        console.warn('#products-table tbody not found');
        return;
    }

    productsTableBody.innerHTML = '';

    if (products.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="6">No products available</td>`;
        productsTableBody.appendChild(row);
        return;
    }

    products.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td><img src="${product.image}" alt="${product.name}" style="width: 50px;"></td>
            <td>${product.price}</td>
            <td>${product.description}</td>
            <td>
                <button class="edit-btn action-btn" onclick="openEditPriceModal('${product.id}', '${product.price}')">Edit Price</button>
                <button class="delete-btn action-btn" onclick="deleteProduct('products', ${index})">Delete</button>
            </td>
        `;
        productsTableBody.appendChild(row);
    });
};

// Customer Functions
window.displayCustomers = function() {
    const customers = JSON.parse(localStorage.getItem('customers')) || [];
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    const customersTable = document.querySelector('#customers-table tbody');

    if (!customersTable) {
        console.warn('customers-table tbody not found');
        return;
    }

    customersTable.innerHTML = '';

    customers.forEach(customer => {
        const products = findProductsByCustomer(customer.email);
        const customerOrders = orderHistory.filter(item => item.email === customer.email);
        const totalItems = customerOrders.length;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="mailto:${customer.email}">${customer.email}</a></td>
            <td><a href="https://wa.me/${customer.phone.replace(/\D/g, '')}">${customer.phone}</a></td>
            <td class="hide-mobile">${customer.address || 'Not provided'}</td>
            <td>${products.join(', ') || 'None'} (Total Items: ${totalItems})</td>
        `;
        customersTable.appendChild(row);
    });
};

window.checkCustomer = function() {
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

window.customerLogin = function() {
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
        window.location.href = 'home.html';
    } else {
        customer = { email, phone, password, address };
        customers.push(customer);
        localStorage.setItem('customers', JSON.stringify(customers));
        localStorage.setItem('currentCustomer', JSON.stringify(customer));
        updateCustomerData(email);
        window.location.href = 'home.html';
    }
};

window.resetPassword = function() {
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

window.customerLogout = function() {
    try {
        localStorage.removeItem('currentCustomer');
        console.log('Customer logged out, currentCustomer removed');
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
    } catch (e) {
        console.error('Error during customer logout:', e);
    }
};

// Dashboard and Product Management
window.displayDashboard = function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    const productsTable = document.querySelector('#cart-orders-table tbody');

    if (!productsTable) {
        console.warn('cart-orders-table tbody not found');
        return;
    }

    productsTable.innerHTML = '';

    if (cart.length === 0 && orderHistory.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="8">No cart or order items available</td>`;
        productsTable.appendChild(row);
    } else {
        // Display cart items
        cart.forEach((item, index) => {
            const timestamp = item.timestamp ? new Date(item.timestamp).toLocaleString() : 'N/A';
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td class="hide-mobile">${timestamp}</td>
                <td>${item.email || 'Unknown'}</td>
                <td>${item.phone || 'Not provided'} | ${item.address || 'Not provided'}</td>
                <td><button class="delete-btn action-btn" onclick="deleteProduct('cart', ${index})">Delete</button></td>
            `;
            productsTable.appendChild(row);
        });

        // Display order history items
        orderHistory.forEach((item, index) => {
            const timestamp = item.timestamp ? new Date(item.timestamp).toLocaleString() : 'N/A';
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>1</td>
                <td class="hide-mobile">${timestamp}</td>
                <td>${item.email || 'Unknown'}</td>
                <td>${item.phone || 'Not provided'} | ${item.address || 'Not provided'}</td>
                <td><button class="delete-btn action-btn" onclick="deleteProduct('orderHistory', ${index})">Delete</button></td>
            `;
            productsTable.appendChild(row);
        });
    }

    // Update summary widget
    $('#total-products').text((JSON.parse(localStorage.getItem('products')) || []).length);
    $('#total-cart').text(cart.length);
    $('#total-customers').text((JSON.parse(localStorage.getItem('customers')) || []).length);
};

window.openEditPriceModal = function(productId, currentPrice) {
    const modal = document.getElementById('edit-price-modal');
    const priceInput = document.getElementById('edit-price-input');
    const errorDiv = document.getElementById('edit-price-error');
    if (modal && priceInput && errorDiv) {
        priceInput.value = currentPrice.replace('₦', '');
        errorDiv.textContent = '';
        modal.style.display = 'block';
        window.currentProductId = productId;
    } else {
        console.error('Modal elements not found');
    }
};

window.savePrice = function() {
    const productId = window.currentProductId;
    const newPrice = document.getElementById('edit-price-input')?.value.trim();
    const errorDiv = document.getElementById('edit-price-error');

    if (!errorDiv) {
        console.error('edit-price-error element not found');
        return;
    }

    if (!newPrice.match(/^\d+(\.\d{1,2})?$/)) {
        errorDiv.textContent = 'Please enter a valid price (e.g., 27.24)';
        return;
    }

    const formattedPrice = `₦${newPrice}`;
    editProductPrice(productId, formattedPrice);
    closeModal();
};

window.editProductPrice = function(productId, newPrice) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        products[productIndex].price = newPrice;
        localStorage.setItem('products', JSON.stringify(products));
        displayProducts();
        alert(`Price for product ${products[productIndex].name} updated to ${newPrice}`);
    } else {
        console.warn(`Product with ID ${productId} not found in localStorage`);
    }
};

window.closeModal = function() {
    const modal = document.getElementById('edit-price-modal');
    const priceInput = document.getElementById('edit-price-input');
    const errorDiv = document.getElementById('edit-price-error');
    if (modal && priceInput && errorDiv) {
        modal.style.display = 'none';
        priceInput.value = '';
        errorDiv.textContent = '';
        delete window.currentProductId;
    } else {
        console.error('Modal elements not found');
    }
};

window.deleteProduct = function(source, index) {
    if (!confirm('Are you sure you want to delete this item?')) return;
    let items = JSON.parse(localStorage.getItem(source)) || [];
    items.splice(index, 1);
    localStorage.setItem(source, JSON.stringify(items));
    if (source === 'products') {
        displayProducts();
    } else {
        displayDashboard();
    }
};

// Helper Functions
window.findProductsByCustomer = function(email) {
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

window.getProductById = function(id) {
    const localProducts = JSON.parse(localStorage.getItem('products')) || [];
    return localProducts.find(product => product.id === id) || products.find(product => product.id === id);
};

window.displayProduct = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = getProductById(productId);

    if (!product) {
        console.error('Product not found for ID:', productId);
        const nameElement = document.getElementById('product-name');
        if (nameElement) nameElement.textContent = 'Product Not Found';
        return;
    }

    const elements = {
        image: document.getElementById('product-image'),
        name: document.getElementById('product-name'),
        price: document.getElementById('product-price'),
        description: document.getElementById('product-description'),
        rating: document.getElementById('product-rating'),
        colors: document.getElementById('product-colors')
    };

    for (const [key, element] of Object.entries(elements)) {
        if (!element) {
            console.warn(`Element #product-${key} not found in DOM`);
            return;
        }
    }

    elements.image.src = product.image;
    elements.image.onerror = () => {
        console.error('Failed to load image:', product.image);
        elements.image.alt = 'Image not available';
    };
    elements.name.textContent = product.name;
    elements.price.textContent = product.price;
    elements.description.textContent = product.description;

    elements.rating.innerHTML = '';
    product.rating.forEach(star => {
        const i = document.createElement('i');
        i.className = star ? 'bx bxs-star' : 'bx bx-star';
        elements.rating.appendChild(i);
    });

    elements.colors.innerHTML = '';
    product.colors.forEach(color => {
        const i = document.createElement('i');
        i.className = `bx bxs-circle ${color}`;
        elements.colors.appendChild(i);
    });

    updateCartSummary();
};

window.contactWhatsApp = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = getProductById(productId);
    if (product) {
        const message = `Hello, I'm interested in purchasing the ${product.name} priced at ${product.price}. Please provide further details.`;
        const whatsappUrl = `https://wa.me/+2348142259939?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
        const currentCustomer = JSON.parse(localStorage.getItem('currentCustomer'));
        orderHistory.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            email: currentCustomer?.email || 'guest',
            phone: currentCustomer?.phone || 'Not provided',
            address: currentCustomer?.address || 'Not provided',
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

        const ownerMessage = `New order inquiry: ${product.name} at ${product.price}`;
        const ownerWhatsappUrl = `https://wa.me/+2348142259939?text=${encodeURIComponent(ownerMessage)}`;
        window.open(ownerWhatsappUrl, '_blank');
    }
};

window.addToCart = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = getProductById(productId);
    if (product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const currentCustomer = JSON.parse(localStorage.getItem('currentCustomer'));

        // Prompt for customer details if not logged in
        let email = currentCustomer?.email || prompt('Please enter your email:');
        let phone = currentCustomer?.phone || prompt('Please enter your phone number:');
        let address = currentCustomer?.address || prompt('Please enter your address:');

        if (!email || !phone) {
            alert('Email and phone are required to add to cart.');
            return;
        }

        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            email: email,
            phone: phone,
            address: address || 'Not provided',
            quantity: 1,
            timestamp: new Date().toISOString()
        };

        const existingItem = cart.find(item => item.id === product.id && item.email === email);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push(cartItem);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
        updateCartSummary();

        const ownerMessage = `Item added to cart: ${product.name} at ${product.price} (Qty: ${existingItem ? existingItem.quantity : 1}) by ${email}`;
        const ownerWhatsappUrl = `https://wa.me/+2348142259939?text=${encodeURIComponent(ownerMessage)}`;
        window.open(ownerWhatsappUrl, '_blank');
    }
};

window.updateCartSummary = function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;

    cartItems.innerHTML = '';

    if (cart.length === 0) {
        const li = document.createElement('li');
        li.className = 'empty-cart';
        li.textContent = 'Your cart is empty';
        cartItems.appendChild(li);
        return;
    }

    const aggregatedCart = {};
    cart.forEach(item => {
        if (!aggregatedCart[item.id]) {
            aggregatedCart[item.id] = {
                name: item.name,
                price: item.price,
                quantity: 0
            };
        }
        aggregatedCart[item.id].quantity += item.quantity;
    });

    Object.values(aggregatedCart).forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${item.name} (Qty: ${item.quantity})</span><span>${item.price}</span>`;
        cartItems.appendChild(li);
    });
};

window.sendCartToWhatsApp = function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const currentCustomer = JSON.parse(localStorage.getItem('currentCustomer'));
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const aggregatedCart = {};
    cart.forEach(item => {
        if (!aggregatedCart[item.id]) {
            aggregatedCart[item.id] = {
                name: item.name,
                price: item.price,
                quantity: 0
            };
        }
        aggregatedCart[item.id].quantity += item.quantity;
    });

    const cartMessage = Object.values(aggregatedCart)
        .map(item => `${item.name} (Qty: ${item.quantity}) - ${item.price}`)
        .join('\n');
    const message = `Cart Contents:\n${cartMessage}\nCustomer: ${currentCustomer?.email || 'Guest'}\nPhone: ${currentCustomer?.phone || 'Not provided'}\nAddress: ${currentCustomer?.address || 'Not provided'}\nPlease confirm order details.`;
    const whatsappUrl = `https://wa.me/+2348142259939?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    localStorage.setItem('cart', JSON.stringify([]));
    updateCartSummary();
};

window.updateCustomerData = function(email) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.map(item => ({ ...item, email, timestamp: item.timestamp || new Date().toISOString() }));
    localStorage.setItem('cart', JSON.stringify(cart));

    let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    orderHistory = orderHistory.map(item => ({ ...item, email, timestamp: item.timestamp || new Date().toISOString() }));
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
};

window.navigateToHome = function() {
    try {
        window.location.assign('index.html#home');
        console.log('Navigating to index.html#home');
    } catch (e) {
        console.error('Navigation failed:', e);
    }
};

// Initialize admin dashboard on page load
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('admin.html')) {
        console.log('DOMContentLoaded on admin.html, checking adminLoggedIn:', localStorage.getItem('adminLoggedIn'));
        if (localStorage.getItem('adminLoggedIn') === 'true') {
            $('#login-form').hide();
            $('#dashboard').show();
            displayDashboard();
            displayProducts();
            displayCustomers();
        } else {
            $('#login-form').show();
            $('#dashboard').hide();
        }
    }
});

// jQuery Initialization and Home Page Enhancements
$(document).ready(function() {
    if (typeof $ === 'undefined' || !$.fn.jquery) {
        console.error('jQuery is not loaded');
        return;
    }

    // Smooth scrolling for anchor links within the same page
    $("a[href*='#']").on("click", function(event) {
        const href = $(this).attr('href');
        // Only apply smooth scrolling for same-page anchors (no path or same path)
        if (href.startsWith('#') || (href.includes('#') && window.location.pathname === href.split('#')[0])) {
            event.preventDefault();
            const hash = href.includes('#') ? href.split('#')[1] : href;
            const target = $('#' + hash);
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top
                    },
                    800,
                    function() {
                        window.location.hash = hash;
                    }
                );
            } else {
                console.warn('Anchor target not found:', hash);
            }
        } else {
            console.log('Navigating to:', href);
            // Allow default navigation for full-page links
        }
    });

    // Close mobile menu on link click
    $(".menu-items a").click(function() {
        $("#checkbox").prop("checked", false);
    });

    // Initialize phone input
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

    // Initialize nice select
    function initializeNiceSelect() {
        if ($("select").length) {
            $("select").niceSelect();
        }
    }

    // Truncate text for blog posts
    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }

    // Populate blog posts
    function populateBlogPosts() {
        const products = JSON.parse(localStorage.getItem('products')) || window.products || [];
        const blogContainer = $('#blog-posts');
        if (blogContainer.length) {
            blogContainer.empty();

            products.forEach(post => {
                const postHtml = `
                    <div class="blog-post">
                        <img src="${post.image}" alt="${post.name}">
                        <div class="blog-post-content">
                            <h3>${post.name}</h3>
                            <p>${truncateText(post.description, 100)} Price: ${post.price}</p>
                            <a href="product-detail.html?id=${post.id}">Shop Now</a>
                        </div>
                    </div>
                `;
                blogContainer.append(postHtml);
            });

            if (products.length === 0) {
                blogContainer.append('<p>No new product arrivals at this time.</p>');
            }
        }
    }

    // Enhance admin dashboard with contact messages
    function enhanceAdminDashboard() {
        if (typeof $ === 'undefined' || !$.fn.jquery) {
            console.error('jQuery is not loaded');
            return;
        }

        const dashboard = $('#dashboard');
        if (!dashboard.length) {
            console.warn('Dashboard element not found');
            return;
        }

        const contactMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        if (contactMessages.length === 0) {
            return;
        }

        try {
            const messagesTable = $('<div class="table-wrapper"><table id="messages-table"><thead><tr><th>Name</th><th>Email</th><th>Message</th><th class="hide-mobile">Timestamp</th></tr></thead><tbody></tbody></table></div>');
            dashboard.append('<h3>Contact Messages</h3>', messagesTable);

            const tbody = $('#messages-table tbody');
            if (!tbody.length) {
                console.warn('Messages table tbody not found');
                return;
            }

            contactMessages.forEach(msg => {
                if (!msg.name || !msg.email || !msg.message || !msg.timestamp) {
                    console.warn('Invalid contact message:', msg);
                    return;
                }
                const row = `<tr><td>${msg.name}</td><td><a href="mailto:${msg.email}">${msg.email}</a></td><td>${msg.message}</td><td class="hide-mobile">${new Date(msg.timestamp).toLocaleString()}</td></tr>`;
                tbody.append(row);
            });
        } catch (e) {
            console.error('Error in enhanceAdminDashboard:', e);
        }
    }

    // Populate product prices and new arrivals on home page
    function populateHomePageProducts() {
        const localProducts = JSON.parse(localStorage.getItem('products')) || [];
        const allProducts = localProducts.length > 0 ? localProducts : window.products || [];

        // Populate prices for top sales and hot sales
        $('.price').each(function() {
            const productId = $(this).data('product-id');
            const product = allProducts.find(p => p.id === productId);
            if (product) {
                $(this).prepend(product.price);
                const editButton = $(this).parent().find('.edit-price-btn');
                if (editButton.length) {
                    editButton.attr('onclick', `openEditPriceModal('${productId}', '${product.price.replace('₦', '')}')`);
                }
            } else {
                console.warn(`Product not found for ID: ${productId}`);
            }
        });

        // Show edit price buttons for admin
        if (localStorage.getItem('adminLoggedIn') === 'true') {
            $('.edit-price').css('display', 'block');
        }

        // Populate new arrivals
        const newArrivalsContainer = $('#new-arrivals');
        if (newArrivalsContainer.length) {
            newArrivalsContainer.empty();
            const newProducts = allProducts.slice(-4).reverse();
            newProducts.forEach(product => {
                const productHtml = `
                    <div class="best-p1">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="best-p1-txt">
                            <div class="name-of-p">
                                <p>${product.name}</p>
                            </div>
                            <div class="rating">
                                ${product.rating.map(star => `<i class='bx ${star ? 'bxs-star' : 'bx-star'}'></i>`).join('')}
                            </div>
                            <div class="price" data-product-id="${product.id}">
                                ${product.price}
                                <div class="colors">
                                    ${product.colors.map(color => `<i class='bx bxs-circle ${color}'></i>`).join('')}
                                </div>
                            </div>
                            <div class="buy-now">
                                <button><a href="product-detail.html?id=${product.id}">Buy Now</a></button>
                            </div>
                            <div class="add-cart">
                                <button><a href="product-detail.html?id=${product.id}">Add To Cart</a></button>
                            </div>
                            <div class="edit-price" style="display: ${localStorage.getItem('adminLoggedIn') === 'true' ? 'block' : 'none'};">
                                <button class="edit-price-btn" onclick="openEditPriceModal('${product.id}', '${product.price.replace('₦', '')}')">Edit Price</button>
                            </div>
                        </div>
                    </div>
                `;
                newArrivalsContainer.append(productHtml);
            });
        }
    }

    // Handle contact form submission
    $("#contact-form").on("submit", function(event) {
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
            url: 'https://formspree.io/f/mkgrzoko',
            method: 'POST',
            data: formData,
            dataType: 'json',
            success: function() {
                alert('Message sent successfully!');
                $("#contact-form")[0].reset();
            },
            error: function() {
                alert('Error sending message. Please try again.');
            }
        });
    });

    // Handle image preview only on add-product.html
    if (window.location.pathname.includes('add-product.html')) {
        $('#new-product-image').on('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const imagePreview = $('#image-preview');
                    if (imagePreview.length) {
                        imagePreview.attr('src', e.target.result);
                        imagePreview.css('display', 'block');
                    } else {
                        console.warn('image-preview element not found');
                    }
                };
                reader.onerror = function() {
                    alert('Error reading image file. Please try a different image.');
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Handle customer login state
    const currentCustomer = JSON.parse(localStorage.getItem('currentCustomer'));
    if (currentCustomer && window.location.pathname.includes('admin.html')) {
        $('#logout-button').show();
    }

    // Initialize components and populate content
    initializePhoneInput();
    initializeNiceSelect();
    populateBlogPosts();
    populateHomePageProducts();
    enhanceAdminDashboard();

    // Reinitialize phone input on resize
    $(window).on("resize", function() {
        initializePhoneInput();
    });

    // Handle forgot password link
    $('#forgot-password-link').on('click', function(e) {
        e.preventDefault();
        const email = $('#customer-email').val();
        const phone = $('#customer-phone').val();
        const error = $('#customer-error');
        if (!error.length) {
            console.warn('customer-error element not found');
            return;
        }
        if (!email || !phone) {
            error.text('Please enter email and phone number first');
            return;
        }
        $('#register-section').hide();
        $('#forgot-password-section').show();
        $('#reset-password-button').show();
        $('button[onclick="checkCustomer()"]').hide();
    });
});