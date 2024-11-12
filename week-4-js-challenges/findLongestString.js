// Challenge 1: Find the Longest String

// Write a function to find the longest string in the array.

function findLongestString(array) {
  var longestText = "";

  for (let i = 0; i < array.length; i++) {
    // ["I", "am", "learnig", "JavaScript"]

    if (array[i].length > longestText.length) {
      longestText = array[i];
    }
  }
  return longestText;
}

// Usage examples:
console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
console.log(findLongestString(["one", "two", "three"])); // "three"
console.log(findLongestString(["1", "22", "333"])); // "333"
