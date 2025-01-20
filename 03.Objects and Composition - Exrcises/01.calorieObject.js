function calorieObject(arr) {
    let food = {};
  
    for (let i = 0; i < arr.length; i += 2) {
      const name = arr[i];
      const calories = Number(arr[i + 1]);
  
      food[name] = calories;
    }
  
    console.log(food);
  }