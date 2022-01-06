import { sendMessage, setMessage, testFunction } from './index.js';

it('should return a certain message with a name passed as an argument', () => {
  const person = 'Kseniya';

  expect(sendMessage(person)).toEqual('Kseniya, Just learn it! Your Gromcode');
});

it ('should change a message in the function sendMessage', () => {
  const newMessage = 'just leave it';
  setMessage(newMessage);

  expect(sendMessage('Kseniya')).not.toEqual('Kseniya, Just learn it! Your Gromcode');
})

it('should return 7', () => {

  expect(testFunction(2,5)).toEqual(7);
})