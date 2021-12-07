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