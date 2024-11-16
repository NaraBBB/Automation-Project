// Challenge 1: Find the Largest Palindrome
// Write a function to find the largest palindrome made from the product of any two numbers between 0 and 1000
function getLargestPalindrome(numbers) {
  //
  let largestPalindrome = 0;
  for (let outerLoop = numbers; outerLoop > 0; outerLoop--) {
    for (let innerLoop = outerLoop; innerLoop > 0; innerLoop--) {
      const newNumber = outerLoop * innerLoop;
      const str = newNumber.toString();
      if (str === str.split('').reverse().join('') && newNumber > largestPalindrome){
        largestPalindrome = newNumber;
    }
  }
}
  return largestPalindrome;
}

// Usage examples:
console.log(getLargestPalindrome(1000)); // 906609
