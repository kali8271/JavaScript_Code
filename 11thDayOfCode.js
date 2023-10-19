/************************************** 11th Day of  21 day coding challenge ************************* */
/************************************** Printing some other pattern based on loop ******************************* */

 //printing butterfly pattern
let string2 = ""
let n = 5
for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        string2 +="*"
        
    }
    for (let j = i; j < n ; j++) {
        string2 +=" "
    }
    for (let j = i; j < n ; j++) {
        string2 +=" "
    }
    for (let k = 0; k < i; k++) {
        string2 +="*"
    }
    string2 +=`\n`
}
console.log(string2);

for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        string2 +="*"
        
    }
    for (let j = 0; j < i ; j++) {
        string2 +=" "
    }
    for (let j = 0; j < i ; j++) {
        string2 +=" "
    }
    for (let k = i; k < n; k++) {
        string2 +="*"
    }
    string2 +=`\n`
}
console.log(string2);

let string = ""
let m = 5
for (let i = 0; i <= m; i++) {
    for (let j = i; j < m; j++) {
        string +=" "
        
    }
    for (let j = 1; j < i; j++) {
        string += "*"
        
    }
    for (let j = 0; j < i; j++) {
        string +="*"
        
    }
    string +=`\n`

}
console.log(string);

let string1 = ""
let k = 5
for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= i; j++) {
        string1 +=" "
        
    }
    for (let j = i; j < k; j++) {
        string1 +="*"
        
    }
    
    for (let j = i; j <= n; j++) {
        string1 +="*"
        
    }
    string1 +=`\n`

}
console.log(string1);