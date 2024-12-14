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
    },
    {
        id: 3,
        name: 'Nike Air Max 1 Essential',
        price: 140.00,
        image: 'img/NIKEAIR.png'
    },
    {
        id: 4,
        name: 'Nike Air Max 270',
        price: 160.00,
        image: 'img/AIR2.png'
    },
    {
        id: 5,
        name: 'Knu Skool Suede Shoe',
        price: 75.00,
        image: 'img/vans1.png'
    },
    {
        id: 6,
        name: 'Nike Zoom Vomero 5',
        price: 160.00,
        image: 'img/NIKEZOOM.png'
    },
    {
        id: 7,
        name: 'Air Jordan 1 Mid',
        price: 125.00,
        image: 'img/AIRJORDAN1MID.png'
    },
    {
        id: 8,
        name: 'Nike Air Max 90',
        price: 130.00,
        image: 'img/airmax90.png'
    },
    {
        id: 9,
        name: 'Yeezy Slide Onyx',
        price: 103.00,
        image: 'img/YEEZYSLIDE.png'
    },
    {
        id: 10,
        name: 'Air Jordan 3 "Dark Iris"',
        price: 200.00,
        image: 'img/AJ3.jpg'
    },
    {
        id: 11,
        name: 'Air Jordan 5 Retro "White and Black"',
        price: 200.00, 
        image: 'img/AIRJORDAN5RETRO.png'
    },
    {
        id: 12,
        name: 'Samba OG Shoes',
        price: 100.00,
        image: 'img/SAMBAOG.png'
    },
    {
        id: 13,
        name: 'Ultraboost 1.0 Shoes',
        price: 180.00,
        image: 'img/panda.png'
    },
    {
        id: 14,
        name:'Chuck Taylor All Star Durable Neutrals CX EXP2',
        price: 85.00,
        image: 'img/CHUCKTAYLOR.png'
    },
    {
        id: 15,
        name: 'Converse Weapon Leather',
        price: 100.00,
        image: 'img/converse1.png'
    },
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

    const isHomePage = document.getElementById('HomePage') !== null;
    const productsToRender = isHomePage ? products.slice(0, 2) : products;

    productsContainer.innerHTML = productsToRender.map(product => `
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

function checkout() {
    if (!isLoggedIn()) {
        alert('Please log in to checkout');
        window.location.href = 'login.html';
        return;
    }
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }
    const currentUser = getCurrentUser();
    if (!currentUser) {
        alert('Please log in to checkout');
        window.location.href = 'login.html';
        return;
    }
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    const order = {
        id: Date.now(),
        items: [...cart],
        total: total,
        date: new Date().toISOString(),
        status: 'Processed'
    };
    
    let userOrders = JSON.parse(localStorage.getItem('userOrders')) || {};
    
    if (!userOrders[currentUser.email]) {
        userOrders[currentUser.email] = [];
    }
    userOrders[currentUser.email].push(order);
    
    localStorage.setItem('userOrders', JSON.stringify(userOrders));
    
    cart = [];
    saveCart();
    
    alert(`Order placed successfully! Total: $${total.toFixed(2)}`);
    window.location.href = 'index.html';
}

function updateOrderHistoryUI() {
    const orderListContainer = document.querySelector('.order-list');
    if (!orderListContainer) return;
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    const userOrders = JSON.parse(localStorage.getItem('userOrders')) || {};
    const orders = userOrders[currentUser.email] || [];
    if (orders.length === 0) {
        orderListContainer.innerHTML = '<p>No order history found.</p>';
        return;
    }
    orderListContainer.innerHTML = orders.map(order => `
        <div class="order-card">
            <p>Order ID: ${order.id}</p>
            <p>Date: ${new Date(order.date).toLocaleDateString()}</p>
            <p>Total: $${order.total.toFixed(2)}</p>
            <p>Status: ${order.status}</p>
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-item">
                        <img src="${item.image}" alt="${item.name}" class="order-item-image">
                        <span>${item.name}</span>
                        <span>$${item.price.toFixed(2)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    updateProfileUI();
    updateOrderHistoryUI();
    attachLoginHandler();

    if (isLoggedIn()) {
        const navButtons = document.querySelector('.nav-buttons');
        if (navButtons) {
            navButtons.innerHTML += `<button onclick="logout()" class="nav-btn">Logout</button>`;
        }
    }

    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const dropdown = document.getElementById('menuDropdown');
            dropdown.classList.toggle('show');
            menuToggle.blur();
        });
    }
});

document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    const dropdown = document.getElementById('menuDropdown');
    dropdown.classList.toggle('show');
    const button = document.querySelector('.menu-toggle');
    if (button) { button.blur();}  
});