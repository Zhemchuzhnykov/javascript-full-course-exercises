const n = 119;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log('Result: ' + sum);

const m = 1;
const n = 19;
let result = 1;
for (let i = 1; i <= 19; i++) {
  if (i % 2 !== 0) {
    result *= i;
  }
}
console.log(result);