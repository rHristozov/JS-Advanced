function carFactory(car) {
    // power
    if (car.power <= 90) {
      car.engine = { power: 90, volume: 1800 };
    } else if (car.power <= 120) {
      car.engine = { power: 120, volume: 2400 };
    } else {
      car.engine = { power: 200, volume: 3500 };
    }
    // color
    let type = car.carriage;
    car.carriage = { type, color: car.color };
  
    //wheelsize
    let wheel = car.wheelsize;
    if (wheel % 2 === 0) {
      wheel--;
    }
    car.wheels = [wheel, wheel, wheel, wheel];
  
    const { power, color, wheelsize, ...newCar } = car;
  
    return newCar;
  }