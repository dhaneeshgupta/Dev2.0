// For of


let arr = [1, 2, 3, 4, 5]
for(const num of arr){
   // console.log(num)
}

const greeting = "HelloWorld!"
for(const greet of greeting){
    //console.log(`Each char is ${greet}`)
}

// Map: Map is a key-value data structure in JavaScript where keys can be of any data type. It provides methods like set, get, has, and delete, and is directly iterable.

//1. What is Map?
//Map is a JavaScript collection used to store key-value pairs.

/*const map = new Map();

map.set("name", "Dhaneesh");
map.set("age", 20);
map.set("city", "Jabalpur");

console.log(map);*/

/// 2. Important methods
/*const map = new Map();

map.set("name", "Dhaneesh");
map.set("age", 20);

console.log(map.get("name"));  // Dhaneesh
console.log(map.has("age"));   // true
console.log(map.size);         // 2

map.delete("age");

map.clear();*/


//++++++++++++++++++++++++++++++++++++++++

//3. Why Map is special?
//Unlike normal objects, Map can use almost anything as a key & does not contain duplicate


/*const map = new Map();

map.set("name", "Dhaneesh");
map.set(101, "Student");
map.set(true, "Active");

console.log(map.get(101));   // Student
console.log(map.get(true));  // Active
*/

///4. Map with for...of — very important
//Since you’re currently studying for...of, this is the natural next step:

const map = new Map();

map.set("IN", "India");
map.set("US", "USA");
map.set("UK", "United Kingdom");

for (const [key, value] of map) {
    console.log(key, "->", value);
}