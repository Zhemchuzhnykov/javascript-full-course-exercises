import noUnusedModules from 'eslint-plugin-import/lib/rules/no-unused-modules';
import { it } from 'eslint/lib/rule-tester/rule-tester'
import { vehicle, ship, getOwnProps, User } from './index'

// tests for the objects vehicle and ship

const consoleSpy = jest.spyOn(console, 'log');

it('should log into the console "Argo lifting anchor up. Argo is moving."', () => {

  ship.startMachine();

  expect(consoleSpy).toHaveBeenCalledWith('Argo lifting anchor up. Argo is moving.');

});

it('should log into the console "Argo stopped. Argo lifting anchor down."', () => {

  ship.stopMachine();

  expect(consoleSpy).toHaveBeenCalledWith('Argo stopped. Argo lifting anchor down.');
  
});

// test for the function returning only own properties of an object, excluding methods

it('should return [ "name" ]', () => {

  expect(getOwnProps(ship)).toEqual([ 'name' ]);
  
});

// tests for the function-constructor creating users with certain properties: console outputs

const testedUser1 = new User('Adam');
const testedUser2 = new User('Cripton');

it('should log into the console "Hi, I am Adam"', () => {

  testedUser1.sayHi();

  expect(consoleSpy).toHaveBeenCalledWith('Hi, I am Adam');

});

it('should log into the console "New photo request was sent for Adam"', () => {

  testedUser1.requestNewPhoto();

  expect(consoleSpy).toHaveBeenCalledWith('New photo request was sent for Adam');

});

it('should log into the console "New photo request was sent for Adam"', () => {

  testedUser1.setAge(28);

  expect(consoleSpy).toHaveBeenCalledWith('New photo request was sent for Adam');

});

// tests for the function-constructor creating users with certain properties: return values

it('sholld return false', () => {

  expect(testedUser1.setAge(-14)).toEqual(false);

});

it('sholld return 19', () => {

  expect(testedUser1.setAge(19)).toEqual(19);

});

// tests for the function-constructor creating users with certain properties: inheritance testing

it('should return true', () => {

  expect(testedUser1.sayHi === testedUser2.sayHi).toEqual(true);
  expect(testedUser1.requestNewPhoto === testedUser2.requestNewPhoto).toEqual(true);
  expect(testedUser1.setAge === testedUser2.setAge).not.toEqual(false);

});