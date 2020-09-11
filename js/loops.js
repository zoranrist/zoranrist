/* Write a for loop that will fill an array with the value of the iterating variable
 */

let a = [];

for (let i = 0; i < 10; i++) {
  a[i] = i;
}

console.log(a);

/* Write for in loop for an object nested in another object
 */
let person = {
  name: "Viktor",
  lastname: "Loba",
  address: {
    street: "Partizanska",
    number: "30",
    city: "Skopje",
  },
};

// for (let n in person.address) {
//   console.log(person.address[n]);
// }

/* Write for in loop for the following object {a: 1, b: 2, c: 3} that will log the following:
"a is 1" "b is 2" "c is 3"
*/

for (let n in person.address) {
  console.log(n + "is" + person.address[n]);
}

/* Write a for loop that will fill an array with anonimous functions and than another loop
that will execute those functions. In the first loop use the iterating value inside the anonimous functions.
*/
// let arr = [];
// for (let i = 0; i < 3; i++) {
//   arr[i] = function () {
//     return i;
//   };
// }

// for (let j = 0; j < 3; j++) {
//   console.log(arr[j]());
// }
