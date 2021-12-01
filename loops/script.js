// exercise 1

const n = 119;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log('Result: ' + sum);

// exercise 2

const m = 1;
const n = 19;
let result = 1;
for (let i = 1; i <= 19; i++) {
  if (i % 2 !== 0) {
    result *= i;
  }
}
console.log(result);

// exercise 3

for (let i = 1; i <= 5; i++) {
  let result = 0;
  console.log("\n=> " + i + " <=\n\n");
  for (let n = 1; n < 10; n++) {
    result = i * n;
    console.log(i + " x " + n + " = " + result);
  }
}

// exercise 4

const n = 19;
let sum = "";
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);

// exercise 5

const start = 1;
const end = 19;
let result = 0;
for (let i = 1; i <= end; i++) {
  if (i % 5 === 0) {
    console.log(i);
  } else if (i % 2 === 0 && i % 4 !== 0) {
    result += i;
  } else if (i % 3 === 0) {
    result -= i;
  } else if (i % 4 === 0) {
    result *= i;
  } else {}
}

// exercise 6

let sum = 0;
for (let i = 0; i <= 1000; i++) {
  if (i % 2 !== 0) {
    console.log("Found");
    sum += i;
  }
}
if (sum * 5 > 5000) {
  console.log("Bigger");
} else {
  console.log("Smaller or equal");
}

// exercise 7

let sum = 0;
for (let i = 1; i <= 10000000; i++) {
  sum += i;
}
console.log(sum);