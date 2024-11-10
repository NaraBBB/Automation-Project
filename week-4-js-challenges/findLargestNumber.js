

// Challenge 2: Find the Largest Number
// Write a function to find the largest number in the array.
// Usage examples:

function findLargestNumber(numbers){
    
    let largestNum =  Math.max(...numbers);
    return largestNum;
   
        }
    
    


console.log(findLargestNumber([1, 2, 3, 4, 5])); // 5
console.log(findLargestNumber([10, 20, 30, 40, 50])); // 50
console.log(findLargestNumber([-1, -2, -3, -4, -5])); // -1