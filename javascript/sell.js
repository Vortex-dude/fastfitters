// Sell form validation
const sellForm = document.getElementById('sellForm');

if (sellForm) {
  const rules = {
    title:     function (v) { return v.trim().length >= 3 || 'Enter a title of at least 3 characters.'; },
    price:     function (v) { return Number(v) > 0 || 'Enter a price greater than 0.'; },
    category:  function (v) { return v !== '' || 'Choose a category.'; },
    size:      function (v) { return v !== '' || 'Choose a size.'; },
    condition: function (v) { return v !== '' || 'Choose the condition.'; },
    image:     function (v) { return v.trim() === '' || /^https?:\/\/.+/.test(v.trim()) || 'The link must start with http:// or https://'; },
    desc:      function (v) { return v.trim().length >= 20 || 'Describe the item in at least 20 characters.'; }
  };

  sellForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let allValid = true;

    for (const name in rules) {
      const field = sellForm.elements[name];
      const result = rules[name](field.value);
      document.getElementById('err-' + name).textContent = result === true ? '' : result;
      field.classList.toggle('invalid', result !== true);
      if (result !== true) allValid = false;
    }

    document.getElementById('sellMsg').hidden = !allValid;
    if (allValid) sellForm.reset();
  });
}
