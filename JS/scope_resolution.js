/// Block  scope 

if(true){
    let a = 10;
    const b = 20;
   // var c = 30;
  // console.log("Inner:", a)
}
//console.log(a)
//console.log(b)
//console.log(c)

// Global scope
var c = 300;

if (true) {
   // console.log(c); // 300
}

// console.log(c); // 300


// Nested function scope
var globalVar = "global";

function test() {
    var functionVar = "function";

    if (true) {
        let blockVar = "block";

        console.log(globalVar);   // ✅
        console.log(functionVar); // ✅
        console.log(blockVar);    // ✅
    }
    function run(){
        console.log(functionVar);
    }
//run();
   // console.log(blockVar); // ❌
}

//test();


// Nested if scope
if(true){
    const username = "hitesh";
    if(username === "hitesh"){
    const age = 22;
   // console.log(username);
    }
    //console.log(age);
}
//console.log(username);


// Some fucntion accessing ways 

//console.log(fun(5));
function fun(num){
    return num + 1;
}

//console.log(addTwo(5));
const addTwo = function(num){
    return num + 1;
}

// use of this to show context at Block or at global level
// Object method 

//-> Key Poiny : this accesses a property of the this object/context; it does not automatically access local variables.
const user ={
    username : "Harry",
    age : 22,

    welcomeMessage : function(){
     console.log(`${this.username}, welcome to VsCode!`)
     console.log(this); // This keyword shows context of that scope
    }
}
// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();
//console.log(this); // Give empty context 

// Regular function :
function test() {
    let userName = "hitesh" // 
    //console.log(this.userName);
}
//userName          → local variable → "hitesh"
//this.userName     → property of whatever `this` refers to → undefined


//test();


// Arrow function ka this us jagah ke outer this se aata hai.
const userM = {
    name: "Dhaneesh",

    greet: () => {
        //console.log(this);
    }
};

//userM.greet();
//console.log(userM.greet(this));


// Explicit run :

const addMore = (num1, num2) => {
    return num1 + num2;
}

console.log(addMore(4, 6));

// Implicit run

//const addOne = (num1, num2) => (num1 + num2)

//const addOne = (num1, num2) => num1 + num2

const addOne = (num1, num2) => ({Username : "Harru"})


addOne(4, 6); 