function fruit(fruit, weight, price) {
    let fruitInKg = weight / 1000;
    let totalPrice = fruitInKg * price;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${fruitInKg.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80)