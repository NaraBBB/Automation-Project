
function findSecondLargestNumber(arr) {
  const sortedNumbers = arr.sort((a,b)=> b-a)

  return sortedNumbers[1]
}
// Example usage
console.log(findSecondLargestNumber([1, 2, 3, 4, 5])); // 4
console.log(findSecondLargestNumber([10, 20, 30, 40, 50])); // 40
console.log(findSecondLargestNumber([-1, -2, -3, -4, -5])); // -2

