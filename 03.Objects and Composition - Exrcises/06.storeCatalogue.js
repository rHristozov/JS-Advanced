function sortedCatalogue(arr) {
    let = products = [];
    for (let el of arr) {
      let [name, price] = el.split(' : ');
      price = Number(price);
      let newProduct = {
        name,
        price,
      };
      products.push(newProduct);
    }
  
    let sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
    let previousChar = '';
    let currentChar = '';
  
    for (let product of sortedProducts) {
      currentChar = product.name[0];
      if (currentChar === previousChar) {
        console.log(`  ${product.name}: ${product.price}`);
      } else {
        previousChar = currentChar;
        console.log(previousChar);
        console.log(`  ${product.name}: ${product.price}`);
      }
    }
  }
  
  sortedCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
  ]);