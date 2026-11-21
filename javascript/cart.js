// Cart logic. The cart lives in localStorage as [{ id, name, price, quantity }]
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('cart')) || [];
  } catch (error) {
    return window.memCart || [];
  }
}

function saveCart(cart) {
  window.memCart = cart;
  try { localStorage.setItem('cart', JSON.stringify(cart)); } catch (error) { /* storage blocked */ }
  updateCartCount();
  renderCart();
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(function () { toast.remove(); }, 1600);
}

function addToCart(id) {
  const p = products.find(function (item) { return item.id === id; });
  const cart = getCart();
  const found = cart.find(function (item) { return item.id === id; });
  if (found) found.quantity++;
  else cart.push({ id: p.id, name: p.name, price: p.price, quantity: 1 });
  saveCart(cart);
  showToast(p.name + ' added to cart');
}

function renderCart() {
  const box = document.getElementById('cartItems');
  if (!box) return;
  const cart = getCart();
  const total = cart.reduce(function (sum, i) { return sum + i.price * i.quantity; }, 0);
  document.getElementById('cartTotal').textContent = formatPrice(total);

  box.innerHTML = cart.length ? cart.map(function (i) {
    return '<div class="cart-row"><span class="grow">' + i.name + '</span><span>' + formatPrice(i.price) + '</span>' +
      '<span class="qty"><button data-dec="' + i.id + '" aria-label="Decrease">-</button>' + i.quantity +
      '<button data-inc="' + i.id + '" aria-label="Increase">+</button></span>' +
      '<strong>' + formatPrice(i.price * i.quantity) + '</strong>' +
      '<button class="link" data-remove="' + i.id + '">Remove</button></div>';
  }).join('') : '<p class="empty">Your cart is empty. <a href="shop.html">Browse the shop</a></p>';
}

document.addEventListener('click', function (e) {
  const d = e.target.dataset;
  if (d.add) addToCart(Number(d.add));

  const cart = getCart();
  if (d.inc || d.dec) {
    const item = cart.find(function (i) { return i.id === Number(d.inc || d.dec); });
    item.quantity += d.inc ? 1 : -1;
    saveCart(cart.filter(function (i) { return i.quantity > 0; }));
  }
  if (d.remove) saveCart(cart.filter(function (i) { return i.id !== Number(d.remove); }));

  if (e.target.id === 'checkoutBtn') {
    if (!cart.length) { showToast('Your cart is empty'); return; }
    saveCart([]);
    document.getElementById('orderMsg').hidden = false;
  }
});

renderCart();
