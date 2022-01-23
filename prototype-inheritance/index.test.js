import { it } from 'eslint/lib/rule-tester/rule-tester'
import { vehicle, ship, getOwnProps } from './index'

// tests for the objects vehicle and ship

it('should log into the console "Argo lifting anchor up. Argo is moving."', () => {

  const consoleSpy = jest.spyOn(console, 'log');

  ship.startMachine();

  expect(consoleSpy).toHaveBeenCalledWith('Argo lifting anchor up. Argo is moving.');

});

it('should log into the console "Argo stopped. Argo lifting anchor down."', () => {

  const consoleSpy = jest.spyOn(console, 'log');

  ship.stopMachine();

  expect(consoleSpy).toHaveBeenCalledWith('Argo stopped. Argo lifting anchor down.');
  
});

// test for the function returning only own properties of an object, excluding methods

it('should return [ "name" ]', () => {

  expect(getOwnProps(ship)).toEqual([ 'name' ]);
  
});