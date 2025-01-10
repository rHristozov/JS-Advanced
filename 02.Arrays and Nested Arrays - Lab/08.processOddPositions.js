function processOddPositions(arr) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        if (i % 2 === 1) {
            newArr.unshift(arr[i] * 2)
        }
    }
    console.log(newArr.join(' '));
}

processOddPositions([10, 15, 20, 25]);