document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  signup(email, password, name);
});

function signup(email, password, name) {
  let users = JSON.parse(localStorage.getItem('users')) || [];
  
  if (users.some(u => u.email === email)) {
      alert('Email already exists');
      return false;
  }
  
  const newUser = {
      email,
      password,
      name,
      address: '',
      phone: '',
      image: 'img/default.jpg'
  };
  
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('loggedIn', 'true');
  localStorage.setItem('userEmail', email);
  window.location.href = 'index.html';
  return true;
}