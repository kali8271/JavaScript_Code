                                    /*  Every Dayget a New opputunity to improve ourselves 
                                        Enthusiatic 6th Day of 21 Day Coding Challenge 
                                        Todays topic is Function */


function greet(){    // intialising a function using function keyword in javaScript
        for (let i = 0; i <= 5; i++) {
            console.log("Good Morning");
            console.log("Start our journey with another level of energy");
            
        }
}
/* This function does not return something only print the String */

greet()   // calling/ invoke of function

// using of return keyword in function 

function addOftwoNumber(number1, number2) {   // In parenetheses variable which we pass called parameter
    let add = number1 + number2  // Here add two element and store in add variable
    return add   // Here return keyword return the value which store and terminate the function 
}

let result = addOftwoNumber(34,16) // while calling a function the value in parantheses which we pass called Argument
console.log("Result : " , result);

// Creating a Function with Object

 const ObjectFunction = {  // Creating a object
    name : "Sam",
    Course : "B.Tech",
    CourseFee : 800000,
    CourseId : 234
 }

function HandleObject(ObjectFunction){   // creating function and pass object Name. we use anyobject rather than ObjectFunction for generic / all object
    console.log(`Student Name ${ObjectFunction.name} Course ${ObjectFunction.Course} Course Fee ${ObjectFunction.CourseFee} Course Id ${ObjectFunction.CourseId}`);
}

HandleObject(ObjectFunction)  // invoking of function and pass parameter

//  Creating function with Array
function ReturnArray(getArray){
    let rev = getArray.reverse()
    
    return rev
}

let arr = [4,5,2,6,2,7,8]
let result1 = ReturnArray(arr)
console.log(result1);

function sumOfArray(getarray,sum){   // This function calculate the sum of a given array
    sum = 0
    for (let i = 0; i < getarray.length; i++) {
        sum = sum + getarray[i]
        
    }
    return sum 
}

let arr1 = [2,3,5,7,4,8]
let output = sumOfArray(arr1)
console.log("Sum of Array is ", output);