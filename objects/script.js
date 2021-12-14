// function 1. Transforming an array into an object
// arrow function with one argument for an array => apply forEach with an array => assign an interated value both as
// a key and value => return a new ibject

const transformToObject = arr => {
  const result = {};
  arr.forEach(element => result[element] = element);
  return result;
}

// function 2. Transforming an object into an array of the object values.
// arrow function with one argument for receiving an array => creating an empty arry =>
// looping through the received object with the loop for... in =>
// adding values to the array with the method push() => returning an array.

const concatProps = obj => {
  const result = [];
  for (let value in obj) {
    result.push(obj[value]);
  }
  return result;
};