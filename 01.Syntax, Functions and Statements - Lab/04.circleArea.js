function circleArea(arg) {
  if (typeof arg !== 'number') {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof arg}.`
    );
  } else {
    console.log((Math.pow(arg, 2) * Math.PI).toFixed(2));
  }
}

circleArea(5);
circleArea('name');
