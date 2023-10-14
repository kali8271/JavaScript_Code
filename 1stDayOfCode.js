// understanding about type of variable declaration or how to declare a variable
// using const, let and var

const name = "Kalimullah "  // using const keyword
console.log(name);  // output => Kalimullah 

//name = "Chand"
//console.log(name);  // raise error bacause const keyword has constant value 

let Score = 323  // using let keyword
//console.log(Score);  // output => 323

Score = 456
console.log(Score); // output => 456
// let keyword is changeable 

var notebool = "classmate"
console.log(notebool);     // output => classmate   var keyword generally not used by developers

// Conversion of primitive datatypes

let score = 345
console.log(typeof score);  // type of score is Number

let score1 = "345"
console.log(typeof score1);      // type of score1 is String

// conversion of number into string and vice versa

let num1 = 345
let StringNumber = String(num1) // conversion of number into string with putting String(num1) using this syntax
console.log(StringNumber);  // print the value
console.log(typeof StringNumber); // print the type of value

// conversion of string into number

let name1 = "Kalimullah "
let NumberString = Number(name1) // conversion of string value into number 
console.log(NumberString);  // print the value
console.log(typeof NumberString);  // print the type of value