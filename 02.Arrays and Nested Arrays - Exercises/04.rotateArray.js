function rotateArray(arr, step) {
    for(let i = 0; i < step; i++) {
        let currentElement = arr.pop();
        arr.unshift(currentElement)
    }
    console.log(arr.join(' '));
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2
)