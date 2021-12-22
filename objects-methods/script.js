// function 1. Selecting object properties and returning an array of the selected properties keys.
// build an arrow function with one argument for receiving an object =>
// receiving a two level array with entries() =>
// checking the second value of each subarray with forEach() and adding it to a new array if fits
// returning a new array

const users = {Mark: 18, Anthony: 23, Baiden: 86, Jessica: 15,}

const getAdults = obj => {
  let result = [];
  Object.entries(obj).forEach(arr => {
    if (arr[1] >= 18) result.push(arr[0]);
  });
  return result;
};

// function 2. Copying properties of a received object into a returned object
// building an arrow function with one argument for receiving an object =>
// assigning the properties with the spread operator => returning a new object

const manUtdSignings = {midfielder: 'declan rice', midfielder2: 'kalvin phillips',};

// const copyObj = obj => {return ({ ...result } = obj)}; is not accepted by Gromcode

// function 2. Solution 2
// building an arrow function with one argument for receiving an object =>
// copying properties to a returned object with assign()

const muSigningsWinter = {midfielder: 'declan rice', midfielder2: 'kalvin phillips', defender: 'Super Man'};

const copyObj = obj => Object.assign({}, obj);

