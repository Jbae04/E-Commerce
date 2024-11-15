const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 99.99,
        image: '/api/placeholder/200/200'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 149.99,
        image: '/api/placeholder/200/200'
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

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
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Thank you for your purchase!');
    cart = [];
    saveCart();
    updateCartUI();
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
});

document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    alert('Menu functionality coming soon!');
});

document.querySelector('.shop-now')?.addEventListener('click', () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});