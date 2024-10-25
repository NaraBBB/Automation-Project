const first = 5
const second = 4

// Add your code here                                                              
if(first > second){
    console.log(`${first} is bigger than variable second`)
}else{
    console.log(`${second} is bigger than variable first`)
}

//2 - Create a function that returns the length of a string
function getStringLength(str) {   
    // Add code here to return the length of str
return str.length;

  }
  
  console.log(getStringLength('sergii')) // 6
  console.log(getStringLength('alex')) // 4



  //3 - Create a function called divideByTwo. It should accept 1 parameter, divide it  by 2 and return the result of the division
  function divideByTwo(numberToDivide) {
    // Add your code here
return numberToDivide/2

  }
  
console.log(divideByTwo(6)) // 3 
console.log(divideByTwo(105)) // Results in 52.5
  
// FYI. Same thing can be achieved by assigning result to const first
const result = divideByTwo(6)
console.log(result) // 3


//4 - Finish the function. It accepts 2 params, adds them up and returns the sum of two
function sum(a, b) { 
  // Add code here to return the sum of a and b 
return a + b;

}

console.log(sum(1, 2)) // 3
console.log(sum(2, 2)) // 4
console.log(sum(55, 2)) // 57

//5 - Finish the function. It should accept one parameter, 'number', check if it is greater than 5 and return true or false.
function isBiggerThan5(number) {
  if(number > 5){
    return true;
  }
  else{
    // Your code here
    return false;
  }
 
}

console.log(isBiggerThan5(6)) // true
console.log(isBiggerThan5(5)) // false
console.log(isBiggerThan5(4)) // false
console.log(isBiggerThan5(1)) // false

//6 - Finish the function. It should accept two parameters and return the larger one.

// Your code here 

function findBiggerNumber(firstNum, secondNum) {
  if(firstNum > secondNum){
    // Your code here
    return firstNum;
  }
  else{
    return secondNum;
  }
}

console.log(findBiggerNumber(6, 7)) // 7
console.log(findBiggerNumber(5, 1)) // 5
console.log(findBiggerNumber(2, 2)) // 2

//7 - Create the function. It should accept two string parameters and return the longer one

function longerString(text1, text2){
// Your code here
if(text1.length > text2.length){
  return text1;
}else{
  return text2;
}
}
console.log(longerString('codemify', 'test')) // codemify
console.log(longerString('automation', 'coding')) // automation
console.log(longerString('automation', 'the codemify')) // the codemify

//8 - Equality Check. Create a function that returns true or false that matches the examples below


// Your code here
function checkEquality(num, type) {
  if (num === type) {  
    return true; 
  } else{
    return false;
  }
  }

console.log(checkEquality(1, true)+ ' A number and a boolean: the value and type are different');  //false
console.log(checkEquality(0, "0")+ ' A number and a string: the type is different');   //false
console.log(checkEquality(1, 1) +' A number and a number: the type and value are equal');     // true


//9. Older Than Me: Create a function that outputs a string specifying if the person in the example below is older or younger than you."

const myAge = 27;
function compareAge(name, age){
// Your code here
if(myAge < age){
  return `${name} is older than me.  `
}else{
  return `${name} is younger than me.`
}
}
console.log(compareAge("Joel", 36))
console.log(compareAge("Samuel", 24))
console.log(compareAge("Lily", 28))
// ➞ "Joel is older than me."
 // ➞ "Samuel is younger than me."
 // ➞ "Lily is oder than me."
