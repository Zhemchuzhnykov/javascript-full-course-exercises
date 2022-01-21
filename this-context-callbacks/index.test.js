import { it } from 'eslint/lib/rule-tester/rule-tester';
import { event, wallet, sumOfSquares, saveCalls } from './index';

// test for a method returning a list of people who can get an invitation to a party

it('should return an array of objects with the messages, "Dear Cristiano! Welcome to the party!", and "Dear Bruno! Welcome to the party!"', () => {

  expect(event.getInvitations()).toEqual([{email: 'cr7@gmail.com', message: 'Dear Cristiano! Welcome to the party!'},
   {email: 'bfernandes@yahoo.com', message: 'Dear Bruno! Welcome to the party!'}]);
});

// test for methods returning a max and min transactions from an array of transactions

it('should return 19000', () => {

  const testObject = {
    transactions: [1000, 19000, 11000]
  };

  const getMaxTransaction = wallet.getMax.call(testObject);

  expect(getMaxTransaction).toEqual(19000);

});

it('should return 1000', () => {

  const testObject = {
    transactions: [2000, 1000, 11000]
  };

  const getMinTransaction = wallet.getMin.call(testObject);

  expect(getMinTransaction).toEqual(1000);
  
});

// test for the function returning a sum of passed numbers raised to the power of two

it('should return 29', () => {

  expect(sumOfSquares(2, 3, 4)).toEqual(29);
  
});

// tests for the function saveCalls()

it('should return 14', () => {

  const tested = (num1, num2) => num1 + num2;

  const tester = saveCalls(tested);

  expect(tester(7,7)).toEqual(14);

});

it('should return [["Adam", "Adamantiy"],["Cripton", "Criptoniy"]]', () => {

  const tested = (firstName, secondName) => `${firstName} ${secondName}`;

  const tester = saveCalls(tested);

  tester('Adam', 'Adamantiy');
  tester('Cripton', 'Criptoniy');

  expect(tester.calls).toEqual([["Adam", "Adamantiy"], ["Cripton", "Criptoniy"]]);

});

it('should return "Cripton Criptonitskiy" as a result of applying a context', () => {

  const tested = {
    name: 'Adam',
    surname: 'Adamantiy',
    fullName() {
      return `${this.name} ${this.surname}`;
    }
  };

  const tester = saveCalls(tested.fullName);

  expect(tester.apply( { name: 'Cripton', surname: 'Criptonitskiy', })).toEqual('Cripton Criptonitskiy');

});