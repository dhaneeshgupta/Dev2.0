// Dates


// let myDate = new Date(2023, 0, 23);

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23);
//let myCreatedDate = new Date(2023, 0, 23, 5, 3);
//let myCreatedDate = new Date("2023-01-14");// yymmdd
// let myCreatedDate = new Date("01-14-2026");// ddmmyy

// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())


let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/10000))


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// ${newDate.getDay()} and the time

newDate.toLocaleString('default', {
    weekday : "long",
})