//! The Way I learnt JS 
// Advanced

//Hoisting it a JS concept where variables can be used before they are inatialised and also can be used in higher scope.
// Hoisting Example 1
function codeHoist() {
    a = 10;
    let b = 50;
}
codeHoist();
console.log(a); // 10
console.log(b); // ReferenceError : b is not defined

// Hoisting Example 2
fun(); // Calling before declaration
function fun() { // Declaring
  console.log("Function is hoisted");
}