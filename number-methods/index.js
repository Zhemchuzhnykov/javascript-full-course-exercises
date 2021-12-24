// Function 1. get the numbers which are finite with Number.isFinite()
// an arrow function with one argument for receiving an array =>
// filter() => function in filter() => returns a value which is finite

const numbersSet1 = [1, 2, 7, 19e9327328329, '19', true, { name: 'Yevhen'},];

const getFiniteNumbers = arr => {
  return arr.filter(element => {return Number.isFinite(element)});
}

// Function 2. get the numbers which are finite with window.isFinite()
// an arrow function with one argument for receiving an array =>
// filter() => function in filter() => returns a value which is finite

const numbersSet2 = [1, 2, 7, 19e9327328329, { name: 'Yevhen'}, '19', true,, [1, 2, 3] ];

const getFiniteNumbersV2 = arr => {
  return arr.filter(element => {return isFinite(element)});
};

// Function 3. return all NaN from an array with Number.isNaN() =>
// an arrow function with one argument for receiving an array =>
// filter() => function in filter() => returns a value which is NaN

const numbersSet3 = [1, NaN, 7, undefined, { name: 'Yevhen'}, '19', true, null ];

const getNaN = arr => {
  return arr.filter(element => {return Number.isNaN(element)});
};

// Function 4. return all NaN from an array with window.isNaN() =>
// an arrow function with one argument for receiving an array =>
// filter() => function in filter() => returns a value which is NaN

const getNaNV2 = arr => {
  return arr.filter(element => {return isNaN(element)});
};

// Function 5. return all integers from an array
// an arrow function with one argument for receiving an array =>
// filter() => function in filter() => returns a value which is an integer

const numbersSet4 = [ 1, 2.2, 7, 9.99, 19 ];

const getIntegers = arr => {
  return arr.filter(element => {return Number.isInteger(element)});
};

// Function 6. return integers from an array of numbers with Number.parseInt()
// an arrow function with one argument for receiving an array =>
// map() => function in map() => returns integers from numbers

const numbersSet5 = [1.1, 2.2e8, '7.01', -19.01];

const getParsedIntegers = arr => {
  return arr.map(element => { return Number.parseInt(element) });
}

// Function 7. return integers from an array of numbers with parseInt()
// an arrow function with one argument for receiving an array =>
// map() => function in map() => returns integers from numbers

const getParsedIntegersV2 = arr => {
  return arr.map(element => { return parseInt(element) });
}

// Function 8. returns float numbers from an array of numbers with Number.parseFloat()
// an arrow function with one argument for receiving an array =>
// map() => function in map() => returns float numbers from an array

const numbersSet6 = [1.99, 2.5, '7.7', '19.00price'];

const getParsedFloats = arr => {
  return arr.map(element => { return Number.parseFloat(element) });
}

// Function 9. returns float numbers from an array of numbers with parseFloat()
// an arrow function with one argument for receiving an array =>
// map() => function in map() => returns float numbers from an array

const getParsedFloatsV2 = arr => {
  return arr.map(element => { return parseFloat(element) });
}

// Function 10. returns an array of a received number rounded with different methods
// an arrow function with one argument to receive a float number
// using 4 rounding methods => multiplying => rounding => dividing in a returned array
// using toFixed() in a returned array

const multiRound = num => { 
  return [
    Math.floor( num * 100 ) / 100,
    Math.trunc( num * 100) / 100,
    Math.ceil( num * 100 ) / 100,
    Math.round( num * 100 ) / 100,
    +num.toFixed(2)
  ]
};

// function 11. returns a maximum module from numbers in an array
// an arrow function with one argument to receive an array =>
// check if an array, empty array, not an array is passed => return null
// Math.max => spread operator => array.map() => function in map() => get a module of a number

const numbersSet7 = [1, -2, 7, -19];

const getMaxAbsoluteNumber = arr => {
  if (arr.length === 0 || !Array.isArray(arr)) {
    return null;
  } else {
    return Math.max( ... arr.map( element => { return Math.abs(element) } ));
  }
};