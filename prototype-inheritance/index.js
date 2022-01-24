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

// function-constructor creating users with certain properties/methods

export function User(name, age) {
  this.name = name;
  this.age = age;
  User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`);
  };
  User.prototype.requestNewPhoto = function() {
    console.log(`New photo request was sent for ${this.name}`);
  };
  User.prototype.setAge = function(age) {
    if (age < 0) {
      return false;
  } else if (age >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
      this.age = age;
      return age;
  } else {
      this.age = age;
      return age;
    }
  }
};

// the object of a user with getter and setter methods

export default {
  firstName: 'John',
  lastName: 'Dow',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [ this.firstName, this.lastName ] = name.split(' ');
  }
};