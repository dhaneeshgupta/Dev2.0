
//const { jsx } = require("react/jsx-runtime");

// Define a symbol and addd in object and try to access it 

const mySymb = Symbol("key1");

const JSuser ={
    name : "Harry",
    "full_name" : "Hariom Gupta",
    [mySymb] : "Key1",
    email : "harry@gmc",
    isLoggedIn : true,
    age : 18,
    last_login : ['Monday', 'Friday'],
    city : "Jabalpur"
}

// Acccessing Object 
// console.log(JSuser.age);
//console.log(JSuser["email"]);
// console.log(JSuser.mySymb);
// console.log(typeof mySymb);


JSuser.email = "hariom@chatgpt";
//Object.freeze(JSuser); // now object key : value can't be changed
JSuser.email = "hariom@claude";
//console.log(JSuser);


// JSuser.greeting = function(){
//     console.log("Hello JS user");
// }
// console.log(JSuser.greeting());

// JSuser.greeting = function(){
// console.log(`Hello  ${this.name}`);
// }
// console.log(JSuser.greeting());

// Sigleton  Object 

const newUser = new Object();

newUser.id = "Sam";
newUser.email = "Harru@gmc";
newUser.isLoggedIn = true;

//console.log(newUser);

// nesting 
const regularUser = {
    email : "tullu@chatbot",
    fullusername :{
        userFullname :{
            firstname : "Hariom",
            lastname  : "Gupta"
        }
    }
}

//console.log(regularUser.fullusername.userFullname);

// combining two array 

const oBj_1 = {1: 'a', 2 : "b"};
const oBj_2 = {3: "c", 4 : "d"};
const oBj_4 = {5: "e", 6 : "f"};

const newObj = {oBj_1, oBj_2};
//console.log(newObj);

const oBj_3 =Object.assign({}, oBj_1, oBj_2, oBj_4)
// empty braces is treated as targeted obj and rest is source objects
//console.log(oBj_3);


const user = [
    {
        id : 1,
        email : "h@gmail.com",
    },
    {
        id : 1,
        email : "h@gmail.com",
    },
    {
        id : 1,
        email : "h@gmail.com",
    },
]

//console.log(user[1].email);
//console.log(newUser);
// console.log(Object.keys(newUser));
// console.log(Object.values(newUser));
// console.log(Object.entries(newUser));

//console.log(newUser.hasOwnProperty("isLoggedIn"));
 
// Object destructuring : Object → { } → key ke basis par

const course ={
    courseName : "jsHindi",
    price : 999,
    courseInstructor : "hitesh sir"
}

const {courseInstructor : instructor, price : p, courseName : js} = course;
console.log(instructor, p, js);

// Array destructuring : Array → [ ] → position ke basis par
const fruits = ["Apple", "Mango", "Banana"];

//const [first, , third] = fruits;

//console.log(first); // Apple
//console.log(third); // Banana

// using rest / spread operator 
const numbers = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = numbers;

console.log(first);     // 10
console.log(second);    // 20
console.log(remaining); // [30, 40, 50]

//JSON
// {
//     "name": "Harry",
//     "age": 20,
//     "city": "Jabalpur"
// }