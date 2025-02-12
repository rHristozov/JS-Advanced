class FashionRetailInventory{
    constructor(storeHouse, location) {
        this.storeHouse = storeHouse;
        this.location = location;
        this.productStock = [];
    }
    addProduct (productName, size, quantity, price) {
        const currentProduct = this.productStock.find((product) => product.productName === productName && product.size === size)
        if(currentProduct) {
            currentProduct.quantity += quantity;
            return `You added ${quantity} more pieces of product ${productName} size ${size}`
        } else{
            const product = {productName, size, quantity, price}
            this.productStock.push(product)
            return `The product ${productName}, size ${size} was successfully added to the inventory`
        }
    }
    sendProduct (productName, size) {
        const currentProduct = this.productStock.find((product) => product.productName === productName && product.size === size)
        if(currentProduct) {
            this.productStock = this.productStock.filter((product) => product.productName !== productName && product.size !== size)
            return `The product ${productName}, size ${size} was successfully removed from the inventory`
        } else {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`)
        }
    }
    findProductsBySize(size) {
        const matchingProducts = this.productStock.filter((product) => product.size === size);

        if(matchingProducts.length === 0) {
            return `There are no products available in that size`
        } else {
            const productInfo = matchingProducts.map((product) => 
            `${product.productName}-${product.quantity} pieces`).join(', ');
            return productInfo
        }
    }
    listProducts () {
        if(this.productStock.length === 0) {
            return `${this.storeHouse} storehouse is empty`
        } 

        this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));

        const productInfo = this.productStock.map((product) => 
            `${product.productName}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$`)
        
        
        const result =  `${this.storeHouse} storehouse in ${this.location} available products:\n${productInfo.join('\n')}`
        return result
    }
}




const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.findProductsBySize("M"));
console.log(storeHouse.sendProduct("Shirt", "M"));
console.log(storeHouse.listProducts());




