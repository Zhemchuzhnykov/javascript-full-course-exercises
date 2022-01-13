// object with a method returning a full name of a user

export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// an object requesting a number from a user for a phone call

const callbackPrompt = {
  message: 'Type your phone number here:',
  showPrompt() {
    const userAnswer = prompt(this.message);
    console.log(userAnswer);
  },
  showDeferredPrompt(miliseconds) {
    setTimeout(() => this.showPrompt(), miliseconds);
  },
};

// a function which defers a call of another function for a specified time

const playerPerformance = {
  goals: 33,
  assists: 21,
  points(penaltiesEarned) {
    console.log((this.goals * 2) + (this.assists * 1.5) + (penaltiesEarned * 1.5));
  },
};

export const defer = (func, ms) => {
  return function() {
    setTimeout(() => func.call(this, ...arguments));
  };
};

const deferredPointsDisplay = defer(playerPerformance.points, 1000);

deferredPointsDisplay.call( { goals: 18, assists: 19}, 7 );

// making a context for different functions with the method call()

