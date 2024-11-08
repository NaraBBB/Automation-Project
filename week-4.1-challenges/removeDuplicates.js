
// Challenge 5: removeDuplicateElements
// Write a function that takes an array and returns a new array with duplicate elements removed.


 
function removeDuplicates(arr) {
    let uniqueElement = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueElement.includes(arr[i])) {
            uniqueElement.push(arr[i]);
        }
    }
    return uniqueElement;
}



// Usage examples:
console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
console.log(removeDuplicates(["a", "a", "b", "b", "c"])); // ["a", "b", "c"]
