function getLargestPalindrome(numbers) {
  let largestPalindrome = 0;
  for (let outerLoop = numbers; outerLoop > 0; outerLoop--) {
    for (let innerLoop = outerLoop; innerLoop > 0; innerLoop--) {
      const newNumber = outerLoop * innerLoop;
      const str = newNumber.toString();
      if (
        str === str.split("").reverse().join("") &&
        newNumber > largestPalindrome
      ) {
        largestPalindrome = newNumber;
      }
    }
  }
  return largestPalindrome;
}

console.log(getLargestPalindrome(1000));
