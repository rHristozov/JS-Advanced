function juiceFlavors(arr) {
    let data = {};
    let map = new Map();
    for (const element of arr) {
        const [flavor, quantity] = element.split(' => ')
        if(data.hasOwnProperty(flavor)) {
            data[flavor] += Number(quantity)
        } else {
            data[flavor] = Number(quantity)
        }
        
        while(data[flavor] >= 1000){
            if(!map.has(flavor)) {
                map.set(flavor, 1)
            } else {
               map.set(flavor, map.get(flavor) + 1);
            }
            data[flavor] -= 1000;
        }
    }

    for (const [flavor, quantity] of map) {
        console.log(`${flavor} => ${quantity}`);
        
    }
}

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
    )

    juiceFlavors(['Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789']
         )