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


// Memory : Stack & Heap 
// Stack (Primitive), Heap(Non-Primitive(reference))


let tea = "AdrakTea";
let anotherTea = tea;
anotherTea = "lemonTea";
console.log(anotherTea); // o/p = LemonTea
// Copy will be changed in Stack
console.log(tea);

let coffee ={
    name : "ChoclateCoffee",
    upi : "Chocolava",
}

let blackCoffee = coffee;
// blackCoffee Object is pushed in stack, Refernece is passed of coffee
coffee.upi = "01@ybl"; // As reference is passed so value is changed/updated
console.log(blackCoffee.upi); // output = 01@ybl
console.log(coffee.upi); // output = 01@ybl




//JavaScript is a dynamically typed, interpreted/JIT-compiled programming language.
//Dynamically typed + weakly typed/coercive
let x = "10";

//console.log(x + 5); // "105"
//console.log(x - 5); // 5