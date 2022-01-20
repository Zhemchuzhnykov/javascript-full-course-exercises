// // an object with the method returning all people who can receive an invitation to a party

// export const event = {
//   message: 'Welcome to the party!',
//   guests: [
//     { name: 'Cristiano', age: 36, email: 'cr7@gmail.com' },
//     { name: 'Bruno', age: 26, email: 'bfernandes@yahoo.com' },
//     { name: 'Anthony', age: 17, email: 'elanga@mu.com'}
//   ],
//   getInvitations() {
//     return this.guests.filter( ( { age } ) => age >= 18 ).
//     map( ( { email, name } ) => {
//       return { email, message: `Dear ${name}! ${this.message}` };
//     } );
//   }
// };

// // an object with transactions and with methods returning a minimum and maximum transactions

// export const wallet = {
//   transactions: [1000, 700, 2000, 500, 5000, 900, 7000, 300],
//   getMax() {
//     return Math.max( ...this.transactions );
//   },
//   getMin() {
//     return Math.min( ...this.transactions );
//   }
// };

// // function which receive any quantity of numbers as unnecessary arguments and return a sum of these numbers squared


// export function sumOfSquares() {
//   return [...arguments].reduce( (acca, num) => acca += num ** 2, 0);
// };

// function-wrapper that saves arguments of all the function calls

const playerPerformance = {
  goals: 18,
  assists: 19,
  total(penalties, tackles) {
    console.log(this.goals + this.assists + penalties + tackles);
  },
};

const tested = (num1, num2) => {
  return num1 + num2;
};

// function => return the function withMemory => create an array of arguments called with withMemory => it must be written outside
// to save the called arguments => to create a function call with passed arguments => to save all the calls in the property calls()
// 

// function saveCalls(func) {
//   const calledArg = [];
//   const withMemory = (...rest) => {
//     calledArg.push(rest);
//   };
//   withMemory.calls = calledArg;
//   return withMemory;
// };

function saveCalls(func) {
  const calledArg = [];
  function withMemory(...rest) {
    calledArg.push(rest);
    withMemory.calls = calledArg;
    return func.call(this, ...rest);
  };
  return withMemory;
};


const tester = saveCalls(playerPerformance.total);
