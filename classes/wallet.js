export class Wallet {
  
  constructor() {
    this._balance = 0;
  }

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (this._balance < amount) {
      console.log('No enough funds');
      return;
    };
    this._balance -= amount;
  }

};