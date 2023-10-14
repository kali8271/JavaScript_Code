 //   4th day of Coding Challenge

// Today's topic is Array and its method in javacsript

let a = [23,34,43,56,"Ramesh",'K']  // definition of array in javascript 
console.log(a);    // output => 23,34,43,56,'Ramesh','K'

// a = []  // Array is mutable in javascript and heterogeneous type
// console.log(a); // output => [] => null

const arr = [23,34,45,"Rahul",'e','@','#']
// console.log(arr);
//arr = [34,43] 
// console.log(arr); // we can't change array while using const variable type

// Some Methods in Array
// 01. Push method  which add some value in given array
let arr2 = [12,32,34,35,45,"Chand","F"]
arr2.push("Farhan")
 console.log(arr2);

// 02. Pop method which remove items from array
let Arr = ["23",21,56,78,90,91]
Arr.pop("23")

// 03. shift method is used to shift the first element of array
Arr.shift()
 console.log(Arr); 

// 04. unshift method is used for add element on 0th index
Arr.unshift("Chand")
 console.log(Arr);

// 05. Concat method is used to merge two arrays

console.log(Arr.concat(arr));

// 06. join method is used to club element of two arrays

console.log(Arr.join(arr));

// 07. Reverse method is used to the reverse the array
console.log(Arr.reverse())