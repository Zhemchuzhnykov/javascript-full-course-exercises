import { it } from 'eslint/lib/rule-tester/rule-tester';
import { sendText, setText, testFunction, createMessenger } from './index.js';

it('should return a certain message with a name passed as an argument', () => {
  const person = 'Kseniya';

  expect(sendText(person)).toEqual('Kseniya, Just learn it! Your Gromcode');
});

it('should change a message in the function sendMessage', () => {
  const newMessage = 'just leave it';
  setText(newMessage);

  expect(sendText('Kseniya')).not.toEqual('Kseniya, Just learn it! Your Gromcode');
})

// messenger's methods tests

it('should return a message \'Bob, Just learn it! Your Gromcode\'', () => {
  const testName = 'Bob';
  const testMessenger = createMessenger();

  expect(testMessenger.sendMessage(testName)).toEqual('Bob, Just learn it! Your Gromcode');
});

it('should change a message from \'Just learn it\' to \'Just leave it\'', () => {
  const testMessenger = createMessenger();
  const testMessage = 'Just leave it';

  testMessenger.setMessage(testMessage);
  expect(testMessenger.sendMessage('Bob')).toEqual('Bob, Just leave it! Your Gromcode');
});

it('should change a sender from \'Gromcode\' to \'Master Splinter\'', () => {
  const testMessenger = createMessenger();
  const testSender = 'Master Splinter';

  testMessenger.setSender(testSender);
  expect(testMessenger.sendMessage('Bob')).toEqual('Bob, Just learn it! Your Master Splinter');
})