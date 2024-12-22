

//Challenge 9: findTheIntersectionOfTwoArrays.js

// Write a function that takes two arrays and returns an array that is the intersection of the two arrays.// 

function findIntersection(array1, array2){

   return array1.filter(element => array2.includes(element));
  
}


console.log(findIntersection([1, 2, 3], [3, 4, 5])); // [3]
console.log(findIntersection(["a", "b", "c"], ["b", "c", "d"])); // ["b", "c"]
console.log(findIntersection([10, 20, 30], [40, 50, 60])); // [ ]