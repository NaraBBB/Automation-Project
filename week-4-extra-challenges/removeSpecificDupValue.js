//Advanced Challenge 5: Remove Specific Duplicate Values

// Write a function that takes an array and a specific value, removing all instances of that value.

function removeSpecificDuplicate(array, searchElement) {
  let unique = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== searchElement) {
      unique.push(array[i]);
    }
  }
  return unique;
}
// Example:
console.log(removeSpecificDuplicate([1, 2, 2, 3, 4, 2], 2)); // [1, 3, 4]
console.log(removeSpecificDuplicate(["a", "b", "a", "c"], "a")); // ["b", "c"]
