function cityTaxes(name, population, treasury) {
    const cityReport = {
        name, 
        population, 
        treasury, 
        taxRate: 10, 
        collectTaxes () {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population += Math.ceil(this.population * (percentage / 100));
        },
        applyRecession(percentage) {
            this.treasury -= Math.ceil(this.treasury * (percentage / 100))
        }
    }

    return cityReport
}




const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city);

const city2 =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
