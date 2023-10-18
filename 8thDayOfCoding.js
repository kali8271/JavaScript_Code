// *********************************Scopes************************
// ********************************Global Scope ******************

let num1 = 45  // When we declare variables globally then these varaibles called Global Variable and these variable can access from anywhere
let num2 = 56

function add() {  // Inside parentheses when we declare some variable and these variable cannot be access outside the parentheses called Block Scope
    let ans1 = 45
    let ans2 = 34
    console.log("Total is : "+(ans1 + ans2));
    console.log(num1 + num2);
}

add()

// ********************************* Arrow Function ***************************************

const greet = () =>{     //   Explicit declaration of arrow function
    for (let i = 0; i < 5; i++) {
        console.log("Welcome");
        console.log("How may Help You");
        
    }
}

greet()

const Welcome = () =>  ("Good Morning")

console.log(Welcome())