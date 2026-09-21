// if-else statement 

// Syntax :-
/*if (true || false || true && false) {
    console.log("Either Condition verified || Not verified");
}*/

// example :
// const isLoggedIn = true;
// const isSignedUp = true;
// if(isLoggedIn && isSignedUp){
//     console.log("Welcome to Vscode!")
// }

// if(isLoggedIn || isSignedUp){
//     console.log("Either u were previous user or old one!")
// }


// Swich statement :
/*
switch (expression) {
    case value1:
        // code
        break;
    default:
        // agar koi case match nahi hua
    break;
}*/

// const month = 3;

// switch(month){
//     case 1 :
//         console.log("January");
//     break;
//        case 2:
//         console.log("Febuary");
//          break;
//         //    case 3 :
//         //     console.log("March");
//         //      break;
//               default :
//               console.log("No match found!")
//                 break;
// }

// falsy value :  Falsy values are values that JavaScript converts to false in a Boolean context, while all other values are Truthy and convert to true.

// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

// Truthy value example:
if ([]){ // Because empty array is still a object 
    console.log("True");
};

if({}){ // Empty object is still object 
    console.log("True");
}

// Falsy 
if(!NaN){ // Mean NAN is false thats why !NAN is executed
    console.log("True");
}

if (0 == 0){
    console.log("True");
}

// Some impotant concept :
const userEmail = [];
if(userEmail.length == 0){
    console.log("Array is empty");
}

const emptyObj = {};
if(Object.keys(emptyObj).length == 0){
    console.log("Object is empty");
}

// Concept of { Type coersion }:
//Type coercion is the automatic conversion of one data type into another by JavaScript when required during an operation or comparison.

// Some cases such as: {false == 0, 0 == "", false == ""} gives boolean true due to type coersion 

// And  Because === checks both value AND type without coercion gives boolean false 


// Nullish Coeliscing Operator {??} : null undefined

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 4 ;
val1 = undefined ?? 18;
console.log(val1)


// Terniary Operator :

// condition ? true(statement) : false(statement))

const iceCreamPrice = 80;
iceCreamPrice != 80 ? console.log("True") :  console.log("Buy it!");