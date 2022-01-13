// creating a context with the method bind()

// function sayName

const student = {
  name: 'Tom',
};

function sayName() {
  console.log(this.name);
};

export const sayStudentName = () => {
  return sayName.bind(student)();
};

export const sayBruceName = () => {
  return sayName.bind( { name: 'Bruce' })();
};

// function greeting

const company = {
  companyName: 'Microsoft',
};

function greeting(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
};

export const specialGreeting = () => {
  return greeting.bind(company, 'Bob', 'Marley')();
};

// function getPopulation

const country = {
  countryName: 'Ukraine',
  capital: 'Kyiv',
};

function getPopulation(population) {
  return `Population in ${this.countryName} is ${population}`;
};

export const getUkrainePopulation = () => {
  return getPopulation.bind(country, 43000)();
};

// method printTransaction() in the function transaction

const transaction = {
  amount: 1200,
  operation: 'sell',
  currency: 'USD',
  exchange: 'NYSE',
  printTransaction() {
    console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
  },
};

const anotherTransaction = {
  amount: 400,
  operation: 'buy',
  currency: 'USD',
  exchange: 'NASDAQ',
};

export const printSpecialTransaction = () => {
  return transaction.printTransaction.bind(anotherTransaction)();
};