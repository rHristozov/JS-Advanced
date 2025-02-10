function car(arr) {
    class Car{
        constructor(){
            this.result = {}
        }
        addCar(brand, model, quantity) {
            quantity = Number(quantity);
            if(!this.result[brand]) {
                this.result[brand] = {};
            }
            if(!this.result[brand][model]) {
                this.result[brand][model] = 0;
            }
            this.result[brand][model] += quantity;
        }
        printCars() {
            for (const brand in this.result) {
            const models = this.result[brand]
            console.log(brand);
            for (const model in models) {
                console.log(`###${model} -> ${models[model]}`);
            }
            }
        }
    }

    const cars = new Car();
    for (const element of arr) {
        let [brand, model, quantity] = element.split(' | ');
        quantity = Number(quantity)
        
        cars.addCar(brand, model, quantity)
    }
    cars.printCars()
}

car(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
    )