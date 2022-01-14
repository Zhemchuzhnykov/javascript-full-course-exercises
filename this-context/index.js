// // object with a method returning a full name of a user

// export const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// // an object requesting a number from a user for a phone call

// const callbackPrompt = {
//   message: 'Type your phone number here:',
//   showPrompt() {
//     const userAnswer = prompt(this.message);
//     console.log(userAnswer);
//   },
//   showDeferredPrompt(miliseconds) {
//     setTimeout(() => this.showPrompt(), miliseconds);
//   },
// };

// // a function which defers a call of another function for a specified time

// const playerPerformance = {
//   goals: 33,
//   assists: 21,
//   points(penaltiesEarned) {
//     console.log((this.goals * 2) + (this.assists * 1.5) + (penaltiesEarned * 1.5));
//   },
// };

// export const defer = (func, ms) => {
//   return function() {
//     setTimeout(() => func.call(this, ...arguments));
//   };
// };

// const deferredPointsDisplay = defer(playerPerformance.points, 1000);

// deferredPointsDisplay.call( { goals: 18, assists: 19}, 7 );

// // an object user that has a method returning a full name of a user and a method that can set a new full name

// export const userProfile = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   setFullName(fullName) {
//     const personName = fullName.split(' ');
//     this.firstName = personName[0];
//     this.lastName = personName[1];
//   },
// };

// object that contains a value increasing for one every second and a number of passed minutes

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  startTimer() {
      setInterval(() => {
      const resetSecAddMin = () => { this.secondsPassed = 0; this.minsPassed += 1 };
      this.secondsPassed < 60 ? this.secondsPassed += 1 : resetSecAddMin();
      }, [1000]);
  },
  getTime() {
    return this.secondsPassed < 10 ? `${this.minsPassed}:0${this.secondsPassed}` : `${this.minsPassed}:${this.secondsPassed}`;
  },
  stopTimer() {

  },
};