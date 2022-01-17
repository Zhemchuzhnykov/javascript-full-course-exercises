import { it } from 'eslint/lib/rule-tester/rule-tester';
import { timer } from './index';

// tests for the methods of the object timer

beforeAll(() => {
  jest.useFakeTimers()
});


// test for the property secondsPassed

it('should return 2 after 2 seconds of the code run', () => {

  timer.startTimer();

  jest.advanceTimersByTime(2000);

  timer.stopTimer();

  expect(timer.secondsPassed).toEqual(2);
  
});

// test for the property minsPassed

it('should return 1 after 1 min of the code run', () => {

  timer.startTimer();

  jest.advanceTimersByTime(60000);

  timer.stopTimer();

  expect(timer.minsPassed).toEqual(1);
  
});

// test for the collective work of the methods startTimer, stopTimer, and getTime

it('should return "0:07" after 7 seconds of the code run', () => {

  timer.resetTimer();

  timer.startTimer();

  jest.advanceTimersByTime(7000);

  timer.stopTimer();

  expect(timer.getTime()).toEqual('0:07');
  
});

// tets for the method resetTime

it('should return "0:00" after some code run', () => {

  timer.startTimer();

  jest.advanceTimersByTime(5000);

  timer.stopTimer();

  timer.resetTimer();

  expect(timer.getTime()).toEqual('0:00');
  
});