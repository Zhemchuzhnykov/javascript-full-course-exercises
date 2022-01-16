import { it } from 'eslint/lib/rule-tester/rule-tester';
import { user, defer, userProfile, salaryGenerator } from './index';

// test for the object returning a full name of a user

it('should return "John Doe"', () => {
  
  expect(user.getFullName()).toEqual('John Doe');

});

// test of the function delaying the realization of another function

it('should log 75 into console', done => {

  const consoleSpy = jest.spyOn(console, 'log');

  const playerPerformance = {
    goals: 33,
    assists: 21,
    points(penaltiesEarned) {
      console.log((this.goals * 2) + (this.assists * 1.5) + (penaltiesEarned * 1.5));
    },
  };

  defer(playerPerformance.points.call( { goals: 18, assists: 19 }, 7), 1000);

  done();
  
  expect(consoleSpy).toHaveBeenCalledWith(75);

});

// tests for the getter and setter methods of the object userProfile

it('should return the string "John Doe"', () => {

  expect(userProfile.getFullName()).toEqual('John Doe');

});

it('should return the string "Adam Adamantiy"', () => {

  userProfile.setFullName('Adam Adamantiy');

  expect(userProfile.getFullName()).toEqual('Adam Adamantiy');

});

// tests for the function emulating the work of the method bind() without apllying the method bind()

it('should return 51439', () => {

  expect(salaryGenerator('midfielder', 7)).toEqual(51439);

});