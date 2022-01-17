// creating the functions based on the function calculator with the method bind()

export function calculator (a, b) {
  switch (this.operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      return NaN;
  };
};

// before refactoring

// const multiplier = (num1, num2) => calculator.bind( { operation: '*' }, num1, num2);

// const summator = (num1, num2) => calculator.bind( { operation: '+' }, num1, num2);

// const twice = num => calculator.bind( { operation: '*' }, num, 2);

// after refactoring

export const multiplier = calculator.bind( { operation: '*' } );

export const summator = calculator.bind( { operation: '+' } );

export const twice = calculator.bind( { operation: '*' }, 2 );