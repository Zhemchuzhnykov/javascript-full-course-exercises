// function 1. Receives a string and returns a string written on more than one line.
// an arrow function with two arguments for receiving a string and a number of lines =>
// create an array which will be collecting substrings =>
// build a while-loop in which an array will be filled => build an instruction for capitalizing 1st letter
// => build a condition of breaking a loop => return an array joined with \n instruction

// const { rules } = require("eslint-config-airbnb-base");

const hotLine = 'dkjsdweijdksfjskejkdsjfkdjfiwefsdfffwew';

const splitText = (string, lineLength) => {
  if (lineLength === undefined) lineLength = 10;
  let strLines = [];
  let index = 0;
  if (typeof string === 'string') {
    while (index <= string.length) {
      let line = string.substring(index, index + lineLength);
      strLines.push(line.charAt(0).toUpperCase() + line.slice(1));
      index += lineLength;
    }
  } else {
    return null;
  }
  return strLines.join('\n');
}

// function 2. Sorts a list of contacts by a name alphabetically
// an arrow function with two arguments for an array of contacts and direction of sorting (false,true)
// build a sort function with localeCompare to define sorting => build if condition inside the sort fun.
// return the sorted array or null

const contactList = [
  { name: 'Backham', phoneNumber: '1173-777-77-7' },
  { name: 'Styles', phoneNumber: '7380-111-11-1'},
  { name: 'Kate', phonuNumber: '7927-777-11-2' },
  { name: 'Pavel Volya', phoneNumber: '2320-555-66-1' },
  { name: 'Adriano Chelentano', phoneNumber: '0000-111-22-3'}
];

// const sortContacts = (contacts, sortingOrder) => {
//   if (Array.isArray(contacts)) {
//     return contacts.sort( (a,b) => {
//       if (sortingOrder === false) {
//         return b.name[0].localeCompare(a.name[0]);
//       } else {
//         return a.name[0].localeCompare(b.name[0]);
//       }
//     });
//   } else {
//     return null;
//   }
// }

// const sortContacts = (contacts, sortingOrder) => {
//   if (Array.isArray(contacts)) {
//     return contacts.sort( (a,b) => {
//       if (sortingOrder === false) {
//         return b.name[0].localeCompare(a.name[0]);
//       } else {
//         return a.name[0].localeCompare(b.name[0]);
//       }
//     });
//   } else {
//     return null;
//   }
// }

// const sortContacts = (contacts, sortingOrder) => {
//   if (Array.isArray(contacts) && sortingOrder === false) {
//     return contacts.sort( (a,b) => {
//         return b.name[0].localeCompare(a.name[0]);
//       })} else if (Array.isArray(contacts)) {
//         return contacts.sort( (a, b) => {
//         return a.name[0].localeCompare(b.name[0]);
//       })} else {
//     return null;
//   }
// }

// const sortContacts = (contacts, isAsc) => {
//   if (Array.isArray(contacts) && isAsc === false) {
//     return contacts.sort( (a,b) => {
//         return b.name[0].localeCompare(a.name[0]);
//       })} else if (Array.isArray(contacts)) {
//         return contacts.sort( (a, b) => {
//         return a.name[0].localeCompare(b.name[0]);
//       })} else {
//     return null;
//   }
// }

// const sortContacts = (contacts, isAsc) => {
//   if (Array.isArray(contacts) && isAsc !== false) {
//     return contacts.sort( (a,b) => {
//         return a.name[0].localeCompare(b.name[0]);
//       })} else if (Array.isArray(contacts) && isAsc === false) {
//         return contacts.sort( (a, b) => {
//         return b.name[0].localeCompare(a.name[0]);
//       })} else {
//     return null;
//   }
// }

// const sortContacts = (contacts, isAsc) => {
//   if (Array.isArray(contacts) && isAsc !== false) {
//     return contacts.sort( (a,b) => a.name[0].localeCompare(b.name[0]));
//   } else if (Array.isArray(contacts) && isAsc === false) {
//         return contacts.sort( (a, b) => b.name[0].localeCompare(a.name[0]));
//       } else {
//     return null;
//   }
// }

