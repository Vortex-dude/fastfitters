// Mock product data (no backend). Add photos to the images/ folder using these file names.
const products = [
  { id: 1,  name: 'Denim Trucker Jacket',    category: 'jackets',    price: 3200, size: 'M',  condition: 'Good',     image: 'sources/images/p1.jpg',  desc: 'Classic washed denim jacket with a worn-in fade. Sturdy buttons, no tears.' },
  { id: 2,  name: 'Corduroy Jacket',         category: 'jackets',    price: 2800, size: 'L',  condition: 'Like new', image: 'sources/images/p2.jpg',  desc: 'Brown corduroy jacket with a warm lining. Worn only a few times.' },
  { id: 3,  name: 'Oversized Graphic Hoodie', category: 'hoodies',   price: 1800, size: 'L',  condition: 'Good',     image: 'sources/images/p3.jpg',  desc: 'Heavy cotton hoodie with a faded front print. Very comfortable fit.' },
  { id: 4,  name: 'Zip-Up Fleece Hoodie',    category: 'hoodies',    price: 1500, size: 'M',  condition: 'Fair',     image: 'sources/images/p4.jpg',  desc: 'Soft fleece with a small pill on the cuffs. Zip works smoothly.' },
  { id: 5,  name: 'Retro Band T-Shirt',      category: 'vintage',    price: 900,  size: 'M',  condition: 'Good',     image: 'sources/images/p5.jpg',  desc: 'Soft thin cotton tee with a cracked vintage print.' },
  { id: 6,  name: '70s Striped Polo',        category: 'vintage',    price: 1100, size: 'S',  condition: 'Like new', image: 'sources/images/p6.jpg',  desc: 'Retro striped polo in earthy colours. No stains or fading.' },
  { id: 7,  name: 'Baggy Cargo Pants',       category: 'streetwear', price: 2000, size: 'L',  condition: 'Good',     image: 'sources/images/p7.jpg',  desc: 'Relaxed cargo pants with six pockets and an adjustable hem.' },
  { id: 8,  name: 'Boxy Street Tee',         category: 'streetwear', price: 1000, size: 'XL', condition: 'Like new', image: 'sources/images/p8.jpg',  desc: 'Heavyweight boxy tee in a washed black finish.' },
  { id: 9,  name: 'Flannel Check Shirt',     category: 'shirts',     price: 1300, size: 'M',  condition: 'Good',     image: 'sources/images/p9.jpg',  desc: 'Green and cream flannel, soft after many washes.' },
  { id: 10, name: 'Linen Button-Up Shirt',   category: 'shirts',     price: 1400, size: 'L',  condition: 'Like new', image: 'sources/images/p10.jpg', desc: 'Light linen shirt, ideal for hot Karachi days.' },
  { id: 11, name: 'Straight Fit Blue Jeans', category: 'jeans',      price: 2200, size: 'M',  condition: 'Good',     image: 'sources/images/p11.jpg', desc: 'Mid-blue straight jeans with a natural fade.' },
  { id: 12, name: 'Wide-Leg Black Jeans',    category: 'jeans',      price: 2400, size: 'L',  condition: 'Fair',     image: 'sources/images/p12.jpg', desc: 'Wide-leg black denim with light fading at the knees.' }
];

function formatPrice(n) {
  return 'Rs ' + n.toLocaleString('en-US');
}

function cardHTML(p) {
  return '<article class="card">' +
    '<a href="product.html?id=' + p.id + '">' +
    '<div class="thumb" style="background-image:url(\'' + p.image + '\')"><span class="tag">' + p.condition + '</span></div>' +
    '<h3>' + p.name + '</h3></a>' +
    '<p class="meta">Size ' + p.size + ', ' + p.category + '</p>' +
    '<div class="row"><strong>' + formatPrice(p.price) + '</strong>' +
    '<button class="btn small" data-add="' + p.id + '">Add to cart</button></div></article>';
}
