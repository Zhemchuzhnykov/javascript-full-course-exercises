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

// function 3. Receiving certain data from an object using different approaches.

const transaction = {
  currency: 'USD',
  value: 170,
  operation: 'sale',
  agent: {
    country: 'Ukraine',
    company: 'NYSE',
  },
  'operation time': 1584029990001,
};

console.log(transaction.currency);
console.log(transaction["value"]);
const key = 'operation';
console.log(transaction[key]);
console.log(transaction.agent["company"]);
console.log(transaction.agent.country);
console.log(transaction["operation time"]);

// function 4. Assigning properties to an object using different approaches.

const user = {
  name: 'Tom',
  age: 17,
};

user.hobby = 'football';
const anotherKey = 'married';
user[anotherKey] = false;
user['favorite music'] = 'rock';
user.address = {};
user.address.country = 'Ukraine';
user.address.building = 17;
console.log(user);

// function 5. To get keys of an object.
// An arrow function with one argument for receiving an array =>
// apply loop for... in to iterate all properties of a received array =>
// type in the console every iterated variable receiving a key name

function getKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}

// function 6. A function getting selected properties from an object.
// An arrow function with two arguments for an object and a list of properties =>
// create an empty object result where selected properties will be collected =>
// build a loop for.. in for an object to iterate all the properties of an object =>
// use if-operator with includes() applied to a list (array) to check if the list includes the iterated property =>
// in if {} assign the iterated property to result => return result

const pickProps = (obj, props) => {
  const result = {};
  let iteratedKey = '';
  for (let key in obj) {
    iteratedKey = key.toString();
    if(props.includes(iteratedKey)) {
      result[key] = obj[key];
    }
  }
  return result;
};

// function 7. Filtering object properties.
// Build an arrow function receiving one argument for an object =>
// declare a variable that will collect the required properties =>
// build a for... in loop that will interate all the properties of a received object =>
// check every iterated value whether it meets the requirement with if-statement =>
// add the selected properties values to the variable

const getAdults = obj => {
  const result ={};
  for (let key in obj) {
    if(obj[key] >= 18) result[key] = obj[key];
  }
  return result;
};