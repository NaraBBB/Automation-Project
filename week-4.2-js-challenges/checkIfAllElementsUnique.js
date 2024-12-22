function areAllElementsUnique(array) {
  
  const uniqueSet = new Set(array);
  return uniqueSet.size === array.length;
}

console.log(areAllElementsUnique([1, 2, 3, 4, 5]));
console.log(areAllElementsUnique(["a", "b", "c", "a"]));
console.log(areAllElementsUnique([10, 20, 30, 40, 50]));
