let score = "harryy"; // null , undefined , 33abc(nan), stringTonumber(harry, anyWord )
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
// Explict conversion of NAN
console.log(typeof valueInNumber);
console.log(valueInNumber); 
// Display NAN for 33abc (Not A number)

console.log(typeof NaN); // (type is number)

let isLoggedin = "abc";

let valueInboolean = Boolean(isLoggedin)
console.log(valueInboolean);


let isnumber = 33;

let valueInstring = String(isnumber);
console.log(typeof valueInstring);
console.log(valueInstring);

const user = {
    name: "Hariom",  // user is object 
    age: 21
};

let result = String(user);

console.log(result);
console.log(typeof result);
