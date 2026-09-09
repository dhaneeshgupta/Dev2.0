// Primitive : String, Number, Boolean, null, undefined, symbol , bigInt

const score = 100;
const scoreV = 100.3;

const isLoggedIn = true;
const outSidetemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
let outSideTemp = null;

console.log(id == anotherId);

const bigN = 344527462428427442424n

// References : Array , Object , Function

const Arr = ["Hero", "Marble", "Tullu"];
let oBJ = {
    name : "harry",
    age : 22,
}

let myFucn = function(){
    console.log("Hello Potter")
}
myFucn();// Function call

console.log(typeof outSideTemp);
console.log(typeof myFucn);







//JavaScript is a dynamically typed, interpreted/JIT-compiled programming language.
//Dynamically typed + weakly typed/coercive
let x = "10";

//console.log(x + 5); // "105"
//console.log(x - 5); // 5