// var a = 17;

// if (a) {
//   let a = 1;

//   console.log(a);
// }

// console.log(a);


var a = 17;

if (a) {
  let a = 1;

  console.log(a);
}

console.log(a);


// array of functions 


// var arr = [];

// for (var i = 0; i < 10; i += 1) {
//   arr[i] = function () {
//     return i;
//   };
// }

var arr = [];

for (let i = 0; i < 10; i += 1) {
  arr[i] = function () {
    return i;
  };
}

export { arr };

// function returning an array of functions

export const createArrayOfFunctions = length => {
  if(typeof length !== 'undefined' && typeof length !== 'number') return null;

  return Array.from({length}, (value, index) => () => index);
};

// const createArrayOfFunctions = (number) => {
//   functionsArray = new Array(number).fill(0);
//   return functionsArray.map((element, index) => () => {
//       return index;
//     });
// };