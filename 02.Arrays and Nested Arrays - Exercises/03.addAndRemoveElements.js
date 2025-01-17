function addAndRemoveElements(arr) {
    let initalNumber = 1;
    let result = [];

    for (const element of arr) {
        if(element === 'add') {
            result.push(initalNumber)
        } else  {
            result.pop();
        }
        initalNumber++;
    }

    if(result.length > 0) {
        console.log(result.join('\n'));
        
    } else {
        console.log('Empty');
    }
}

addAndRemoveElements(['add', 
    'add', 
    'add', 
    'add']
    )