
// Advanced Challenge 4: Check for All Unique Elements

// Write a function that checks if all elements in an array are unique. Return true if unique, false otherwise.

function allUniqueElements(array){
  const unique = [];
    for(let i=0; i < array.length; i++){
  if(!unique.includes(array[i])){
    unique.push(array[i])
  }else{
    return false;
  }
}
return true;
return 
}
// Example:
console.log(allUniqueElements([1, 2, 3, 4])); // true
console.log(allUniqueElements([1, 2, 3, 3])); // false

