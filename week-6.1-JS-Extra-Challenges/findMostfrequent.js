function mostFrequent(arr, n) {
  let maxCount = 0;
  let frequent = arr[0];

  for (let outer = 0; outer < n; outer++) {
    let count = 0;
    for (let inner = 0; inner < n; inner++) {
      if (arr[outer] === arr[inner]) {
        count++;
      }
    }
    if (
      count > maxCount ||
      (count === maxCount && arr.indexOf(arr[outer]) < arr.indexOf(frequent))
    ) {
      maxCount = count;
      frequent = arr[outer];
    }
  }
  return frequent;
}

let arr = [40, 50, 30, 40, 50, 20, 30, 100, 11, 11];
let n = arr.length;
console.log(mostFrequent(arr, n));
