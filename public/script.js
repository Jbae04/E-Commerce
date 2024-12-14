const products = [
    {
        id: 1,
        name: 'Nike Air Force 1',
        price: 115.00,
        image: 'img/AF1.png'
    },
    {
        id: 2,
        name: 'Nike Dunk Low Retro',
        price: 78.00,
        image: 'img/panda.png'
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let users = JSON.parse(localStorage.getItem('users')) || [];

function isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
}

function getCurrentUser() {
    const email = localStorage.getItem('userEmail');
    return users.find(user => user.email === email);
}

function login(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        alert('Invalid email or password');
        return false;
    }
    
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('userEmail', email);
    window.location.href = 'index.html';
    return true;
}

function logout() {
    localStorage.setItem('loggedIn', 'false');
    localStorage.removeItem('userEmail');
    cart = [];
    saveCart();
    window.location.href = 'login.html';
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function renderProducts() {
    const productsContainer = document.getElementById('products');
    if (!productsContainer) return;

    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="nav-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

function addToCart(productId) {
    if (!isLoggedIn()) {
        alert('Please log in to add items to cart');
        window.location.href = 'login.html';
        return;
    }
    
    const product = products.find(p => p.id === productId);
    cart.push(product);
    saveCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
}

function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }

    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    cartItems.innerHTML = cart.map((item, index) => `
        <div class="product-card">
            <img src="${item.image}" alt="${item.name}" class="product-image">
            <h3>${item.name}</h3>
            <p>$${item.price.toFixed(2)}</p>
            <button class="nav-btn" onclick="removeFromCart(${index})">Remove</button>
        </div>
    `).join('');

    const cartTotal = document.getElementById('cart-total');
    if (cartTotal) {
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
}

function updateProfileUI() {
    const profileContainer = document.querySelector('.profile-details');
    if (!profileContainer) return;

    const currentUser = getCurrentUser();
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    profileContainer.innerHTML = `
        <p>Name: ${currentUser.name}</p>
        <p>Email: ${currentUser.email}</p>
        <p>Address: ${currentUser.address || 'Not set'}</p>
        <p>Phone: ${currentUser.phone || 'Not set'}</p>
    `;

    const profileImage = document.querySelector('.profile-image img');
    if (profileImage) {
        profileImage.src = currentUser.image;
    }
}

function attachLoginHandler() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            login(email, password);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    updateProfileUI();
    attachLoginHandler();

    if (isLoggedIn()) {
        const navButtons = document.querySelector('.nav-buttons');
        if (navButtons) {
            navButtons.innerHTML += `<button onclick="logout()" class="nav-btn">Logout</button>`;
        }
    }
});

document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    const dropdown = document.getElementById('menuDropdown');
    dropdown.classList.toggle('show');
    const button = document.querySelector('.menu-toggle');
    if (button) { button.blur(); }
});