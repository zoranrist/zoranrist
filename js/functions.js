// function someFunction(a, b, c) {}

// someFunction(1, 2, 3);

function add(a, b) {
  let c = 1;
  return a + b;
  // console.log(biloshto);
}

let sum = add(2, 2); // --> 4
console.log(sum); // --> 4

function add(a, b) {
  return a + b;
}

let c = add(2, 2);

console.log(c);

// console.log(c);

/* Declare a function which will have two parameters and after its 
execution will return the concatenatenated string from the 
given arguments. Try to check if the arguments are really strings.
If they are not return "Sorry, wrong parmeters given!"
*/

/* Try to find put why the following function is impure, and after that
convert the same function to pure function.
*/
let house = "";
let houseParts = ["basement", "floor", "attic", "roof"];
function buildHouse() {
  for (part of houseParts) {
    if (part === houseParts[houseParts.length - 1]) {
      house += part;
    } else {
      house += part + "--";
    }
  }

  return;
}

buildHouse();

console.log(house);

/* Try to find out and also analize what would be the output of the following code block
 */

let a = ["one", "two", "three"];

function oneTwoThree() {
  let a = [1, 2, 3];

  return function () {
    return a;
  };
}

// Why do we have two execution statements after the name of the function
let countToThree = oneTwoThree()();
// What if we remove the array a inside the function
console.log(countToThree); // console.log(countToThree) --> ???
// Make the function oneTwoThree a pure function
