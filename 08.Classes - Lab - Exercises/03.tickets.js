function tickets(arr, criteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  const result = [];

  for (const ticket of arr) {
    let [destination, price, status] = ticket.split('|');
    price = Number(price);
    const newTicket = new Ticket(destination, price, status);
    result.push(newTicket);
  }

  return result.sort((a, b) => {
    if (criteria == 'price') {
      return a[criteria] - b[criteria];
    } else {
      return a[criteria].localeCompare(b[criteria]);
    }
  });
}

tickets(
  [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed',
  ],
  'destination'
);
