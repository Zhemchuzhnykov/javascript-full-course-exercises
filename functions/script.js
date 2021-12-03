function sum(num1, num2) {
  return num1 + num2;
}

function sayHi(name) {
  console.log("Hi, " + name);
}

function getEvenOdd(num) {
  if (num % 2 === 0) {
    return "even";
  }
  return "odd";
}

function square(num) {
  return num ** 2;
}

function getSum(num1, num2) {
  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) sum += i;
  }
  return sum;
}