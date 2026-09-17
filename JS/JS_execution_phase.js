// ==========================================
// JAVASCRIPT EXECUTION CONTEXT
// ==========================================

// -------- GLOBAL CODE --------
/*
{let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);

let result2 = addNum(10, 2);

console.log(result1);
console.log(result2);}



// ==========================================
// STEP 1: GLOBAL EXECUTION CONTEXT
// ==========================================
//
// Sabse pehle JS Global Execution Context (GEC)
// create karta hai.
//
// GEC ke andar mainly:
// 1. Memory Creation Phase
// 2. Code Execution Phase
//
// Call Stack mein initially:
//
//     ┌─────────────────────┐
//     │ Global Execution    │
//     │ Context             │
//     └─────────────────────┘


// ==========================================
// STEP 2: MEMORY CREATION PHASE
// ==========================================
//
// JS code execute karne se PEHLE memory prepare karta hai.
//
// Roughly:
//
// val1     → uninitialized (let)
// val2     → uninitialized (let)
// addNum   → function definition
// result1  → uninitialized (let)
// result2  → uninitialized (let)
//
// IMPORTANT:
// let/const variables memory mein create hote hain,
// lekin declaration execute hone se pehle access nahi kar sakte.
// Is period ko TDZ (Temporal Dead Zone) kehte hain
// TDZ = variable memory mein create ho chuka hai, but uski declaration wali line execute hone tak usko access nahi kar sakte.
//{TDZ} variable declaration ke start se lekar declaration initialization execute hone tak ka period hai.
// console.log(val1); // ❌ ReferenceError

// let val1 = 10;  +++++++++++++++++IMP++++++++++++

// console.log(val1); // ✅ 10
//
// Function declaration ka complete function memory mein available hota hai.


// ==========================================
// STEP 3: CODE EXECUTION PHASE
// ==========================================

//let val1 = 10; +++++
// Ab val1 ke andar 10 aa gaya.
//
// val1 → 10


//let val2 = 5;
// Ab val2 ke andar 5 aa gaya.
//
// val2 → 5


// Function declaration already memory mein available hai.
// Ab next line execute hoti hai:

//let result1 = addNum(val1, val2);++++


// ==========================================
// STEP 4: FUNCTION CALL
// ==========================================
//
// addNum(val1, val2)
//
// val1 = 10
// val2 = 5
//
// So actual function call becomes:
//
// addNum(10, 5)
//
// Function call hone par JS ek
// NEW FUNCTION EXECUTION CONTEXT create karta hai.
//
// Call Stack:
//
//     ┌────────────────────────────┐
//     │ addNum() Execution Context │ ← TOP
//     ├────────────────────────────┤
//     │ Global Execution Context   │
//     └────────────────────────────┘


// ==========================================
// STEP 5: FUNCTION EXECUTION CONTEXT
// ==========================================
//
// Function:
//
// function addNum(num1, num2) {
//     let total = num1 + num2;
//     return total;
// }
//
// Is function ke liye naya context bana.
//
// Memory Creation:
//
// num1  → 10
// num2  → 5
// total → uninitialized
//
// Then Code Execution:
//
// let total = num1 + num2;
//
// total = 10 + 5
// total = 15
//
// Then:
//
// return total;
//
// Function returns 15.


// ==========================================
// STEP 6: FUNCTION CONTEXT POP
// ==========================================
//
// addNum() complete ho gaya.
//
// Function Execution Context Call Stack se POP ho jayega.
//
// Call Stack:
//
//     ┌────────────────────────────┐
//     │ Global Execution Context   │
//     └────────────────────────────┘
//
// Returned value 15 Global Context mein
// result1 ko mil jayegi.
//
// result1 → 15


// ==========================================
// STEP 7: SECOND FUNCTION CALL
// ==========================================

//let result2 = addNum(10, 2);


// Again NEW Function Execution Context create hoga.
//
// Call Stack:
//
//     ┌────────────────────────────┐
//     │ addNum() Execution Context │ ← TOP
//     ├────────────────────────────┤
//     │ Global Execution Context   │
//     └────────────────────────────┘


// Function ke andar:
//
// num1 → 10
// num2 → 2
//
// total = num1 + num2
// total = 10 + 2
// total = 12
//
// return total;
//
// Function returns 12.


// ==========================================
// STEP 8: SECOND FUNCTION POP
// ==========================================
//
// addNum() finish.
//
// Function Execution Context POP.
//
// Returned value:
//
// result2 → 12


// ==========================================
// FINAL OUTPUT
// ==========================================

console.log(result1); // 15
console.log(result2); // 12


// ==========================================
// FINAL MEMORY
// ==========================================
//
// Global Execution Context:
//
// val1    → 10
// val2    → 5
// addNum  → function
// result1 → 15
// result2 → 12
//
// Function Execution Contexts dono
// apna kaam complete karke destroy/pop ho gaye.


// ==========================================
// 🧠 REMEMBER
// ==========================================
//
// 1. JS → Global Execution Context banata hai
//
// 2. Memory Creation Phase
//
// 3. Code Execution Phase
//
// 4. Function call → New Execution Context
//
// 5. New context → Call Stack mein PUSH
//
// 6. Function complete → value RETURN
//
// 7. Function context → POP
//
// 8. Control → Previous/Global Context mein wapas
//
// MEMORY TRICK:
//
// GEC
//  ↓
// Memory
//  ↓
// Execution
//  ↓
// Function Call
//  ↓
// New Execution Context
//  ↓
// PUSH
//  ↓
// Execute
//  ↓
// RETURN
//  ↓
// 
*/