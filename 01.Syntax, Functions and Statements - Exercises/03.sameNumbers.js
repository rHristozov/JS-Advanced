function sameNumbers(num) {
  let str = num.toString().split('');

  let isSame = true;
  let firstDigit = str[0];
  let sum = 0;

  for (const digit of str) {
    sum += +digit;

    if (firstDigit !== digit) {
      isSame = false;
    }
  }

  if (isSame) {
    console.log(true);
  } else {
    console.log(false);
  }
  console.log(sum);
}

sameNumbers(2222222);
