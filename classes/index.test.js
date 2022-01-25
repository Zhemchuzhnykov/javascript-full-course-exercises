import { it } from 'eslint/lib/rule-tester/rule-tester';
import { User } from './index';

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