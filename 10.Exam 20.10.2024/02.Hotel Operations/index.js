class Hotel {
  constructor(initialBudget) {
    this.initialBudget = initialBudget;
    this.roomAvailability = {};
    this.supplyStock = {};
  }
  restockSupplies(supplies) {
    let result = [];
    for (const supply of supplies) {
      let [supplyName, supplyQuantity, supplyTotalPrice] = supply.split(' ');
      supplyQuantity = Number(supplyQuantity);
      supplyTotalPrice = Number(supplyTotalPrice);

      if (supplyTotalPrice <= this.initialBudget) {
        if (!this.supplyStock.hasOwnProperty(supplyName)) {
          this.supplyStock[supplyName] = 0;
        }
        this.supplyStock[supplyName] += supplyQuantity;

        result.push(`Successfully stocked ${supplyQuantity} ${supplyName}`);
      } else {
        result.push(
          `There was not enough money to restock ${supplyQuantity} ${supplyName}`
        );
      }
    }
    return result.join('\n');
  }
  addRoomType(roomType, neededSupplies, pricePerNight) {
    if (this.roomAvailability.hasOwnProperty(roomType)) {
      return `The ${roomType} is already available in our hotel, try something different.`;
    } else {
      this.roomAvailability[roomType] = { neededSupplies, pricePerNight };
      return `Great idea! Now with the ${roomType}, we have ${
        Object.keys(this.roomAvailability).length
      } types of rooms available, any other ideas?`;
    }
  }
  showAvailableRooms() {
    if (Object.keys(this.roomAvailability).length === 0) {
      return `Our rooms are not ready yet, please come back later...`;
    }
    let result = [];
    const rooms = Object.entries(this.roomAvailability);
    rooms.map((a) => {
      let b = Object.entries(a[1]);
      result.push(`${a[0]} - $ ${b[1][1]}`);
    });
    return result.join('\n');
  }
  bookRoom(roomType) {
    let currentRoom = this.roomAvailability[roomType];
    if (!currentRoom) {
      return `There is no ${roomType} available, would you like to book another room?`;
    }

    const supplyForRoom = Object.entries(currentRoom);
    const price = supplyForRoom[1][1];
    const supplyArr = supplyForRoom[0][1];

    for (const supply of supplyArr) {
      let [supplyName, supplyQuantity] = supply.split(' ');
      supplyQuantity = Number(supplyQuantity);

      if (this.supplyStock[supplyName] < supplyQuantity) {
        return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
      }
    }
    return `Your booking for ${roomType} has been confirmed! The price is $${price} per night.`;
  }
}

let hotel = new Hotel(500);

console.log(
  hotel.restockSupplies(['Soap 100 50', 'Towels 20 100', 'Shampoo 50 75'])
);

console.log(hotel.addRoomType('Deluxe Suite', ['Soap 5', 'Towels 2'], 200));
console.log(hotel.addRoomType('Standard Room', ['Soap 2', 'Towels 1'], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom('Apartment'));
console.log(hotel.bookRoom('Deluxe Suite'));
