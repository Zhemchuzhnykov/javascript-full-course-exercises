const { it } = require("eslint/lib/rule-tester/rule-tester")

it ('Should tell that 17 is equal to 17', () => {
  expect(17).toEqual(17);
})

it('Should tell that 18 is not equal to 17', () => {
  expect(18).not.toEqual(17);
})

import { getEvenNumbers } from "./unit-tests/index.js"

it ('Should return only even numbers', () => {
  const testNumbers = [1, 2, 3, 5, 6, 7, 9, 10];
  
  expect(getEvenNumbers(testNumbers)).toEqual([2, 6, 10])
})