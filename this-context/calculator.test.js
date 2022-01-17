import { it } from "eslint/lib/rule-tester/rule-tester";
import { calculator, multiplier, summator, twice } from './calculator';

// tests for the functions created based on the function calculator

it('should return the product of the multiplication of two numbers', () => {

  expect(multiplier(2, 7)).toEqual(14);

});

it('should return the product of the addition of two numbers', () => {

  expect(summator(2, 7)).toEqual(9);

});

it('should return the product of the multiplication of a passed number on two', () => {

  expect(twice(15)).toEqual(30);

});