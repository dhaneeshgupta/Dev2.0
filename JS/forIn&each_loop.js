const myObject = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    py : "Python"
}

for (const key in myObject){
  //  console.log(`${key} is shotcut for ${myObject[key]}`)
}

// Array : 

const programming = [ "JS", "C++", "Rb", "CSS"];
for(const key in programming){
    //console.log(key, ":", programming[key])
}

// Map : can not be iterable using [For in]

/*const map = new Map();

map.set("IN", "India");
map.set("US", "USA");
map.set("UK", "United Kingdom");

for(const key in map){
    console.log(map[key]);
}*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for each :

const arr = ["JS", "C++", "JAVA", "Ruby", "CSS", "Python"];

// arr.forEach( function (item){
//     // if (item == "Ruby"){
//     // console.log(item);
//     // }
//     console.log(item);
// })


// Arrow function :
// arr.forEach((item) => {
// console.log(item)
// })

// Pre fucntion declare :

// function pre(item){
//     console.log(item)
// }

// arr.forEach(pre);

// Array of Object :

const Myarr = [
    {
        user: "Dhaneesh",
        age: 20,
        city: "Jabalpur"
    },
    {
        user: "Rahul",
        age: 21,
        city: "Indore"
    },
    {
        user: "Aman",
        age: 22,
        city: "Bhopal"
    }
];

Myarr.forEach(function (item){
    console.log(item.user, item.age);
})