function gcd(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);

  while (y) {
    var t = y;

    y = x % y;

    x = t;
  }

  console.log(x);
}

gcd(5, 15);
