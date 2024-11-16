// Challenge 4: Find duplicates in two arrays
// Write a function that takes two arrays as arguments and returns an array of values
//that are repeated more than once across the two input arrays

function findDuplicates(array1, array2) {
  let duplicates = [];
  let frequency = {};

  let combinedArray = array1.concat(array2);

  for (let element of combinedArray) {
    frequency[element] = (frequency[element] || 0) + 1;
  }
  for (let key in frequency) {
    if (frequency[key] > 1) {
      duplicates.push(Number(key));
    }
  }
  return duplicates;
}

const array1 = [1, 2, 3, 4, 5, 5];
const array2 = [4, 5, 6, 7, 7, 8];
console.log(findDuplicates(array1, array2));
