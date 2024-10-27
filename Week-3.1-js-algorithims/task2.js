// Challenge 1: Simple check

// Write a function called checkGreaterTen that takes a number as an argument and checks whether it's greater than 10.

function checkGreaterTen(num) {
  if (num > 10) {
    return "Greater than 10";
  } else {
    return "Not greater than 10";
  }
}
console.log(checkGreaterTen(15)); // "Greater than 10"
console.log(checkGreaterTen(5)); // "Not greater than 10"
console.log(checkGreaterTen(10)); // "Not greater than 10"

// Challenge 2: Multi-level conditions

// Write a function called assignGrade that takes a number score and assigns a letter grade based on the score.
// The function should return "A" for scores 90 and above, "B" for scores 80 - 89, "C" for scores 70 - 79,
// "D" for scores 60 - 69 and "F" for scores below 60.
// Note that the three dots at the end add to the string length.
function assignGrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 60) {
    return "D";
  } else {
    return "F";
  }
}
// Usage examples:
console.log(assignGrade(95)); // "A"
console.log(assignGrade(85)); // "B"
console.log(assignGrade(75)); // "C"
console.log(assignGrade(65)); // "D"
console.log(assignGrade(55)); // "F"




// Challenge 3: Truncate String
// Write a function called truncateString that truncates a string if it is longer than the given maximum string length.
// The function should return the truncated string with a "..." ending.
function truncateString(text, number) {
  if (text.length > number) {
    return text.substring(0, number - 3) + "...";
  } else {
    return text;
  }
}

// Usage examples:
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11)); // "A-tisket...";

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14)); // "Peter Piper..."

// Challenge 4: Multi-level conditions II
// Write a function called checkEligibility that accepts an age and returns whether the person is eligible to vote,
// drive, and/or drink. If the person is 16 or older, they can drive. If they are 18 or older, they can vote.
// If they are 21 or older, they can drink.
const requiredAge = 18;
const minAge = 16;

function checkEligibility(age) {
  if (age < minAge) {
    return "Can't vote, drive, or drink";
  } else if (age < requiredAge && age >= minAge) {
    return "Can drive";
  } else if (age == requiredAge && age > minAge) {
    return "Can vote and drive";
  } else {
    return "Can vote, drive, and drink";
  }
}

// Usage examples:
console.log(checkEligibility(15)); // "Can't vote, drive, or drink"
console.log(checkEligibility(16)); // "Can drive"
console.log(checkEligibility(18)); // "Can vote and drive"
console.log(checkEligibility(22)); // "Can vote, drive, and drink"

// Challenge 5: Multi-level conditions III
// Write a function called isLeapYear that checks whether a year is a leap year. If the year is evenly divisible by 4,
// it is a leap year, unless it is evenly divisible by 100. However, if it is divisible by 400, then it is.
function isLeapYear(year) {
  if (year % 400 == 0) {
    return "Leap year";
  } else if (year % 100 == 0) {
    return "Not a leap year";
  } else if (year % 4 == 0) {
    return "Leap year";
  } else {
    return "Not a leap year";
  }
}
// Usage examples:

console.log(isLeapYear(2000)); // "Leap year"
console.log(isLeapYear(1800)); // "Not a leap year"
console.log(isLeapYear(2004)); // "Leap year"
console.log(isLeapYear(2021)); // "Not a leap year"

// // Challenge 6: Season Checker
// // Write a function called checkSeason that takes a month as an argument (from 1-12 where 1 is January and 12 is December)
// // and checks which season it is based on meteorological seasons. The function should return "Winter" for December (12),
// // January (1), and February (2), "Spring" for March (3), April (4), and May (5), "Summer" for June (6), July (7),
// // and August (8), and "Autumn" for September (9), October (10), and November (11).
function checkSeason(month){
    if(month >= 3 && month <= 5 ){
        return "Spring" 
    }else if(month >= 6 && month <= 8){
        return "Summer" 
        }else if(month >= 8 && month <= 11){
            return "Autumn"
        } else{
           return "Winter" 
        }     
    }
// Usage examples:
console.log(checkSeason(1)); // "Winter"
console.log(checkSeason(4)); // "Spring"
console.log(checkSeason(7)); // "Summer"
console.log(checkSeason(10)); // "Autumn"

