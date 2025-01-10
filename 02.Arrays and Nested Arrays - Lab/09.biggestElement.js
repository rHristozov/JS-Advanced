function biggestElement(arr) {
    let bigNumber = Number.MIN_SAFE_INTEGER;
    for (const el of arr) {
        for(let i = 0; i < el.length; i++) {
            if(bigNumber <= el[i]){
                bigNumber = el[i];
            }
        }
    }
    console.log(bigNumber);
}

biggestElement(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   );

biggestElement([[20, 50, 10],
    [8, 33, 145]]
   )