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

// function 3. Receving an object and typing in the console all its keys
// build an arrow function with one argument for receiving an object =>
// get the keys with Object.keys() and apply forEach() to bring the keys to the console.

const winners = {MU: 'champions league', liverpool: 'premier league', westHam: 'League Cup', tottenham: 'fa cup',}

function getKeys(obj) {
  Object.keys(obj).forEach(key => (console.log(key)));
}

// function 4. Adding properties to an object and changing a received object with a dot operator
// arrow function with two arguments: object and value to add as ID =>
// adding with a dot operator => returning an object

const person = {name: 'Yevhen', surname: 'Zhemchuzhnykov',}

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

// function 5.  Adding properties to an object and changing a received object with assign()
// arrow function with two arguments: object and value to add as ID =>
// adding ID with assign() and returning an object

const person_ext = {name: 'Yevhen', surname: 'Zhemchuzhnykov', profession: 'Developer',}

function addPropertyV2(userData, userId) {
  const idNum = { id: userId, }
  return Object.assign(userData, idNum);
}

// function 6. Adding properties to an object and not changing a received object with assign()
// using the notation Object.assign({}, objectArg, idArg) => returning a new array

const person_super = {name: 'Yevhen', surname: 'Zhemchuzhnykov', profession: 'Developer', hobby: 'Football',}

function addPropertyV3(userData, userId) {
  const idNum = { id: userId, }
  return Object.assign({}, userData, idNum);
}

//function 7. Adding properties to an object and not changing a received object with a spread operator
// using destructuring and a spread operator to assign properties from the first arguments =>
// assigning the property from the second argument with a dot notation
// returning a new object

const person_extra = {name: 'Yevhen', surname: 'Zhemchuzhnykov', sign: 'Aquarius', hobby: 'Football',}

function addPropertyV4(userData, userId) {
  const { ...result } = userData;
  result.id = userId;
  return result;
}

// function 8. Merging objects with the second object assigned first
// function with two arguments for both objects => assign() => returning a merged object

const superPlayer = { speed: 91, technique: 91, speedingup: 90, };
const extraPlayer = { shots: 82, headers: 80, endurance: 85, };

function mergeObjectsV1(obj1, obj2) {
  return Object.assign({}, obj2, obj1);
}

// function 9. Merging objects with the second object assigned second

function mergeObjectsV2(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

// function 10. function 8. Merging objects with the second object assigned first with a spread operator

function mergeObjectsV3(obj1, obj2) {
  const result = { ...obj2, ...obj1};
  return result;
}

// function 10. function 8. Merging objects with the second object assigned second with a spread operator

function mergeObjectsV4(obj1, obj2) {
  const result = { ...obj1, ...obj2};
  return result;
}

// function 11. Get names of residents from a complex object.
// const result = [];
// Object.values() to receive an array for each room = [[{},{},{}],[{{},{},{}}],[{},{},{}],[{},{},{}]] =>
// forEach() to iterate each array = [{},{},{}] => function in forEach() => every iterated array as an arg
// => Object.map() to iterated every {} and add its value to result value() + push()

const rooms = {
  room1: [
    { name: 'Yevhen' },
    { name: 'Nastia' },
    { name: 'Katia'},
  ],
  room2: [
    { name: 'Ruslan' },
    { name: 'Alex' },
    { name: 'Lesia'}
  ],
}

const empty = {};

const getPeople = obj => {
  const result = [];
  Object.values(obj).forEach(arr => {arr.map(resident => {result.push(Object.values(resident))})})
  return result.flat();
};
