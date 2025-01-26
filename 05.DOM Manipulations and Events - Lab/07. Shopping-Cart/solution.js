function solve() {
  let products = Array.from(document.querySelectorAll('.product'));
  let resultArea = document.getElementsByTagName('textarea')[0];
  const buttons = document.getElementsByTagName('button');

  let totalPrice = 0;
  let list = [];

  for (const product of products) {
    const btn = product.childNodes[5].childNodes[1];
    const title = product.childNodes[3].childNodes[1].textContent;
    const price = Number(product.childNodes[7].childNodes[0].textContent);

    btn.addEventListener('click', function () {
      totalPrice += price;
      if (!list.find((el) => el === title)) {
        list.push(title);
      }
      resultArea.value += `Added ${title} for ${price.toFixed(
        2
      )} to the cart.\n`;
    });
  }
  const checkoutBtn = document.querySelector('.checkout');

  checkoutBtn.addEventListener('click', function () {
    resultArea.value += `You bought ${list.join(', ')} for ${totalPrice.toFixed(
      2
    )}.`;
    for (const btn of buttons) {
      btn.setAttribute('disabled', 'disabled');
    }
  });
}
