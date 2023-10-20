/************************************************ 12th Day of 21Day coding challenge *********************************************************** */
/********************************************** Todays topic is Higher Order Loop ******************************************* */

let arr = [12, 32, 2, 3, 4, 5]
for (const i of arr) {
    console.log(i);
}

let string = "Hello programming wolrd"
for (const str of string) {
    console.log(`Each character in ${string} is : `,str);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
 console.log(map);

for (const [key, value] of map) {
    console.log(key,value);

}

const myobject = {
    js: 'javascript',
    cpp: 'C++',
    c: 'C',
    py: 'python'
}

for (const key in myobject) {
    console.log(`${key} is used for ${myobject[key]}`);
}

const codeLanguage = ["Java", "Python", "C", "C++", "JavaScript", "Ruby"]
codeLanguage.forEach(function (val) {
    console.log(val);
})

codeLanguage.forEach((item) => {
    console.log(item);
})

codeLanguage.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

let myCode = [
    {
        languageName: "python",
        languageFile: "js",
    },
    {
        languageName: "Java",
        languageFile: "java"
    },
    {
        languageName: "C",
        languageFile: "c"
    }
]

myCode.forEach((item) => {
    console.log(item);
})