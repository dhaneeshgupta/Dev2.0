// For each 

const coding = ["JS", "C++", "JAVA", "Ruby", "CSS", "Python"];

// const value = coding.forEach( (item) => {
//   //  console.log(item)
//     //return item;
// })

//console.log(value);


/// Filter :

// const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums1 = myNums.filter( (item) => {
//   return  item > 5
// });
// console.log(newNums);


// const newNums = [];
// myNums.forEach((num)=> {
//     if(num > 5){
//         newNums.push(num);
//     }
// });
// console.log(newNums);
// console.log(newNums1);


const books = [
    {
        bookName: "The Alchemist",
        genre: "Fiction",
        publish: 1988,
        edition: 1
    },
    {
        bookName: "Atomic Habits",
        genre: "Self-Help",
        publish: 2018,
        edition: 2
    },
    {
        bookName: "Rich Dad Poor Dad",
        genre: "Finance",
        publish: 1997,
        edition: 3
    },
    {
        bookName: "The Psychology of Money",
        genre: "Finance",
        publish: 2020,
        edition: 1
    },
    {
        bookName: "Ikigai",
        genre: "Self-Help",
        publish: 2016,
        edition: 4
    },
    {
        bookName: "1984",
        genre: "Dystopian",
        publish: 1949,
        edition: 5
    },
    {
        bookName: "The Great Gatsby",
        genre: "Classic",
        publish: 1925,
        edition: 3
    },
    {
        bookName: "Harry Potter",
        genre: "Fantasy",
        publish: 1997,
        edition: 7
    },
    {
        bookName: "Think and Grow Rich",
        genre: "Personal Development",
        publish: 1937,
        edition: 6
    },
    {
        bookName: "The Power of Now",
        genre: "Spirituality",
        publish: 1997,
        edition: 2
    }
];

///let userbook = books.filter((item) => item.genre === "Finance");

//userbook = books.filter((item) => {item.publish >= 2000})
//userbook = books.filter((item) => { return item.publish <= 2000 && item.genre === "Finance"})
// Gives undefined because it filter return 
//console.log(userbook);

// Chainig concept :

const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const num = newNums.map((item) => item * 10).map((item) => item + 1);//.map((item) => item / 2);
console.log(num);