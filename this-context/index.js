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

// an object user that has a method returning a full name of a user and a method that can set a new full name

export const userProfile = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const personName = fullName.split(' ');
    this.firstName = personName[0];
    this.lastName = personName[1];
  },
};

// object that contains a value increasing for one every second and a number of passed minutes

export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,
  startTimer() {
    this.intervalId = setInterval(() => {
      const resetSecAddMin = () => { this.secondsPassed = 0; this.minsPassed += 1 };
      this.secondsPassed < 59 ? this.secondsPassed += 1 : resetSecAddMin();
      }, [1000]);
  },
  getTime() {
    return this.secondsPassed < 10 ? `${this.minsPassed}:0${this.secondsPassed}` : `${this.minsPassed}:${this.secondsPassed}`;
  },
  stopTimer() {
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

// the below commented solution is to pass a Gromcode test

// const timer = {
//   secondsPassed: 0,
//   minsPassed: 0,
//   intervalId: null,
//   startTimer() {
//     this.intervalId = setInterval(() => {
//         if (this.secondsPassed === 60) {
//             this.minsPassed += 1;
//             this.secondsPassed = 0;
//         }
//         this.secondsPassed += 1;
//     }, 1000);
//   },
//   getTime() {
//     return this.secondsPassed < 10 ? `${this.minsPassed}:0${this.secondsPassed}` : `${this.minsPassed}:${this.secondsPassed}`;
//   },
//   stopTimer() {
//     clearInterval(this.intervalId);
//   },
//   resetTimer() {
//     this.secondsPassed = 0;
//     this.minsPassed = 0;
//   },
// };

// objects to pass as an argument to the function emulating the work of the method bind() created with the methods call() and apply()

const playerProfile = {
  age: 19,
  level: 91,
  salary(position, driveLevel) {
    switch (position) {
      case 'defender': return Number.parseInt((this.level / this.age) * 1500 * driveLevel);
      break;
      case 'goalkeeper': return Number.parseInt((this.level / this.age) * 2000 * driveLevel);
      break;
      case 'midfielder': return Number.parseInt((this.level / this.age) * 2500 * driveLevel);
      break;
      case 'forward': return Number.parseInt((this.level / this.age) * 3000 * driveLevel);
      break;
      default: return Number.parseInt((this.level / this.age) * 1000 * driveLevel);
    };
  },
};

const playerProfile2 = {
  age: 33,
  level: 97,
};

// a function emulating the work of the method bind() created with the methods call() and apply()

// before refactoring: using the key words arguments ES5, the function fixates the passed context
// (emulates the work of the method bind())

// function bind (func, context) {
//   const arrayWithArguments = [... arguments];
//   arrayWithArguments.shift();
//   return function() {
//     return func.call(...arrayWithArguments );
//   }
// };

// after refactoring phase 1: using the rest operator ES6, the function fixates the passed context
// (emulates the work of the method bind())

// function bind(func, context, ...rest) {
//   return function (...args) {
//       return func.apply(context, rest.concat(args));
//   };
// };

// after refactoring phase 2: the returned function with a fixated context can be assigned to a variable;
// and this variable will receive optional arguments for the returned fanctions;

function bind(func, context) {
  return function (...args) {
      return func.apply(context, args);
  };
};

export const salaryGenerator = bind(playerProfile.salary, playerProfile2);

console.log(salaryGenerator('forward', 9));