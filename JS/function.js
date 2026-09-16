// Function :

//const { use } = require("react");

// function addtwoNum (a, b){
//     if(typeof a === "number" && typeof b === "number") {
//       const sum = a + b;
//  console.log(sum);
//  }
// }


function addtwoNum(a, b){
    // let sum = a + b;
    // return sum;
    return a + b;
}
// const result = addtwoNum(2, 5);
// console.log("Result :",result)


function loginusername(username){
    if(!username){
        console.log('Please enter a username!')
        return;
    }
    return `${username} just logged in `;
}

//console.log(loginusername("Hariom"));
//console.log(loginusername());


const user = {
     username : "Sam",
     price : 399
}

function  handleObject(anyobject){
    return `Usename is ${anyobject.username} and ${anyobject.price} is price `;
}
//console.log(handleObject(user));
console.log(handleObject({
    username : "Carry",
    price : 399
}));


const arr = [ 100, 200, 300, 400]

function handleArr(getarr){
    return getarr[1];
}

console.log(handleArr(arr));
console.log(handleArr([100, 500, 400 ,900]));