import { it } from 'eslint/lib/rule-tester/rule-tester';
import { User, UserRepository } from './user';

// tests for the class User reproducing users' profiles and UserRepository saving users' profiles

const testedProfile = new User(19, 'Adam', 911);
const testedArrayOfUsers = [ { id: 18, name: 'Dasha', sessionId: 401 }, testedProfile, { id: 20, name: 'Vova', sessionId: 5200 } ];
const testedUsersRepository = new UserRepository(testedArrayOfUsers);

// tests fro the class User 

it('should return 19', () => {

  expect(testedProfile.id).toEqual(19);

});

it('should return "Adam"', () => {

  expect(testedProfile.name).toEqual('Adam');

});

it('should return 911', () => {

  expect(testedProfile.sessionId).toEqual(911);

});

// tests for the methods of the class UserRepository

it('should return the object { id: 19, name: "Adam", sessionId: 911 }', () => {

  expect(testedUsersRepository.users[1]).toEqual({ id: 19, name: "Adam", sessionId: 911 });

});

it('should return the object [ "Dasha", "Adam", "Vova" ]', () => {

  expect(testedUsersRepository.getUserNames()).toEqual([ "Dasha", "Adam", "Vova" ]);

});

it('should return the object [ 18, 19, 20 ]', () => {

  expect(testedUsersRepository.getUserIds()).toEqual([ 18, 19, 20 ]);

});

it('should return the object "Dasha"', () => {

  expect(testedUsersRepository.getUserNameById(18)).toEqual('Dasha');

});