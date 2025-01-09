function biggerHalf(arr) {
    
    let sorted = arr.toSorted((a, b) => a-b);
    let startIndex = Math.floor(arr.length / 2);
    let arrResult = sorted.slice(startIndex);

    return arrResult
}

biggerHalf([3, 19, 14, 7, 2, 19, 6]);
biggerHalf([4, 7, 2, 5])