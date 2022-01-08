// counter

export const makeCounter = () => {
  let count = 0;
  return function() {
    return count++;
  }
}

const counter1 = makeCounter();
const counter2 = makeCounter();

// calculator

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

// logger

export const createLogger = () => {

  const records = []

  const warn = text => {
    records.push({
      message: text,
      type: 'warn',
      dateTime: new Date(),
    });
  };

  const error = text => {
    records.push({
      message: text,
      type: 'error',
      dateTime: new Date(),
    });
  };

  const log = text => {
    records.push({
      message: text,
      type: 'log',
      dateTime: new Date(),
    });
  };

  const getRecords = messageType => {
    if (messageType === undefined) return records.sort((a, b) => b.dateTime - a.dateTime);

    return records.filter(record => record.type === messageType).sort((a, b) => b.dateTime - a.dateTime);
  };

  return {
    warn,
    error,
    log,
    getRecords
  };
};

const logger1 = createLogger();
const logger2 = createLogger();