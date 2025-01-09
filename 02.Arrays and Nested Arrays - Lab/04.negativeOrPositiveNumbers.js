function negativeOrPositiveNumbers(arr) {
    let result = [];

    for (const element of arr) {
        if(element >= 0) {
            result.push(element)
        } else {
            result.unshift(element)
        }
    }
    console.log(result.join('\n'));
    
}

negativeOrPositiveNumbers([7, -2, 8, -9]);
negativeOrPositiveNumbers([3, -2, 0, -1])