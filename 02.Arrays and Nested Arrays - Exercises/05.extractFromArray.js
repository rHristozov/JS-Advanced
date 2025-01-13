function extractFromArray(arr) {
    let result = [];
    let checkNumber = arr[0]
    result.push(checkNumber)

    for( let i = 1; i < arr.length; i++) {
        if (checkNumber <= arr[i]) {
            result.push(arr[i])
            checkNumber = arr[i]
        }
    }
    return result
}

extractFromArray([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )