// Challenge 6: Calculate Average
// Write a function that takes an array of numbers and returns the average.

function calculateAverage(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

// Usage examples:
console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
console.log(calculateAverage([10, 20, 30, 40, 50])); // 30
