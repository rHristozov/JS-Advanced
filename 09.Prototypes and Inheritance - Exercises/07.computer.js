function createComputerHierarchy() {
  class Keyboard {
    constructor(manufacturer, responseTime) {
      this.manufacturer = manufacturer;
      this.responseTime = Number(responseTime);
    }
  }
  class Monitor {
    constructor(manufacturer, width, height) {
      this.manufacturer = manufacturer;
      this.width = Number(width);
      this.height = Number(height);
    }
  }

  class Battery {
    constructor(manufacturer, expectedLife) {
      this.manufacturer = manufacturer;
      this.expectedLife = Number(expectedLife);
    }
  }
  class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSPace) {
      if (new.target === Computer) {
        throw new TypeError('Abstract class cannot be instantiated directly');
      }
      this.manufacturer = manufacturer;
      this.expectedLife = Number(processorSpeed);
      this.ram = Number(ram);
      this.hardDiskSPace = Number(hardDiskSPace);
    }
  }
  class Laptop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSPace,
      weight,
      color,
      battery
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSPace);
      this.weight = weight;
      this.color = color;
      this.battery = battery;
    }
    get battery() {
      return this._battery;
    }
    set battery(value) {
      if (value instanceof Battery) {
        this._battery = value;
      } else {
        throw new TypeError("It's not Battery");
      }
    }
  }
  class Desktop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSPace,
      keyboard,
      monitor
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSPace);
      this.keyboard = keyboard;
      this.monitor = monitor;
    }
    get keyboard() {
      return this._keyboard;
    }
    set keyboard(value) {
      if (value instanceof Keyboard) {
        this._keyboard = value;
      } else {
        throw new TypeError("It's not Keyboard");
      }
    }
    get monitor() {
      return this._monitor;
    }
    set monitor(value) {
      if (value instanceof Monitor) {
        this._monitor = value;
      } else {
        throw new TypeError("It's not Monitor");
      }
    }
  }

  return {
    Keyboard,
    Monitor,
    Battery,
    Computer,
    Laptop,
    Desktop,
  };
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop(
  'Hewlett Packard',
  2.4,
  4,
  0.5,
  3.12,
  'Silver',
  battery
);
console.log(laptop);
