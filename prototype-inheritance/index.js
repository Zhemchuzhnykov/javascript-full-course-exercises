// to build an object that inherits some properties/methods from another object

export const vehicle = {
  move() {
    return `${this.name} is moving`;
  },
  stop() {
    return `${this.name} stopped`;
  }
};

export const ship = {
  name: 'Argo',
  startMachine() {
    console.log(`${this.name} lifting anchor up. ${this.move()}.`);
  },
  stopMachine() {
    console.log(`${this.stop()}. ${this.name} lifting anchor down.`);
  },
  __proto__: vehicle,
};

// function that returns an array of the own properties of a passed object

export const getOwnProps = (obj) =>  Object.getOwnPropertyNames(obj).filter(key => typeof obj[key] !== 'function');
