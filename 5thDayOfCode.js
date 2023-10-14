//  Reliable 5th day of 21 day coding challange
//  Today's topic is Obejct in JavaScript
/*
 Object is made with combination of key and values
 Obejct Can be initiallised by two mode
 01. Using literals
 02. using constructor
*/

const JsUser = {     // defining of Objetc literals
    name: "Chand",
    address: "Siwan",
    course:"B.Tech",
    id : 123
}
 console.log(JsUser)  // display element of Object
 console.log(JsUser.name); // accessing particular element of Object

let UserDetails = {  // Creating nested Object 
    FullName : {
        FirstName : "Rahul",
        LastName : "Kumar"
    },
    Address : {
        At : "MMU Mullana",
        dist : "Ambala"
    },
    CourseInformation : {
        CourseName : "B.Tech",
        CourseId : 4567,
        CourseFee : 800000
    }
}
//console.log(UserDetails.FullName.FirstName); // Accessing a particular element of particular Nested Object

let informationDetails = {...JsUser,...UserDetails} // Here merge the element of two Object
console.log(informationDetails); // Here display the element which you merge
console.log(informationDetails.hasOwnProperty);
console.log(Object.keys(UserDetails))