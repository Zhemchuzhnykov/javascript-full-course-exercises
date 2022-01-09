import { it } from 'eslint/lib/rule-tester/rule-tester';
import { arr, createArrayOfFunctions } from './index';

it('should return an index of a function called', () => {
  
  expect(arr[7]()).toEqual(7);
})

// tests for the function createArrayOfFunctions

it('should return null if any data type, except for the number, is passed as an argument', () => {

  const testArray = createArrayOfFunctions('stringa');

  expect(testArray).toEqual(null);
});

it('should return an empty array if no argument is passed', () => {

  const testArray = createArrayOfFunctions();

  expect(testArray).toEqual([]);
});

it('should return an index of a function which is called', () => {

  const testArray = createArrayOfFunctions(10);

  expect(testArray[9]()).toEqual(9);
});