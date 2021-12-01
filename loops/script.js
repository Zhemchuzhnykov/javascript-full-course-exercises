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

for (let i = 1; i <= 5; i++) {
  let result = 0;
  console.log("\n=> " + i + " <=\n\n");
  for (let n = 1; n < 10; n++) {
    result = i * n;
    console.log(i + " x " + n + " = " + result);
  }
}