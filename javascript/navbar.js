// ---------- Mobile menu toggle ----------
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function () {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.classList.toggle('active', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// Close the menu after a link is tapped (mobile)
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', false);
  });
});

// ---------- Highlight the current page ----------
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav-link').forEach(function (link) {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// ---------- Cart item counter ----------
// Cart is stored in localStorage as: [{ id, name, price, quantity }, ...]
function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  let total = 0;

  try {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    total = cart.reduce(function (sum, item) {
      return sum + item.quantity;
    }, 0);
  } catch (error) {
    total = 0;
  }

  cartCount.textContent = total;
}

updateCartCount();
