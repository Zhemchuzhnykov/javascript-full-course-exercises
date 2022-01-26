import { it } from 'eslint/lib/rule-tester/rule-tester';
import { Order } from './order';

// tests for the class Order

const stabilizerSell = new Order(5000, 'Kiev', 'Sell');

it('should generate any id', () => {

  expect(stabilizerSell.id).not.toEqual(undefined);

});

it('should return 5000', () => {

  expect(stabilizerSell.price).toEqual(5000);

});

it('should return false', () => {

  expect(stabilizerSell.isConfirmed).toEqual(false);

});

it('should return "Kiev"', () => {

  expect(stabilizerSell.city).toEqual('Kiev');

});

it('should return "Sell"', () => {

  expect(stabilizerSell.type).toEqual('Sell');

});

it('should return true after running the method checkPrice()', () => {

  expect(stabilizerSell.checkPrice()).toEqual(true);

});

it('should return true for the property isConfirmed', () => {

  stabilizerSell.confirmOrder();

  expect(stabilizerSell.isConfirmed).toEqual(true);

});

it('should return true for the property isValidType', () => {

  expect(stabilizerSell.isValidType()).toEqual(true);

});

it('should return false for the property isValidType', () => {

  const tested = new Order(0, 'Kiev', 'Swap');

  expect(tested.isValidType()).toEqual(false);

});

// dates testing

it('should return true comparing the time of an order and current time', () => {

  const currentTime = new Date();
  const orderMadeNow= stabilizerSell.dateCreated.getDate() + '/' + stabilizerSell.dateCreated.getMonth() + '/' + stabilizerSell.dateCreated.getYear() + ' - ' + stabilizerSell.dateCreated.getHours() + ':' + stabilizerSell.dateCreated.getMinutes();
  const timeNow = currentTime.getDate() + '/' + currentTime.getMonth() + '/' + currentTime.getYear() + ' - ' + currentTime.getHours() + ':' + currentTime.getMinutes();

  expect(orderMadeNow).toEqual(timeNow);

});

it('should return true comparing the time of an order confirmation and current time', () => {

  stabilizerSell.confirmOrder();

  const currentTime = new Date();
  const orderConfirmedNow= stabilizerSell.dateConfirmed.getDate() + '/' + stabilizerSell.dateConfirmed.getMonth() + '/' + stabilizerSell.dateConfirmed.getYear() + ' - ' + stabilizerSell.dateConfirmed.getHours() + ':' + stabilizerSell.dateConfirmed.getMinutes();
  const timeNow = currentTime.getDate() + '/' + currentTime.getMonth() + '/' + currentTime.getYear() + ' - ' + currentTime.getHours() + ':' + currentTime.getMinutes();

  expect(orderConfirmedNow).toEqual(timeNow);

});