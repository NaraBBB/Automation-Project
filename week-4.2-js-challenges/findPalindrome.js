
function findPalindromes(words) {
  let palindrome = words.filter(str => str === str.split('').reverse().join(''))
  return palindrome;

}

console.log(findPalindromes(["racecar", "hello", "madam", "world"])); 
console.log(findPalindromes(["noon", "deed", "civic"])); 
console.log(findPalindromes(["apple", "banana", "cherry"]));


