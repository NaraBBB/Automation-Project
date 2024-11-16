// Challenge 3: Count positive and negative numbers in an array
// Write a function to count positive and negative numbers in an array

function countNegativeAndPositiveNumbers(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativeCount++;
    } else if (arr[i] > 0) {
      positiveCount++;
    }
  }
  console.log(`The negative numbers in an array is ${negativeCount}`); //"The negative numbers in an array is 2"
  console.log(`The negative numbers in an array is ${positiveCount}`); // "The positive numbers in an array is 5"
}

// Usage examples:
let arr = [10, 20, -1, 22, 99, 20, -9];

countNegativeAndPositiveNumbers(arr);
