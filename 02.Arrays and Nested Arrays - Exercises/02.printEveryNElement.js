function printEveryNElement(arr, step) {
    let result = [];
    for(let i= 0; i< arr.length; i += step) {
        result.push(arr[i])
    }
    return result
}

printEveryNElement(['5', 
    '20', 
    '31', 
    '4', 
    '20'], 
    2
    )