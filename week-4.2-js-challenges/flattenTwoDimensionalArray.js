
function flattenArray(dimensionalArray){
    
return dimensionalArray.flat()

}
console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]
console.log(flattenArray([["a", "b"], ["c", "d"]])); // ["a", "b", "c", "d"]
console.log(flattenArray([[1], [2], [3]])); // [1, 2, 3]/

