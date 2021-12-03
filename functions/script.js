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