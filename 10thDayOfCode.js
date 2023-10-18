/*********************************** 10th Day of 21 Day Coding Challenge ******************************** */
/************************************ Today's Topic is Conditionals Statements **************************** */

// Printing triangle pattern using for loop
let string = ""
for (let i = 1; i < 6; i++) {
    for (let j = 0; j < i; j++) {
        string += "*"
        
    }
   string +="\n"

}
console.log(string);

// printing downward triangle
let string4 = ""
for (let i = 1; i < 6; i++) {
    for (let j = 0; j < 6 -i; j++) {
        string4 += "*"
    }
   string4 +="\n"

}
console.log(string4);


// printing trinagle form right side
let string1 = ""
for (let i = 1; i < 6; i++) {
    for (let k = 0; k < 6 - i; k++) {
        string1 += " "
        
    }
    for (let j = 0; j < i; j++) {
        string1 += "*"
        
    }
   string1 +="\n"

}
console.log(string1);

// printing square pattern 

let string2 = ""
for (let a = 0; a < 7; a++) {
    for (let b = 0; b < 7; b++) {
        string2 +="*"
        
    }
    string2 +=`\n`
}
console.log(string2);

// printing hollow sqaure patern 

let n = 5
let string3 = ""
for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
       if (x == 0 || x == n-1 || y == 0 || y == n-1) {
        string3 +="*"
       }
       else{
        string3 +="8"
       } 
        
    }
    string3 +="\n"
}
console.log(string3);