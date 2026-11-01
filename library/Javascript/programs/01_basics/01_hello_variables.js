// Variables, template literals and typeof on basic values.
const name = "Ada";
let age = 36;
const height = 1.68;
const languages = ["JavaScript", "C", "Lisp"];
console.log(`Hello, ${name}!`);
console.log(`${name} is ${age} years old and ${height} m tall.`);
age += 1;
console.log(`Next year ${name} will be ${age}.`);
console.log("Favourite languages: " + languages.join(", "));
for (const value of [name, age, height, languages, true, null, undefined, { a: 1 }]) {
  console.log(typeof value, value);
}
