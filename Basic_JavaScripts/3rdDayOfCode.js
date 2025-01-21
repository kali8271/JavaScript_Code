//   3rd day of coding challenge 
//   Today's Topic is Number & Maths 
//   Discuss Number datatypes and its method 

let score = 234.45
console.log(score.toFixed());   // tofixed method of number datatypes is print only integer number  
// output =>  234

const newNumber = 34523.45
console.log(newNumber.toLocaleString()); // toLocaleString method of number datatypes is print in understandable language


const balance = 400
console.log(balance.toString()); // toString method gives the string value

const balance1 = 345
console.log(balance1.toPrecision(2)); // toPrecision method in Number datatypes is convert precision form or in the form of 10 raise to power

let amount = 1280
console.log(amount.toExponential(1)); // toExponential method in Number datatypes is convert precision form or in the form of 10 raise to power

//                  Built in library Math and its method in JavaScript

console.log(Math); // Math is object in javascript

let creditAmount = 345.34
console.log(Math.floor(creditAmount));   // floor method gives the lowest value 
// output =>  345

console.log(Math.max(creditAmount)); // max method gives the maximum value
// output => 345.34

console.log(Math.round(creditAmount)); // round method gives the roundoff value 
// output => 345

let debitAmount = -1234.90
console.log(Math.abs(debitAmount)) // abs method gives the absolute value that it change the negative value into positive value


