export const makeCounter = () => {
  let count = 0;
  return function() {
    return count++;
  }
}

const counter1 = makeCounter();
const counter2 = makeCounter();

export const createCalculator = () => {
  let number = 0;

  const add = num => {
    number += num;
  };

  const decrease = num => {
    number -= num;
  };

  const reset = () => {
    number = 0;
  };

  const getMemo = () => {
    return number;
  };

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calculator1 = createCalculator();
const calculator2 = createCalculator();

