function sumFirstLast(arr) {
    let firstNumber = Number(arr.shift());
    let lastNumber = Number(arr.pop());
    console.log(firstNumber + lastNumber);
    
}

sumFirstLast(['20', '30', '40'])