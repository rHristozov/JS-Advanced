function aggregateElements(arr) {
    let sum = arr.reduce((prev, curr) => prev + curr, 0 );
    let invertedSum = arr.reduce((prev, curr) => prev + 1 / curr, 0 );
    let concat = arr.join('')

    
    console.log(sum);
    console.log(invertedSum);
    console.log(concat);
    
}

aggregateElements([1,2,3]);