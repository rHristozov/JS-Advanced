function townPopulation(arr) {
    let cities = {}

    for (const element of arr) {
        let [name, population] = element.split(' <-> ')
        population = Number(population);

        if (cities[name] != undefined) {
            population += cities[name];
            }
          
            cities[name] = population;
            }
            for (let town in cities) {
            console.log(`${town} : ${cities[town]}`);

    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
    )