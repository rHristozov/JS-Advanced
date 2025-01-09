function roadRadar(speed, area) {
  let difference = 0;
  let status = '';
  if (area === 'city') {
    if (speed <= 50) {
      console.log(`Driving ${speed} km/h in a 50 zone`);
    } else {
      difference = speed - 50;
      status = getStatus(difference);

      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of 50 - ${status}`
      );
    }
  } else if (area === 'residential') {
    if (speed <= 20) {
      console.log(`Driving ${speed} km/h in a 20 zone`);
    } else {
      difference = speed - 20;
      status = getStatus(difference);

      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of 20 - ${status}`
      );
    }
  } else if (area === 'interstate') {
    if (speed <= 90) {
      console.log(`Driving ${speed} km/h in a 90 zone`);
    } else {
      difference = speed - 90;
      status = getStatus(difference);

      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of 90 - ${status}`
      );
    }
  } else if (area === 'motorway') {
    if (speed <= 130) {
      console.log(`Driving ${speed} km/h in a 130 zone`);
    } else {
      difference = speed - 130;
      status = getStatus(difference);

      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of 130 - ${status}`
      );
    }
  }

  function getStatus(difference) {
    if (difference <= 20) {
      return 'speeding';
    } else if (difference <= 40) {
      return 'excessive speeding';
    } else {
      return 'reckless driving';
    }
  }
}

roadRadar(100, 'city');
roadRadar(21, 'residential');
