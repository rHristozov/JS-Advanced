class SnowSportStore {
  constructor(storeName) {
    this.storeName = storeName;
    this.availableEquipment = [];
    this.revenue = 0;
  }
  addEquipment(type, price, condition) {
    if (
      type === '' ||
      price < 0 ||
      condition === '' ||
      !Number.isInteger(price)
    ) {
      throw new Error('Invalid equipment details!');
    }
    this.availableEquipment.push({ type, price, condition });
    return `New equipment added: ${type} / ${condition} condition - ${price.toFixed(
      2
    )}$.`;
  }

  rentEquipment(type, rentalDays) {
    const currentType = this.availableEquipment.find(
      (equipment) => equipment.type === type && equipment.condition === 'used'
    );
    if (!currentType) {
      throw new Error(`${type} is not available for rent!`);
    }

    const rentalCost = currentType.price * 0.1 * rentalDays;
    this.revenue += rentalCost;
    return `${type} rented for ${rentalDays} days. Total cost: ${rentalCost.toFixed(
      2
    )}$.`;
  }

  sellEquipment(type) {
    const currentType = this.availableEquipment.find(
      (equipment) => equipment.type === type && equipment.condition === 'new'
    );

    if (currentType) {
      this.availableEquipment = this.availableEquipment.filter(
        (equipment) => equipment.type !== type
      );
      this.revenue += currentType.price;
      return `${type} has been sold for ${currentType.price.toFixed(2)}$.`;
    } else {
      throw new Error(`${type} is not available for purchase!`);
    }
  }

  showRevenue() {
    if (this.revenue === 0) {
      return `Nothing has been sold or rented.`;
    } else {
      return `${
        this.storeName
      } has made a total revenue of ${this.revenue.toFixed(2)}$.`;
    }
  }
}

let store = new SnowSportStore('Alpine Gear Shop');
console.log(store.addEquipment('Ski', 50.2, 'new'));
console.log(store.addEquipment('Boots', 100, 'used'));
console.log(store.addEquipment('Helmet', 200, 'new'));
console.log(store.addEquipment('Snowboard', 300, 'used'));
console.log(store.sellEquipment('Ski'));
console.log(store.sellEquipment('Helmet'));
console.log(store.rentEquipment('Snowboard', 3));
console.log(store.showRevenue());
