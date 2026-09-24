
// reduce //


const myNums = [1, 2, 3, 4];

// const myTotal = myNums.reduce(function (acc, curval){
//     console.log(`acc : ${acc} and curval : ${curval} `)
//     return acc + curval;
// }, 1)

// const myTotal = myNums.reduce((acc, curval) => acc + curval,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Laptop",
        value: 55000
    },
    {
        itemName: "Mobile",
        value: 25000
    },
    {
        itemName: "Headphones",
        value: 3000
    },
    {
        itemName: "Keyboard",
        value: 1500
    },
    {
        itemName: "Mouse",
        value: 800
    }
];

const myTotal = shoppingCart.reduce((acc,item)=>acc + item.value, 0)
console.log(myTotal)