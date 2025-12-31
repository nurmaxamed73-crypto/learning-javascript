/*
  Functions in JavaScript
  -----------------------
  A function is a block of code that performs a specific task.
  You can reuse it anytime by calling it.
*/

// 1. Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Abdinor"));
console.log(greet("Developer"));


// 2. Function with two parameters
function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(5, 3));
console.log(addNumbers(10, 20));


// 3. Function without parameters
function showMessage() {
  console.log("I am learning JavaScript functions");
}

showMessage();
