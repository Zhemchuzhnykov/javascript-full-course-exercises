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
// Object.values() => [[{},{},{}],[{},{},{}]]
// reduce() => [{},{},{},{},{},{}]
// map() => result.push(arg.key)

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
  room3: [
    { name: 'Andrey' },
    { name: 'Artem' },
    { name: 'Max'}
  ]
}

const empty = {};

// const getPeople = obj => {
//   const result = [];
//   Object.values(obj).forEach(arr => {arr.map(resident => {result.push(Object.values(resident))})})
//   return result.flat();
// };

const getPeople = obj => {
  return Object.values(obj).reduce((aggregated, arr) => {return aggregated.concat(arr)}, []).map(person => {return person.name});
}

// function 12. Calculating a total of transactions.
// an arrow function with one argument for a receiced array =>
// reduce() to iterate every object in an array and add amounts to an aggregate

const salaries = [
  { month: 'January', work: 'Support & Developer', amount: 1200, },
  { month: 'February', work: 'Developer & Filmmaker', amount: 1400, },
  { month: 'March', work: 'Developer & Filmmaker', amount: 1900, }
];

const getTotalRevenue = transactions => { 
  return transactions.reduce( (total, transaction) => { return total += transaction.amount }, 0); }

// function 13. Adding a property to an object with [] and changing a received object

const playersAgainstNewcastle = {right: 'Rashford', left: 'Sancho',}

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// function 14. Adding a property to an object with assign() and changing a received object

const playersAgainstBurnley = {midfielder1: 'Fred', midfielder2: 'McTominey', midfielder3: 'Van de Beek',}

function addPropertyV2(obj, key, value) {
  Object.assign(obj, {[key]: value} )
  return obj;
}

// function 15. Adding a property to an object with assign() and returning a new object

const playersAgainstWolves = {left: 'Greenwood', right: 'Rashford', }

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, {[key]: value} )
}

// function 16. Adding a property to an object with a spread operator and returning a new object

const playersAgainstVilla = {left: 'Martial', right: 'Rashford', }

function addPropertyV4(obj, key, value) {
  const result = {
    ... obj,
    [key]: value,
  }
  return result;
}

// function 17. reduce => reduce function => assign

const positions = ['goalkeeper', 'defender', 'midfielder', 'forward']
const players = ['De Gea', 'Varane', 'Bruno', 'Ronaldo']

// function buildObject(keysList, valuesList) {
//   const result = {};
//   for (let index = 0; index < keysList.length; index++ ) {
//     Object.assign(result, {[keysList[index]]: valuesList[index]})
//   }
//   return result;
// }

function buildObject(keysList, valuesList) {
  return keysList.reduce( (acca, iterated, index, valuesList) => { return Object.assign(acca, {[iterated]:valuesList}) } )
}

// function 18. Comparing primitive data inside objects
// Object.keys(), Object.values() => iteration => comparison => return

const rashford = {
  nation: 'english',
  age: 19,
  level: 9,
}

const bruno = {
  nation: 'portugal',
  age: 25,
  level: 10,
}

const fernandes = {
  nationality: 'portugal',
  age: 25,
  level: 10,
}

const greenwood = {
  nation: 'english',
  age: 19,
  level: 9,
}

const mason = {
  nation: 'english',
  age: 19,
}

function compareObjects(obj1, obj2) {
  const obj1Entries = Object.keys(obj1).concat(Object.values(obj1));
  const obj2Entries = Object.keys(obj2).concat(Object.values(obj2));
  if (obj1Entries.length === obj2Entries.length) {
    for (let index = 0; index < obj1Entries.length; index++) {
      if (obj1Entries[index] !== obj2Entries[index]) return false;
    }
  } else {
    return false;
  }
  return true;
}