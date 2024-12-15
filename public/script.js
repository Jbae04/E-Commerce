const products = [
  {
    id: 1,
    name: 'Nike Air Force 1',
    price: 115.00,
    description: `The Nike Air Force 1 is a modern take on the iconic design, featuring a leather upper and a durable rubber sole. With Air-Sole cushioning for added comfort, it’s suitable for both casual and active wear. The timeless style continues to appeal to sneaker enthusiasts worldwide.<br><br>Manufacture Year: 2021<br><br>Key Features: Leather upper, rubber sole, Air-Sole cushioning.`,
    image: 'img/AF1.png'
  },
  {
    id: 2,
    name: 'Nike Dunk Low Retro',
    price: 78.00,
    description: `The Nike Dunk Low Retro brings back the 1985 classic with updated construction. Its leather upper ensures durability, while the cushioned midsole offers all-day comfort. This re-release has captured sneakerheads’ attention with its clean design and versatile appeal.<br><br>Manufacture Year: 2020<br><br>Key Features: Leather upper, cushioned midsole, retro-inspired design.`,
    image: 'img/panda.png'
  },
  {
    id: 3,
    name: 'Nike Air Max 1 Essential',
    price: 140.00,
    description: `The Nike Air Max 1 Essential brings back the original Air Max with a visible Air-Sole unit for added cushioning. The leather and mesh upper ensures breathability and comfort, making it a versatile sneaker for everyday wear. This re-release celebrates the classic design with modern updates.<br><br>Manufacture Year: 2017<br><br>Key Features: Air-Sole unit, leather and mesh upper, durable rubber outsole.`,
    image: 'img/NIKEAIR.png'
  },
  {
    id: 4,
    name: 'Nike Air Max 270',
    price: 160.00,
    description: `The Nike Air Max 270 features a large Air-Sole unit in the heel, providing maximum cushioning and support. The breathable mesh upper enhances comfort, while the sleek design makes it a standout sneaker for both performance and casual wear.<br><br>Manufacture Year: 2018<br><br>Key Features: Air-Sole cushioning, breathable mesh upper, modern design.`,
    image: 'img/AIR2.png'
  },
  {
    id: 5,
    name: 'Knu Skool Suede Shoe',
    price: 75.00,
    description: `The Knu Skool Suede Shoe from Vans features a classic low-top design with a durable suede upper. The rubber sole ensures excellent grip, while the cushioned insole offers comfort for all-day wear. This re-release maintains the signature Vans aesthetic, perfect for casual wear and light skateboarding.<br><br>Manufacture Year: 2021<br><br>Key Features: Suede upper, rubber sole, cushioned insole.`,
    image: 'img/vans1.png'
  },
  {
    id: 6,
    name: 'Nike Zoom Vomero 5',
    price: 160.00,
    description: `The Nike Zoom Vomero 5 is designed with Zoom Air technology for responsive cushioning and a smooth ride. The breathable mesh upper provides ventilation, while the durable outsole delivers traction for various activities. This re-release keeps the original performance-focused features.<br><br>Manufacture Year: 2021<br><br>Key Features: Zoom Air technology, breathable mesh upper, durable rubber outsole.`,
    image: 'img/NIKEZOOM.png'
  },
  {
    id: 7,
    name: 'Air Jordan 1 Mid',
    price: 125.00,
    description: `The Air Jordan 1 Mid blends classic style with modern updates. Featuring a leather and synthetic upper, along with a cushioned midsole, it provides both comfort and style. This popular re-release retains the original silhouette with fresh colorways.<br><br>Manufacture Year: 2020<br><br>Key Features: Leather and synthetic upper, cushioned midsole, iconic design.`,
    image: 'img/AIRJORDAN1MID.png'
  },
  {
    id: 8,
    name: 'Nike Air Max 90',
    price: 130.00,
    description: `The Nike Air Max 90 is known for its visible Air-Sole unit in the heel, offering cushioning and comfort with every step. The leather and mesh upper provide durability and breathability, making it a popular choice for sneaker lovers.<br><br>Manufacture Year: 2017<br><br>Key Features: Air-Sole cushioning, leather and mesh upper, durable rubber outsole.`,
    image: 'img/airmax90.png'
  },
  {
    id: 9,
    name: 'Yeezy Slide Onyx',
    price: 103.00,
    description: `The Yeezy Slide Onyx is made from EVA foam, offering lightweight comfort and a minimalist design. The slip-on style provides ease of use, and its sleek look makes it a stylish choice for everyday wear.<br><br>Manufacture Year: 2020<br><br>Key Features: EVA foam, slip-on design, minimalist look.`,
    image: 'img/YEEZYSLIDE.png'
  },
  {
    id: 10,
    name: 'Air Jordan 3 "Dark Iris"',
    price: 200.00,
    description: `The Air Jordan 3 "Dark Iris" features a premium leather upper with a visible Air-Sole unit for cushioning and support. Its sleek design and bold colorway make it a standout re-release in the Jordan series.<br><br>Manufacture Year: 2022<br><br>Key Features: Leather upper, visible Air-Sole unit, iconic design.`,
    image: 'img/AJ3.jpg'
  },
  {
    id: 11,
    name: 'Air Jordan 5 Retro "White and Black"',
    price: 200.00,
    description: `The Air Jordan 5 Retro "White and Black" offers a blend of leather and synthetic materials for durability, while the visible Air-Sole unit provides cushioning. This re-release of the classic design retains its premium quality and style.<br><br>Manufacture Year: 2021<br><br>Key Features: Leather and synthetic upper, visible Air-Sole unit, retro design.`,
    image: 'img/AIRJORDAN5RETRO.png'
  },
  {
    id: 12,
    name: 'Samba OG Shoes',
    price: 100.00,
    description: `The Samba OG Shoes feature a durable leather upper and a rubber sole for long-lasting wear. With a classic silhouette, these sneakers offer comfort and versatility, making them suitable for both casual and athletic activities.<br><br>Manufacture Year: 2021<br><br>Key Features: Leather upper, rubber sole, classic design.`,
    image: 'img/SAMBAOG.png'
  },
  {
    id: 13,
    name: 'Ultraboost 1.0 Shoes',
    price: 180.00,
    description: `The Ultraboost 1.0 Shoes are equipped with Boost cushioning for optimal comfort and energy return. The primeknit upper offers breathability and a snug fit, making these sneakers ideal for both performance and casual wear.<br><br>Manufacture Year: 2020<br><br>Key Features: Boost cushioning, primeknit upper, responsive fit.`,
    image: 'img/panda.png'
  },
  {
    id: 14,
    name: 'Chuck Taylor All Star CX EXP2',
    price: 85.00,
    description: `The Chuck Taylor All Star Durable Neutrals CX EXP2 combines classic Converse style with modern updates. The durable upper and cushioned insole ensure comfort, while the neutral colorways offer versatility for everyday wear.<br><br>Manufacture Year: 2021<br><br>Key Features: Durable upper, cushioned insole, neutral colorways.`,
    image: 'img/CHUCKTAYLOR.png'
  },
  {
    id: 15,
    name: 'Converse Weapon Leather',
    price: 100.00,
    description: `The Converse Weapon Leather combines premium leather construction with a rubber sole for durability and support. This re-release offers a clean, classic look with modern comfort for all-day wear.<br><br>Manufacture Year: 2020<br><br>Key Features: Leather upper, rubber sole, retro-inspired design.`,
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
      <a href="product.html?id=${product.id}" class="product-link">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h3>${product.name}</h3>
      </a>
              <p>$${product.price.toFixed(2)}</p>
        </div>
    `).join('');
}

let selectedSize = null;
function loadProductPage() {
  const productId = new URLSearchParams(window.location.search).get('id');
  const product = products.find(p => p.id == productId);

  if (product) {
    document.getElementById('productImage').src = product.image;
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productDescription').innerHTML = product.description || 'No description available.';
    document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;


    const sizeSelection = document.createElement('div');
    sizeSelection.classList.add('size-buttons');
    const sizes = [
      { men: 'M4', women: 'W5.5' },
      { men: 'M4.5', women: 'W6' },
      { men: 'M5', women: 'W6.5' },
      { men: 'M5.5', women: 'W7' },
      { men: 'M6', women: 'W7.5' },
      { men: 'M6.5', women: 'W8' },
      { men: 'M7', women: 'W8.5' },
      { men: 'M7.5', women: 'W9' },
      { men: 'M8', women: 'W9.5' },
      { men: 'M8.5', women: 'W10' },
      { men: 'M9', women: 'W10.5' },
      { men: 'M9.5', women: 'W11' },
      { men: 'M10', women: 'W11.5' },
      { men: 'M10.5', women: 'W12' },
      { men: 'M11', women: 'W12.5' },
      { men: 'M11.5', women: 'W13' },
      { men: 'M12', women: 'W13.5' }
    ];

    sizes.forEach(size => {
      const sizeBtn = document.createElement('button');
      sizeBtn.classList.add('size-btn');
      sizeBtn.textContent = `${size.men} / ${size.women}`;
      sizeBtn.setAttribute('data-size', `${size.men}/${size.women}`);
      sizeBtn.addEventListener('click', function () {

        selectedSize = `${size.men} / ${size.women}`;
        updateAddToCartButton();
      });
      sizeSelection.appendChild(sizeBtn);
    });
    document.getElementById('size-selection').appendChild(sizeSelection);


    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.classList.add('nav-btn');
    addToCartBtn.id = `add-to-cart-btn`;
    addToCartBtn.addEventListener('click', function () {
      addToCart(product.id);
    });

    document.querySelector('.product-info').appendChild(addToCartBtn);

    const relatedProductsContainer = document.getElementById('related-products');
    relatedProductsContainer.innerHTML = products.filter(p => p.category === product.category && p.id !== product.id)
      .map(relatedProduct => `
        <div class="product-card">
          <a href="product.html?id=${relatedProduct.id}" class="product-link">
            <img src="${relatedProduct.image}" alt="${relatedProduct.name}" class="product-image">
            <h3>${relatedProduct.name}</h3>
          </a>
          <p>$${relatedProduct.price.toFixed(2)}</p>
        </div>
      `).join('');
  } else {
    console.error('Product not found');
  }
}


function addToCart(productId) {
  if (!isLoggedIn()) {
    alert('Please log in to add items to cart');
    window.location.href = 'login.html';
    return;
  }
  if (!selectedSize) {
    alert('Please select a size before adding to the cart');
    return;
  }

  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push({ ...product, selectedSize: selectedSize });
    saveCart();
  }

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
    const cartTotal = document.getElementById('cart-total');
    if (cartTotal) {
      cartTotal.textContent = '$0.00';
    }
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  cartItems.innerHTML = cart.map((item, index) => `
      <div class="product-card">
          <img src="${item.image}" alt="${item.name}" class="product-image">
          <h3>${item.name}</h3>
          <p>Size: ${item.selectedSize}</p>
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
    loginForm.addEventListener('submit', function (event) {
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
    items: cart.map(item => ({
      ...item,
      selectedSize: item.selectedSize
    })),
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
                        <span>Size: ${item.selectedSize}</span>
                        <span>$${item.price.toFixed(2)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function filterProducts(query) {
  const searchResultsContainer = document.getElementById('search-results');
  if (!query.trim()) {
    searchResultsContainer.innerHTML = '';
    return;
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  renderFilteredProducts(filteredProducts);
}

function renderFilteredProducts(filteredProducts) {
  const searchResultsContainer = document.getElementById('search-results');
  if (!searchResultsContainer) return;

  searchResultsContainer.innerHTML = filteredProducts.map(product => `
    <div class="product-card">
      <a href="product.html?id=${product.id}" class="product-link">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h3 class="product-name">${product.name}</h3> 
      </a>
      <p class="product-price">$${product.price.toFixed(2)}</p>
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
  const dropdown = document.getElementById('menuDropdown');
  
  if (menuToggle && dropdown) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('show');
      menuToggle.blur();
    });
  
    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
      }
    });
  }
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(question => {
      question.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        const arrow = this.querySelector('.arrow');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        arrow.style.transform = answer.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
      });
    });
  

  const searchInput = document.getElementById('dropdownSearch');
  const searchResults = document.getElementById('search-results');

  searchInput.addEventListener('input', function () {
    const query = this.value.trim();
    if (query) {
      searchResults.style.display = 'block';
      filterProducts(query);
    } else {
      searchResults.style.display = 'none';
    }
  });

  if (window.location.pathname.includes('product.html')) {
    loadProductPage();
  }

  document.querySelectorAll('.size-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('focused'));
      button.classList.add('focused');
    });
  });
  
});