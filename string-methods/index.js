// function 1. Receives a string and returns a string written on more than one line.
// an arrow function with two arguments for receiving a string and a number of lines =>
// create an array which will be collecting substrings =>
// build a while-loop in which an array will be filled => build an instruction for capitalizing 1st letter
// => build a condition of breaking a loop => return an array joined with \n instruction

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

const sortContacts = (contacts, isAsc) => {
  if (Array.isArray(contacts) && isAsc !== false) {
    return contacts.sort( (a,b) => {
        return a.name[0].localeCompare(b.name[0]);
      })} else if (Array.isArray(contacts) && isAsc === false) {
        return contacts.sort( (a, b) => {
        return b.name[0].localeCompare(a.name[0]);
      })} else {
    return null;
  }
}