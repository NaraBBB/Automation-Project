
// Challenge 3: Find Strings with Dollar Sign

// Write a function to find all strings that include a $ sign in the array.
function findDollarStrings(characters){
const sign = [];

for (let i = 0; i < characters.length; i++){
    if (characters[i].includes('$')) {
        sign.push(characters[i]); 
}

}
return sign; 
}

// // Usage examples:
console.log(findDollarStrings(["I", "have", "$10"])); // ["$10"]
console.log(findDollarStrings(["$", "$$", "$$$"])); // ["$", "$$", "$$$"]
console.log(findDollarStrings(["no", "dollars", "here"])); // []

