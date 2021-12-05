// function 1

function getArrayBounds(arr) {
  if (!Array.isArray(arr)) {
    return null;
  } 
    return [arr.length, arr[0], arr[arr.length - 1]];
}