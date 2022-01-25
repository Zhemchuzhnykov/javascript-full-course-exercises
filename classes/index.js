// class creating a user's profile

export class User {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return {
      name: '',
      age: null
    };
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(age) {
    if (age < 0) {
      return false;
  } else if (age >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
  }
    this.age = age;
    return age;
  }
};

// two classes where one class inherits methods from another class

export class Vehicle {

  constructor(name, numberOfWheels) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }

};

export class Ship extends Vehicle {

  constructor(name, numberOfWheels, maxSpeed) {
    super(name, numberOfWheels);
    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }

};

