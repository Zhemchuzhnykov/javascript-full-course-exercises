// function 1

function getArrayBounds(arr) {
  if (!Array.isArray(arr)) {
    return null;
  } 
    return [arr.length, arr[0], arr[arr.length - 1]];
}

//function 2

function getSum(arr) {
  let result = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i of arr) {
    result += i;
  }
  return result; 
}

// function 3

function getSpecialNumbers(from, to) {
  let result = [];
  for (let i = from; i <= to; i++) {
    if (i % 3 === 0) result.push(i);
  }
  return result;
}

// function 4

function swap(numbers) {
  const [first, ...rest] = numbers;
  const result = [...rest, first];
  return result;
}

// function 5

function swapManual(numbers) {
  const first = numbers[0];
  let result = [];
  for (let i = 1; i < numbers.length; i++) {
    result[i - 1] = numbers[i];
  }
  result.push(first);
  return result;
}

// function 6

function createEmptyArray(len) {
  let result =[];
  result.length = len;
  return result;
}

// function 7

function squareArray(arr) {
  let result = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i of arr) {
    result.push(i ** 2);
  }
  return result;
}

// function 8

function checkSum(arr) {
  let sum = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i of arr) {
    sum += i;
  }
  return sum > 100;
}

// function  9

function increaseEvenEl(arr, delta) {
  let result = [];
  if (!Array.isArray(arr)) return null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result[i] = arr[i];
    } else {
      result[i] = arr[i] + delta;
    }
  }
  return result;
}

// function 10

function reverseArray(arr) {
  let result = [];
  if (!Array.isArray(arr)) return null;
  for (let i of arr) {
    result.unshift(i);
  }
  return result;
}

// function 11

function cloneArr(arr) {
  let clonedArr = [];
  if (!Array.isArray(arr)) return null;
  for (let i of arr) {
    clonedArr.push(i);
  }
  return clonedArr;
}

// function 12

function checker(arr) {
  if (!Array.isArray(arr)) return null;
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    for (let n = 1; n < arr.length; n++){
      if (arr[i] <= min && arr[i] <= arr[n]) {
        min = arr[i];
      }
    }
    for (let n = 1; n < arr.length; n++){
      if (arr[i] >= max && arr[i] >= arr[n]) {
        max = arr[i];
      }
    }
  }
  return (min + max) > 1000;
}

// function 13

function sortAsc(array) {
  if(!Array.isArray(array)) return null;
  array.sort((a, b) => a - b);
  return array;
}

function sortDesc(array) {
  if(!Array.isArray(array)) return null;
  array.sort((a, b) => b - a);
  return array;
}

// function 14

function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < clients.length; i++) {
    if (clients[i] === client && (balances[i] - amount) >= 0) {
      balances[i] -= amount;
      return balances[i];
    } else if (clients[i] === client && (balances[i] - amount) < 0) {
      return -1;
    } else {}
  }
}

//function 15

const getSubArray = (arr, numberOfElements) => {
  let resultArray = [];
  for (let i = 0; i < numberOfElements; i++) {
    resultArray[i] = arr[i];
  }
  return resultArray;
}

// function 16

const includes = (arr, num) => {
  for (let i of arr) {
    if (i === num) return true;
  };
  return false;
};

// function 17

const removeDuplicates = (array) => {
  let newArray = [];
  if (!Array.isArray(array)) return null;
  for (let i = 0; i < array.length; i++) {
    if (!array.includes(array[i], i + 1)) newArray.push(array[i]);
  }
  return newArray;
}