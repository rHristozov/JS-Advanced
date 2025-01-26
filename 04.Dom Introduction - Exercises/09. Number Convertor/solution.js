function solve() {
  const inputEl = document.getElementById('input');
  const selectEl = document.getElementById('selectMenuTo');
  const outputEl = document.getElementById('result');
  const buttonEl = document.getElementsByTagName('button')[0];

  let binaryEl = document.createElement('option');
  binaryEl.textContent = 'Binary';
  binaryEl.value = 'binary';
  selectEl.appendChild(binaryEl);

  let hexadecimalEl = document.createElement('option');
  hexadecimalEl.textContent = 'Hexadecimal';
  hexadecimalEl.value = 'hexadecimal';
  selectEl.appendChild(hexadecimalEl);

  buttonEl.addEventListener('click', () => {
    const number = Number(inputEl.value);

    if (selectEl.value === 'binary') {
      outputEl.value = number.toString(2);
    } else if (selectEl.value === 'hexadecimal') {
      outputEl.value = number.toString(16).toLocaleUpperCase();
    }
  });
}
