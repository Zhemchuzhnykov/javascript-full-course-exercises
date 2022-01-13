import { it } from 'eslint/lib/rule-tester/rule-tester';
import { greeting, sayName, ukrainePopulation, transaction } from './apply';

const consoleSpy = jest.spyOn(console, 'log');

// tests for the function sayName

it('should log into console "Adam"', () => {

  const student = {
    name: 'Adam',
  };

  sayName.apply(student);

  expect(consoleSpy).toHaveBeenCalledWith('Adam');
  
});

it('should log into console "Yevhen"', () => {

  sayName.apply( { name: 'Yevhen' } );

  expect(consoleSpy).toHaveBeenCalledWith('Yevhen');

});

// test for the function greeting

it('should log into console "Hello, Bob Marley. Welcome to the Manchester United"', () => {

  const club = {
    companyName: 'Manchester United'
  };

  greeting.apply(club, ['Bob', 'Marley']);

  expect(consoleSpy).toHaveBeenCalledWith('Hello, Bob Marley. Welcome to the Manchester United');
  
});

// test for the function getPopulation

it('should return the string "Population in Ukraine is 43000"', () => {

  expect(ukrainePopulation).toEqual('Population in Ukraine is 43000');
  
});

// test for the method printTransaction() in the object transaction

it('should log into console "75000 EUR - invest on 24option"', () => {

  const anotherTransaction = {
    amount: 75000,
    operation: 'invest',
    currency: 'EUR',
    exchange: '24option',
  };

  transaction.printTransaction.apply(anotherTransaction);;

  expect(consoleSpy).toHaveBeenCalledWith('75000 EUR - invest on 24option');
  
});