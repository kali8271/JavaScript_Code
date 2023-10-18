/******************************************** Day 9th of 21Day Coding Challenge ****************************************** */
/******************************************* Today's Topic is Control Flow statements ****************************************** */

let value1 = 23
let value2 = 34
let value3 = 45

if (value1 === value2) {  // Using if-else 
    console.log("Both are equal");
}
else {
    console.log(" Both are not equal ");
}

if (value1 == value2 && value1 == value3) { // using if-else ladder
    console.log(`largest is : ${value1}`);
}
else if (value2 == value1 && value2 == value3) {
    console.log(`largest is : ${value2}`);
} else {
    console.log(`largest is ${value3}`);
}

const name = "Chand"
const id = 345
const password = '234@chand'

if (name == "Chand") {   // Nesting of if-else ladder
    if (id == 345) {
        console.log(`Your name is : ${name}`);
        console.log(`Your id is : ${id}`);
    }
    else {
        console.log("Use your given password")
    }
}
else {
    console.log("Enter correct information ");
}

/************************************** Switch statement ****************************************** */
let num1 = 56
let num2 = 45
let char1 = '+'
let char2 = '-'
let char3 = '*'
let char4 = '/'
let char5 = '%'
switch (char5) {
    case '+':
        console.log("Sum is ",(num1 + num2));
        break;
    case '-':
        console.log("Substraction is ",(num1 - num2));
        break;
    case '*':
        console.log("Multiplication is ",(num1 * num2));
        break;
    case '/':
        console.log("Divide is ",(num1 / num2));
        break;
    case '%':
        console.log("Reminder is ",(num1 % num2));
        break;

    
    default:
        console.log("Syntax error");
        break;
}