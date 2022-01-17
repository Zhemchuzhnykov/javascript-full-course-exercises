import { it } from 'eslint/lib/rule-tester/rule-tester';
import { sayStudentName, sayBruceName, specialGreeting, getUkrainePopulation, printSpecialTransaction } from './bind';

const consoleSpy = jest.spyOn(console, 'log');

// test for the function sayStudentName

it('should log into a console "Adam"', () => {

  function sayName() {
    console.log(this.name);
  };

  sayStudentName();

  expect(consoleSpy).toHaveBeenCalledWith('Tom');

});

// test for the function sayBruceName

it('should log into a console "Bruce"', () => {

  function sayName() {
    console.log(this.name);
  };

  sayBruceName();

  expect(consoleSpy).toHaveBeenCalledWith('Bruce');

});

// test for the function  greeting

it('should log into a console "Hello, Bob Marley. Welcome to the Microsoft"', () => {

  specialGreeting();

  expect(consoleSpy).toHaveBeenCalledWith('Hello, Bob Marley. Welcome to the Microsoft');

});

// test for the function getUkrainePopulation

it('should return the string "Population in Ukraine is 43000"', () => {

  getUkrainePopulation();

  expect(getUkrainePopulation()).toEqual('Population in Ukraine is 43000');

});

// test for the function printSpecialTransaction

it('should log into a console "400 USD - buy on NASDAQ"', () => {

  printSpecialTransaction();

  expect(consoleSpy).toHaveBeenCalledWith('400 USD - buy on NASDAQ');

});