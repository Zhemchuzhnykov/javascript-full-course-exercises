import { it } from 'eslint/lib/rule-tester/rule-tester';
import { User, Vehicle, Ship } from './index';

// tests for the class creating a user's profile

const consoleSpy = jest.spyOn(console, 'log');

const testedUser1 = new User('Adam', 19);
const testedUser2 = User.createEmpty();

// return tests

it('should return an object with a user Adam who 19 yearls old', () => {

  expect(testedUser1).toEqual( { name: 'Adam', age: 19 } );

});

it('should return an object with a user without a name and age', () => {

  expect(testedUser2).toEqual( { name: '', age: null } );

});

it('should return false', () => {

  expect(testedUser1.setAge(-9)).toEqual(false);

});

it('should return 25', () => {

  expect(testedUser1.setAge(25)).toEqual(25);

});

// console log tests

it('should log into the console "Hi, I am Adam"', () => {

  testedUser1.sayHi();

  expect(consoleSpy).toHaveBeenCalledWith('Hi, I am Adam');

});

it('should log into the console "New photo request was sent for Adam"', () => {

  testedUser1.requestNewPhoto();

  expect(consoleSpy).toHaveBeenCalledWith('New photo request was sent for Adam');

});

it('should log into the console "New photo request was sent for Adam"', () => {

  testedUser1.setAge(25);

  expect(consoleSpy).toHaveBeenCalledWith('New photo request was sent for Adam');

});

// tests for the classes Vehicle and Ship

const drandulet = new Vehicle('drandulet', 3);
const victoria = new Ship('Victoria', 0, '90 kmh');

// return tests

it('should return "drandulet" and 3', () => {

  expect(drandulet.name).toEqual('drandulet');
  expect(drandulet.numberOfWheels).toEqual(3);

});

it('should return "Victoria", 0, and "90 kmh"', () => {

  expect(victoria.name).toEqual('Victoria');
  expect(victoria.numberOfWheels).toEqual(0);
  expect(victoria.maxSpeed).toEqual('90 kmh');
  
});

// console tests

it('should log into the console "Drandulet is moving" and 3', () => {

  drandulet.move();

  expect(consoleSpy).toHaveBeenCalledWith('drandulet is moving');

});

it('should log into the console "Drandulet stopped"', () => {

  drandulet.stop();

  expect(consoleSpy).toHaveBeenCalledWith('drandulet stopped');

});

it('should show that two console logs have taken place', () => {

  global.console.log = jest.fn()

  victoria.move();

  expect(console.log).toBeCalledTimes(2);

});

it('should log into the console "Victoria lifting anchor up" and "Victoria is moving"', () => {

  console.log = jest.fn();

  victoria.move();

  expect(console.log.mock.calls[0][0]).toBe('Victoria lifting anchor up');
  expect(console.log.mock.calls[1][0]).toBe('Victoria is moving');

});