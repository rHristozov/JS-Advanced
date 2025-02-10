function solve() {
  const inputNumber = document.querySelectorAll('input[type="number"]');
  const table = document.querySelector('#exercise table');
  const resultP = document.querySelector('#check p');
  const [btnCheck, btnClear] = document.querySelectorAll('button');

  btnCheck.addEventListener('click', check);
  btnClear.addEventListener('click', clear);

  function check() {
    inputNumber.forEach((input) => (sum += Number(input.value)));
    if (sum === 18) {
      table.style.border = '2px solid green';
      resultP.textContent = 'You solve it! Congratulations!';
      resultP.style.color = 'green';
    } else {
      table.style.border = '2px solid red';
      resultP.textContent = 'NOP! You are not done yet...';
      resultP.style.color = 'red';
    }
  }

  function clear() {
    inputNumber.forEach((input) => (input.value = ''));
    table.style.border = '';
    resultP.textContent = '';
    resultP.style.color = '';
  }
}
