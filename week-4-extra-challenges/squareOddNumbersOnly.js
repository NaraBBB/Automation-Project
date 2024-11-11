

//Advanced Challenge 1: Square Odd Numbers Only squareOddNumbersOnly.js

// Write a function that takes an array of numbers and returns a new array where only the odd numbers are squared.
function squareOddNumbers(array){
    
    return numbers = array.filter(num => num % 2 !== 0)
    .map(num => num ** 2)
    } 


// Example:
console.log(squareOddNumbers([1, 2, 3, 4, 5])); // [1, 2, 9, 4, 25]
console.log(squareOddNumbers([10, 13, 15, 18])); // [10, 169, 225, 18]