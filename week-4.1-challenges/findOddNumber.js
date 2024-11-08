

//Challenge 7: Find Odd Numbers
// Write a function that takes an array of numbers and returns a new array with only the odd numbers



 function findOddNumbers(array){
    const oddNumber= array.filter(num => num % 2 !== 0); // СОНДГОЙ ТООНУУДЫГ ШҮҮХ
return oddNumber;
    }

    // Usage examples:
    console.log(findOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]
     console.log(findOddNumbers([2, 4, 6, 8, 10])); // []
    