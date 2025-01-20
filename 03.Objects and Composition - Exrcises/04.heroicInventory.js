function heroicInventory(arr) {
    let heroes = [];

    for (const hero of arr) { 

        if (hero.trim() === '') {
            continue;
        }
        let [name , level, items] = hero.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        let heroObj = {name, level, items};
        heroes.push(heroObj)
    }
    console.log(JSON.stringify(heroes));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
    )