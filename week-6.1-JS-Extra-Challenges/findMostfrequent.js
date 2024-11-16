//Challenge 2: Find the most frequent element in a given array

// Write a function to find the most frequent element in the array. If there are multiple elements that appear a maximum number of times, print the first of them


function mostFrequent(arr, n){
let maxCount = 0;
let frequent = arr[0]

for(let outer = 0; outer < n; outer++){
    let count = 0;
    for(let inner = 0; inner < n; inner ++){
        if(arr[outer] === arr[inner]){
        count ++ 
    }
    }
    if(count > maxCount || (count === maxCount && arr.indexOf(arr[outer]) < arr.indexOf(frequent))){
        maxCount = count;
        frequent = arr[outer]; 
    }
}
return frequent;

}

// Usage examples:
let arr = [40, 50, 30, 40, 50, 20, 30, 100, 11, 11];
let n = arr.length;
console.log(mostFrequent(arr, n)); // 40
