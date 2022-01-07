import { it } from 'eslint/lib/rule-tester/rule-tester';
import { makeCounter } from './index';

it('should return 1 at the second call of the counter', () => {
  const counter1 = makeCounter();

  counter1();

  expect(counter1()).toEqual(1);
});

it('should not return 1 at the second call of the counter', () => {
  const counter1 = makeCounter();
  const counter2 = makeCounter();

  counter1();
  
  expect(counter2()).not.toEqual(1);
})