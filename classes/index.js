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