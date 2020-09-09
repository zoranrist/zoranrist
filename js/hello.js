// Variable declaration

let hello, goodbay;

hello = "Hello World";
hello = "Hello World 2020";

15 + 15; // 30

2 * (15 + 15); // console.log() -->60

// Concation (spojuvanje) operation on strings

"Hello" + "World"; // "Hello World"

"Hello" + 5; // "Hello 5"

let bolleanVariable = true;
let bolleanVariableF = false;

// AND i OR - logichki operatori

// ! - operator za neekvivalentnost

// if (hello == "Hello" && wolrd == "World") {
if (hello !== "Hello" || wolrd === "Underworld") {
  console.log("Hello World");
} else {
  console.log("Goodbye World");
}

// console.log(typeof number); --> "number";

result = 0;

// Function declaration statement

function zbir(a, b) {
  result = a + b;
}

zbir(2, 2);

console.log("Rezultatot e: " + result);

// {variable o will have similar structure to this one:

// {
//     a: 1,
//     b: 2,
//     hello: "Hello World" ...
// }

let o = new Object();

// variable a will have similar structure to this one:

// niza sekogash zapochniva od 0 index

// ["1", 5, true, "Hello World"]

let a = new Array();

let h1_hello = document.querySelector("h1");

/* find the h1 tag inside index.html */
// h1_hello.textContent = "Zoran Ristovski";
h1_hello.textContent = hello;

hello = null;
let number = 20;

if (condition1) {
  // code block
} else if (condition2) {
  // code block
} else if (condition3) {
  // code block
} else {
  // code block
}

switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
