let message = 'Just learn it';

export const sendMessage = name => {
  return `${name}, ${message}! Your Gromcode`;
};

export const setMessage = text => {
  message = text;
}

export const testFunction = (sum1, sum2) => {
  return sum1 + sum2;
}