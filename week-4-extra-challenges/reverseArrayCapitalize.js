// Advanced Challenge 3: Reverse String Array and Capitalize
// Write a function that takes an array of strings, reverses the order, and capitalizes each string.

function reverseAndCapitalize(reversedArray) {
  return reversedArray.reverse().map((word) => word.toUpperCase());
}
// Example:
console.log(reverseAndCapitalize(["apple", "banana", "cherry"])); // ["CHERRY", "BANANA", "APPLE"]
console.log(reverseAndCapitalize(["one", "two", "three"])); // ["THREE", "TWO", "ONE"]
