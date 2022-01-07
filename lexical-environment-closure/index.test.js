import { it } from 'eslint/lib/rule-tester/rule-tester';
import { makeCounter, createCalculator } from './index';

// counter tests 

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

// calculator tests

it('should return 10 for the first calculator', () => {
  const calculator1 = createCalculator();

  calculator1.add(10);

  expect(calculator1.getMemo()).toEqual(10);
});

it('should return -5 for the first calculator', () => {
  const calculator1 = createCalculator();

  calculator1.decrease(5);

  expect(calculator1.getMemo()).toEqual(-5);
});

it('should return 0 for the first calculator', () => {
  const calculator1 = createCalculator();

  calculator1.decrease(5);
  calculator1.reset();

  expect(calculator1.getMemo()).toEqual(0);
});

it('should return 10 for the first calculator and 0 for the second calculator', () => {
  const calculator1 = createCalculator();
  const calculator2 = createCalculator();

  calculator1.add(10);

  expect(calculator1.getMemo()).toEqual(10);
  expect(calculator2.getMemo()).toEqual(0);
});