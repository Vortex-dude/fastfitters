// Product details page: reads ?id= from the URL
const detailBox = document.getElementById('productDetail');

if (detailBox) {
  const id = Number(new URLSearchParams(window.location.search).get('id'));
  const p = products.find(function (item) { return item.id === id; });

  detailBox.innerHTML = p
    ? '<div class="detail"><div class="thumb" style="background-image:url(\'' + p.image + '\')"><span class="tag">' + p.condition + '</span></div>' +
      '<div><h1>' + p.name + '</h1><p class="price">' + formatPrice(p.price) + '</p>' +
      '<ul class="specs"><li>Size: ' + p.size + '</li><li>Condition: ' + p.condition + '</li><li>Category: ' + p.category + '</li></ul>' +
      '<p>' + p.desc + '</p><button class="btn" data-add="' + p.id + '">Add to cart</button>' +
      '<a class="btn secondary" href="shop.html">Back to shop</a></div></div>'
    : '<p class="empty">Item not found. <a href="shop.html">Back to shop</a></p>';
}
