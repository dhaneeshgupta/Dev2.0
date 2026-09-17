// Initially Invoked Function Expression {IIFE}:

// Used to remove the pollution from global scope and also used to immedietly executes the fucntion

function chai (){
    console.log("DB connected");
}
// Normal function Execution 
//chai();

// As IIEF don't know where to stop context so semicolon is mandatory without semicolon another IIEF not executes!!!!!


// IIFE
(function coffee(){
    console.log("DB Connected")
})();


( () => {
    console.log("DB Two connected");
})();

// Providing parameters
( (name) => {
console.log(`DB ${name} Connected`);
})("Three");