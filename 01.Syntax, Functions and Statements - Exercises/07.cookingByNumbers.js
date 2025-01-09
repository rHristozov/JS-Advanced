function cookingByNumbers(num, action1, action2, action3, action4, action5) {
    result = +num;
    let arr = [action1, action2, action3, action4, action5];

    for (const action of arr) {
        switch(action) {
            case 'chop': result /= 2; console.log(result);
            break;
            case 'dice': result = Math.sqrt(result); console.log(result);
            break;
            case 'spice': result++; console.log(result);
            break;
            case 'bake': result *= 3; console.log(result);
            break;
            case 'fillet': result *= 0.8; console.log(result.toFixed(1));
            break;
        }
    }
}



cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('---')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')