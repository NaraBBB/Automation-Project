// Challenge 1: Square All Numbers squareAllNumbers
// Write a function that takes an array of numbers and returns a new array with each number squared.

function squareNumbers(numbers) {
  let multiplyNum = [];
  for (let i = 0; i < numbers.length; i++) {
    multiplyNum.push(numbers[i] * numbers[i]);
  }
  return multiplyNum;
}

// Usage examples:
console.log(squareNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
console.log(squareNumbers([10, 20, 30, 40, 50])); // [100, 400, 900, 1600, 2500]
