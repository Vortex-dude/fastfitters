// Home page "featured" row and Shop page search / filter / sort
const featuredBox = document.getElementById('featured');
const grid = document.getElementById('productGrid');

if (featuredBox) {
  featuredBox.innerHTML = products.slice(0, 4).map(cardHTML).join('');
}

if (grid) {
  const search = document.getElementById('search');
  const category = document.getElementById('category');
  const size = document.getElementById('size');
  const maxPrice = document.getElementById('maxPrice');
  const sort = document.getElementById('sort');

  // The navbar dropdown links to shop.html?category=jackets etc.
  const fromUrl = new URLSearchParams(window.location.search).get('category');
  if (fromUrl) category.value = fromUrl;

  function showProducts() {
    const text = search.value.trim().toLowerCase();
    const max = Number(maxPrice.value) || Infinity;

    const list = products.filter(function (p) {
      return (p.name.toLowerCase().includes(text) || p.category.includes(text)) &&
        (category.value === 'all' || p.category === category.value) &&
        (size.value === 'all' || p.size === size.value) &&
        p.price <= max;
    });

    if (sort.value === 'low') list.sort(function (a, b) { return a.price - b.price; });
    if (sort.value === 'high') list.sort(function (a, b) { return b.price - a.price; });

    grid.innerHTML = list.length ? list.map(cardHTML).join('') : '<p class="empty">No items match your filters.</p>';
    document.getElementById('resultCount').textContent = list.length + ' items found';
  }

  [search, category, size, maxPrice, sort].forEach(function (el) {
    el.addEventListener('input', showProducts);
  });
  showProducts();
}
