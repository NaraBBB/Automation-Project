
function removeSpecificElement(numbers, elementToRemove) {
return numbers.filter(num => num !== elementToRemove)
 
}
console.log(removeSpecificElement([1, 2, 3, 2, 4, 2], 2));
console.log(removeSpecificElement(["a", "b", "c", "b"], "b"));
console.log(removeSpecificElement([5, 6, 7], 10));
