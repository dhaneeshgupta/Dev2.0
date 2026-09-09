/*
console.log(null > 0);
// comparison convert null to a number , treating it as 0
console.log(null === 0);
// Important: == har situation me blindly type conversion nahi karta. null aur undefined ke special rules hain [null == undefined(true)]
console.log(null >= 0)



console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined == null);
*/

// Strict check (check datatype too):
// === → strict comparison, no type conversion
console.log("2" === 2);
console.log(undefined === null);


/*
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"  ← historical JS behavior
*/