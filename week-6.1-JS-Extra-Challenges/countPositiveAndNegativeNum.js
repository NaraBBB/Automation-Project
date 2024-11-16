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
  console.log(`The negative numbers in an array is ${negativeCount}`);
  console.log(`The negative numbers in an array is ${positiveCount}`);
}

let arr = [10, 20, -1, 22, 99, 20, -9];

countNegativeAndPositiveNumbers(arr);
