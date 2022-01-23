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