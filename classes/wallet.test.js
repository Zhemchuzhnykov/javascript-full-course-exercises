import { it } from 'eslint/lib/rule-tester/rule-tester';
import { Wallet } from './wallet';

// tests for the class Wallet

const myWallet = new Wallet();

it('should return 0', () => {

  expect(myWallet._balance).toEqual(0);

});

it('should return 980000', () => {

  myWallet.deposit(980000);

  expect(myWallet.getBalance()).toEqual(980000);

});

it('should return 960000', () => {

  myWallet.withdraw(20000);

  expect(myWallet.getBalance()).toEqual(960000);
  
});

it('should log into the console "No enough funds"', () => {

  const consoleSpy = jest.spyOn(console, 'log');

  myWallet.withdraw(966500);

  expect(consoleSpy).toHaveBeenCalledWith('No enough funds');
  
});