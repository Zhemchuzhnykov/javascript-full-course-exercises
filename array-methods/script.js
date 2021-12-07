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