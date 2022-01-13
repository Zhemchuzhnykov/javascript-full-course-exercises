import { it } from 'eslint/lib/rule-tester/rule-tester';
import { user, defer } from './index';

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

