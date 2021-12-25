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

// function 12. returns a round sum of received numbers in the format "$16.50"
// an arrow function with one argument to receive an array =>
// reduce() => function in reduce() => returns a total number =>
// Math.floor( num * 100 ) / 100 => returns this value

const numbersSet8 = [10.43842, 20.4392, 90.43320];

const getTotalPrice = arr => {
  return '$' + (Math.floor((arr.reduce( (aggregated, element) => { return aggregated + element} )) * 100) / 100);
}

// function 13. returns an array of random numbers from a received range of numbers
// an arrow function with three arguments - array length, range start, range end =>
// function for getting an integer in a range => creating an empty array => array.length =>
//   min = Math.ceil(min);
//   max = Math.floor(max); => min === max return null; => return iteration with map => function in map()
//   Math.floor(Math.random() * (max - min) + min);
// }

const getRandomNumbers = (length, from, to) => {
  let result = [];
  const min = Math.ceil(from);
  const max = Math.floor(to);
  if (min === (max + 1)) {
    return null;
  } else {
    for (let index = 0; index < length; index ++) {
      result.push(Math.floor(Math.random() * (max - min) + min));
    }
  };
  return result;
};

// function 14. Rounding a float number to a certain float point.
// an arrow function with two arguments for a float number and a threshold for a returned float num =>
// return an array with 5 elements =>
// each element is a calculation of a returned number with different methods =>
// Math.floor() + calculation => Math.trunc() + calculation => Math.ceil() + calculation =>
// Math.round() + calculation => Math.toFixed()

const superRound = (num, prec) => {
  let multiplyingNum = 1;
  for (let index = 0; index < prec; index ++) {
    multiplyingNum += '0';
  }
  return [
    Math.floor( num * multiplyingNum ) / multiplyingNum,
    Math.trunc( num * multiplyingNum ) / multiplyingNum,
    Math.ceil( num * multiplyingNum ) / multiplyingNum,
    Math.round( num * multiplyingNum ) / multiplyingNum,
    +num.toFixed(prec)
  ];
};