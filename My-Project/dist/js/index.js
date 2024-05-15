
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-ul-big');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuIcon.classList.toggle('active');
});

// Got this code from chatgpt and I clearly understand it's function