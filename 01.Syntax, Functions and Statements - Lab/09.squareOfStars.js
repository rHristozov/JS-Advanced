function squareOfStars(param = 5) {
    for(let i = 0; i < param; i++) {
        let result = '';
        for(let j = 0; j < param; j++) {
            result += '* ';
        }
        console.log(result);
    }
}

squareOfStars()