// const sortContacts = (contacts, isAsc) => {
//   if (!Array.isArray(contacts)) {
//       return null;
//     } else if (isAsc === false) {
//       return contacts.sort( (a, b) => b.name[0].localeCompare(a.name[0]));
//   } else {}
//     return contacts.sort((a, b) => a.name[0].localeCompare(b.name[0]));
// }

// const sortContacts = (contacts, isAsc) => {
//   if (!Array.isArray(contacts)) {
//       return null;
//     } else if (isAsc === false) {
//       return contacts.sort( (a, b) => b.name[0].localeCompare(a.name[0]));
//   } else {
//     return contacts.sort((a, b) => a.name[0].localeCompare(b.name[0]));
//   }
// }

const sortContacts = (contacts, isAsk) => {
let result = [];
  if (!Array.isArray(contacts)) {
    return null;
  } else if (isAsk === false) {
    result = contacts
      .sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
  } else {
    result = contacts
      .sort((a, b) => {
        return a.name.localeCompare(b.name);
  });
  }
  return result;
}

// function 3. Splits a string into parts and returns an array of these parts of a certain length

const hotLine2 = 'buenosanchoamigocarabaocancaogansaloganseloritas!hiyya!!!marakuyakuyakuya';

const splitString = (string, lineLength) => {
  if (lineLength === undefined) lineLength = 10;
  let strLines = [];
  let index = 0;
  let lastArrEl = '';

  if (typeof string === 'string') {

    while (index <= string.length) {
      strLines.push(string.substring(index, index + lineLength));
      index += lineLength;
    }

    lastArrEl = strLines[strLines.length - 1];
    for (let index = lastArrEl.length; index < lineLength; index++) {
      strLines[strLines.length - 1] += ".";
    }

  } else {
    return null;
  }

  return strLines;
}

// function 4. Finds a number of occurences of a string inside a longer string
// an arrow function with two arguments: 1st for a big string, 2nd for a string to find
// a variable for an array => method match() => returns array length

const massiveString = 'Manchester is the place of manhood where a real man Mr. Man makes his real man bussiness';
const searchedString = 'man';
const empty = '';

const countOccurrences = (text, str) => {
  if (text === undefined) text = '';
  if (str.length === 0) {
    return null;
  } else {
    const searched = new RegExp(str, 'g');
    return text.match(searched).length;
  }
}

// function 5. calculator
// an arrow function which receives a mathematical expression as a string =>
// use eval function to generate the return from a math operation in a string

const hotCalc = "2 - 5";

// const calc = string => eval(string);

const calc = expression => {

  const [leftOperand, operator, rightOperand] = expression.split(' ');
  let result;

  switch (operator) {
    case "+": 
      result = +leftOperand + +rightOperand;
      break;
    case "-": 
      result = leftOperand - rightOperand;
      break;
    case "*": 
      result = leftOperand * rightOperand;
      break;
    case "/":
      result = leftOperand / rightOperand;
  }

  return `${expression} = ${result}`;
}

// function 6. Returning a string in a reverse order
// an arrow function with an argument for a string => validation =>
// string to an array => reduce() => unshift

// const reverseString = string => {

//   if (typeof string !== "string") return null;

//   return string.split('').reduce( (accumulator, symbol) => symbol + accumulator );

// }

const reverseString = string => {

  if (typeof string !== "string") return null;

  return string.split('').reverse().join('');

}

// function 7. Returning an array of formatted data.
// an arrow function receving an array of strings as the only argument =>
// filter() to exclude elements and edit included elements => return filer()

const hotTranasctions = ['vitya', '12.3232', 'Vicka', '1', ' 73 329.38', ' 18.302 '];

// const cleanTransactionsList = transactions => {

//   return transactions.filter( transaction => transaction.search(/[A-Za-z]/) === -1)
//     .map( transaction => '$' + parseFloat(transaction).toFixed(2));

// }

const cleanTransactionsList = transactions => {

  return transactions.filter( transaction => !isNaN(transaction))
    .map( transaction => '$' + parseFloat(transaction).toFixed(2));

}