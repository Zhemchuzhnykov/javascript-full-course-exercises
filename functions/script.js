// Exercise 1

function sum(num1, num2) {
  return num1 + num2;
}

// exercise 2

function sayHi(name) {
  console.log("Hi, " + name);
}

// exercise 3

function getEvenOdd(num) {
  if (num % 2 === 0) {
    return "even";
  }
  return "odd";
}

// exercise 4

function square(num) {
  return num ** 2;
}

// exercise 5

function getSum(num1, num2) {
  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) sum += i;
  }
  return sum;
}

// exercise 6

function increaser(a, index) {
  if (a > index) a += index;
  return a;
}

// exercise 7

function sum(from, to) {
  let result = 0;
  for (let i = from; i <= to; i++) {
    result += i;
  }
  return result;
}

function compareSums(a, b, c, d) {
  const sum1 = sum(a, b);
  const sum2 = sum(c, d);
  return sum1 > sum2;
}

// exercise 8

function findDivCount(a, b, n) {
  let count = 0;
  for (let i = a; i <= b; i++) {
    if (i % n === 0) count++;
  }
  return count;
}

// // exercise 9

function getPrimes(num) {
  for (let i = 2; i <= num; i++) {
    for (let n = 2; n <= i; n++) {
      if (i !== 2 && i % n === 0) {
        break;
      } else if (i === 2 || n === i - 1) {
        console.log(i);
      }
    }
  }
}
