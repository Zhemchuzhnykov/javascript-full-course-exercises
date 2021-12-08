// function 1: arrow function => applying filter() to a received array =>
// building the code returning true for the desired elements at their iterations

const getSpecialNumbers = array => array.filter(element => element % 3 === 0);

// function 2: building an arrow function => copies a received array to a new variable with slice()
// applying sort() to the copied array => specifying the parameters and b - a equation to make the function
// run the comparison and sorting elements in a descending order

const sortDesc = array => {
  const newArray = array.slice().sort((a,b) => b - a);
  return newArray;
};

// function 3. Build an arrow function => create a new variable to which we will assign the changed array =>
// => apply the method flat() => apply the method sort() => deliver a right function to the method sort().

const flatArray = arr => {
  const flattenedArray = arr.flat().sort((a, b) => a - b);
  return flattenedArray;
};

// function 4. Build an arrow function with two agruments - all students and failed students =>
// => create a new array variable
// => apply the method map() to the array => in the method map(), run a code checking if a student we need is iterated =>
// => if it is a student we need, concatenate it with the greeting and add to a new variable

const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  let successfulStudents =[];
  allStudentsList.map(student => {
    if (!studentsForRetake.includes(student)) successfulStudents.push('Good job, ' + student);
  })
  return successfulStudents;
}

// function 5. Build an arrow function => build a null return condition => apply map() to the received array
// => in map(), building a function which makes every number in the received array squared =>
// => returning a new array

const squareArray = array => {
  if (!Array.isArray(array) === true) return null;
  return array.map(num => { return num **= 2;})}

// function 6. Build an arrow function with one argument for receiving an array => declaring a new array variable
// build a null return inside the function =>
// => build map() inside the function => build an arrow function in map() => build the code in the function =>
// => adding every iterated value to the end of a new array with push() =. returning a new array

const reverseArray = array => {
  if (!Array.isArray(array) === true) return null;
  return array.slice().reverse();
}

// function 7. Build an arrow function with two argumenets (one for an array, another one for a number) =>
// builld a null return condition inside the function
// apply the method map() to a received array => write a function inside map() => 
// the function inside map() returns the sum of an iterated element and second argument =>
// return a new array

const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr) === true) return null;
  let result =[];
  arr.map(element => {if (element % 2 === 0) result.push(element + delta);});
  return result;
}

// function 8. Build an arrow function with one argument for receiving an array =>
// build a null return condition inside the function =>
// with a spread operator, coping a receved array into a new array => returning a new array

const cloneArr = arr => {
  if (!Array.isArray(arr) === true) return null;
  const [...result] = arr;
  return result;
}

// function 9. Build an arrow function with four arguments - array for clients, array for balances, client amount to withdraw from the client's balance => 
// with indexOf find the index of a client =>
// with the found index, find the balance and check if the balance is higher than amount to deduct =>
// if the balance is lower, return -1, if the balance is higher, deduct the amount from the balance
// return the balance after deduction

const withdraw = (clients, balances, client, amount) => {
  if (balances[clients.indexOf(client)] < amount) {
    return -1;
  } else {
    balances[clients.indexOf(client)] -= amount;
    return balances[clients.indexOf(client)];
  }
}

//function 10. Build an arrow function with one argument for receiving an array =>
// build a no-array return condition inside the function => apply reduce() to a received array =>
// build a function inside reduce() with two arguments - accumulator and iterations
// => the function accumulates all the values in the accumulator => return the accumulated value

const sum = arr => {
  if (!Array.isArray(arr) === true) return null;
  return arr.reduce((acca, element) => acca + element);
}