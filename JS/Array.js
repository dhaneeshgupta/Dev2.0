// Arrays:

const newArr = ["thor", "locky", "Odin"];
const newArrr = ["Spiderman", "Ironman", "Stark"];
const newARRR = ["tullu", "ullu", "hullu"];

// newArr.push("Asguard");
// newArr.pop();
// console.log(newArr)

// newArrr.unshift("Steive");
// console.log(newArrr);

// newArrr.shift();
// console.log(newArrr);

// newArr.push(newArrr);
// console.log(newArr);// not a good way

// const Arr1 = newArr.concat(newArrr);
// console.log(Arr1); // Better way 

const All_arr = [...newArr, ...newArrr, ...newARRR]; 
// Can add multiple array used mostly
// console.log(All_arr);

const another_array = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10]]];
const real_array = another_array.flat(Infinity); 
// convert all nested array in single array
console.log(real_array);

console.log(Array.isArray("Harry"));
//console.log(Array.from("Harry"));

const arr = Array.from("Harry");
console.log(Array.isArray(arr));