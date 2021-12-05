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