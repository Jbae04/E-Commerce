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

// Simple auth check
function isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
}

// Add login function
function login(email, password) {
    // For demo purposes - in real app would validate against backend
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('userEmail', email);
    window.location.href = 'index.html';
}

// Add signup function
function signup(email, password, name) {
    // For demo purposes
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', name);
    window.location.href = 'index.html';
}

// Add logout function
function logout() {
    localStorage.setItem('loggedIn', 'false');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    cart = [];
    saveCart();
    window.location.href = 'login.html';
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderProducts() {
    const productsContainer = document.getElementById('products');
    if (!productsContainer) return;

    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
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
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;

    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        return;
    }

    cartItems.innerHTML = cart.map((item, index) => `
        <div class="product-card">
            <img src="${item.image}" alt="${item.name}" class="product-image">
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <button class="nav-btn" onclick="removeFromCart(${index})">Remove</button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const cartTotal = document.getElementById('cart-total');
    if (cartTotal) {
        cartTotal.textContent = total.toFixed(2);
    }
}

function checkout() {
    if (!isLoggedIn()) {
        alert('Please log in to checkout');
        window.location.href = 'login.html';
        return;
    }

    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    alert('Thank you for your purchase!');
    cart = [];
    saveCart();
    updateCartUI();
}

// Keep your existing event listeners
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();

    // Update nav based on login status
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