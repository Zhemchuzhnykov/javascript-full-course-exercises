import { it } from 'eslint/lib/rule-tester/rule-tester';
import { sayName, greeting, ukrainePopulation, transaction } from './call';

const consoleSpy = jest.spyOn(console, 'log');

// sayName tests

it('Should log into console Tom', () => {

  const student = {
    name: 'Michael Owen',
  };

  sayName.call(student);

  expect(consoleSpy).toHaveBeenCalledWith('Michael Owen');

});

it('Should log into console Bruce', () => {

  sayName.call( { name: 'Bruce' } );

  expect(consoleSpy).toHaveBeenCalledWith('Bruce');

});

// greeting test

it('Should log into console "Hello, Bob Marley. Welcome to the Microsoft"', () => {

  const company = {
    companyName: 'Google'
  };

  greeting.call(company, 'Bob', 'Marley');

  expect(consoleSpy).toHaveBeenCalledWith('Hello, Bob Marley. Welcome to the Google');

});

// getPopulation test

it('Should return a string "Population in Ukraine is 43000"', () => {

expect(ukrainePopulation).toEqual('Population in Ukraine is 43000');

});

// method printTransaction() test

it('Should log into console "50000 USD - acquire stocks on DowJones"', () => {

  const anotherTransaction = {
    amount: 50000,
    operation: 'acquire stocks',
    currency: 'USD',
    exchange: 'DowJones',
  };

  transaction.printTransaction.call(anotherTransaction);

  expect(consoleSpy).toHaveBeenCalledWith('50000 USD - acquire stocks on DowJones');

});