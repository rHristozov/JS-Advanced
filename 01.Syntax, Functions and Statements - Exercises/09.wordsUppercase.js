function wordsUppercase(str) {
    let pattern = /\w+/g; 

    let matches = str.match(pattern)
    console.log(matches.join(', ').toUpperCase());
}

wordsUppercase('Hi, how are you?')