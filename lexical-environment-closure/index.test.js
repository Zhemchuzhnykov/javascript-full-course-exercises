import { it } from 'eslint/lib/rule-tester/rule-tester';
import { makeCounter, createCalculator, createLogger } from './index';

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

// logger tests 

it('should return an object with the value "warn" for the key "type"', () => {
  const logger = createLogger();

  logger.warn('Cyber-criminals are hacking the system');
  logger.error('Your girlfriend tried to create a new user for Windows');
  logger.log('You opened World of Tanks, have a great time!');

  const extractedObject = logger.getRecords('warn');

  expect(extractedObject[0].type).toEqual('warn');
});

it('should return an object with the value "error" for the key "type"', () => {
  const logger = createLogger();

  logger.warn('Cyber-criminals are hacking the system');
  logger.error('Your girlfriend tried to create a new user for Windows');
  logger.log('You opened World of Tanks, have a great time!');

  const extractedObjects = logger.getRecords('error');

  expect(extractedObjects[0].type).toEqual('error');
});

it('should return an object with the value "log" for the key "type"', () => {
  const logger = createLogger();

  logger.warn('Cyber-criminals are hacking the system');
  logger.error('Your girlfriend tried to create a new user for Windows');
  logger.log('You opened World of Tanks, have a great time!');

  const extractedObjects = logger.getRecords('log');

  expect(extractedObjects[0].type).toEqual('log');
});

it('should return three objects of different types', () => {
  const logger = createLogger();

  logger.warn('Cyber-criminals are hacking the system');
  logger.error('Your girlfriend tried to create a new user for Windows');
  logger.log('You opened World of Tanks, have a great time!');

  const extractedObjects = logger.getRecords();

  expect(extractedObjects.length).toEqual(3);
});

it('should return an empty array', () => {
  const logger = createLogger();

  logger.warn('Cyber-criminals are hacking the system');
  logger.warn('Your girlfriend tried to create a new user for Windows');
  logger.log('You opened World of Tanks, have a great time!');

  const extractedObjects = logger.getRecords('error');

  expect(extractedObjects.length).toEqual(0);
});

it('should return different arrays for two loggers created with the same function', () => {
  const logger1 = createLogger();
  const logger2 = createLogger();

  logger1.warn('Cyber-criminals are hacking the system');
  logger2.error('Your girlfriend tried to create a new user for Windows');

  expect(logger1.getRecords('error')).toEqual([]);
  expect(logger2.getRecords('warn')).toEqual([]);
})