// Challenge 7: FizzBuzz Simplified
// Write a function fizzBuzzSimplified that takes a number as an argument. If the number is divisible by 3,
// return "Fizz". If the number is divisible by 5, return "Buzz". If the number is divisible by both 3 and 5,
// return "FizzBuzz". If the number is not divisible by 3 or 5, return the number.

function fizzBuzzSimplified(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz";
  } else if (number % 3 == 0) {
    return "Fizz";
  } else if (number % 5 == 0) {
    return "Buzz";
  } else {
    return number;
  }
}
// Usage examples:
console.log(fizzBuzzSimplified(3)); // "Fizz"
console.log(fizzBuzzSimplified(5)); // "Buzz"
console.log(fizzBuzzSimplified(15)); // "FizzBuzz"
console.log(fizzBuzzSimplified(2)); // 2

// Challenge 8: Temperature Checker
// Write a function called checkTemp that takes a temperature in Fahrenheit as an argument.
// If the temperature is below 32, return "Freezing". If it's 32 - 50, return "Cold".
// If it's 51 - 70, return "Mild". If it's 71 - 90, return "Warm". If it's above 90, return "Hot".
function checkTemp(temperature){
    if(temperature < 32){
        return "Freezing" 
    } else if (temperature >32 && temperature <50) {
        return "Cold";
    } else if (temperature > 51 && temperature <70) {
        return "Mild";
    } else if (temperature >71 && temperature < 90) {
        return "Warm";
    } else {
        return "Hot";
    }
}

// Usage examples:
console.log(checkTemp(30)); // "Freezing"
 console.log(checkTemp(45)); // "Cold"
 console.log(checkTemp(65)); // "Mild"
console.log(checkTemp(75)); // "Warm"
 console.log(checkTemp(95)); // "Hot"

// Challenge 9: Traffic Sign
// Write a function called checkSign that accepts the color of a traffic sign ("red", "yellow", "green") as an argument.
// The function should return "Stop" if the sign is red, "Caution" if the sign is yellow, and "Go" if the sign is green.
function checkSign(colorOftrafficSign){
    if(colorOftrafficSign == "red"){
        return "Stop"
    } else if (colorOftrafficSign == "yellow") {
        return "Caution";
    } else if (colorOftrafficSign == "green") {
        return "Go";
    } else {
    return "no traffic sign"
    }
}

//Usage examples:
console.log(checkSign("red")); // "Stop"
 console.log(checkSign("yellow")); // "Caution"
console.log(checkSign("green")); // "Go"

// Challenge 10: Meal Suggestion
// Write a function suggestMeal(time, diet) that takes a time of the day ("morning", "afternoon", "evening")
// and a type of diet ("vegan", "vegetarian", "omnivore") as input. The function should return meal suggestions
// based on the input parameters.

function suggestMeal(time, diet){
    if(time == "morning" && diet == "vegan" ){
        return "Fruit smoothie with oats"
    }else if(time == "morning" && diet == "vegetarian"){
        return "Vegetarian scrambled eggs with toast"
    }else if (time == "morning" && diet == "omnivore") {
        return "Bacon and eggs with toast";
} else if (time == "afternoon" && diet == "vegan") {
    return "Vegan burrito";
} else if (time == "afternoon" && diet == "vegetarian") {
    return "Vegetarian pizza";
} else if (time == "afternoon" && diet == "omnivore") {
    return "Chicken sandwich";
}else if(time == "evening" && diet == "vegan"){
    return "Vegan lentil stew"
}else{
    return "I'm doing intermediate fasting"
}
}
// Usage examples:
console.log(suggestMeal("morning", "vegan")); // "Fruit smoothie with oats"
 console.log(suggestMeal("morning", "vegetarian")); // "Vegetarian scrambled eggs with toast"
console.log(suggestMeal("morning", "omnivore")); // "Bacon and eggs with toast"
console.log(suggestMeal("afternoon", "vegan")); // "Vegan burrito"
console.log(suggestMeal("afternoon", "vegetarian")); // "Vegetarian pizza"
console.log(suggestMeal("afternoon", "omnivore")); // "Chicken sandwich"
console.log(suggestMeal("evening", "vegan")); // "Vegan lentil stew"
