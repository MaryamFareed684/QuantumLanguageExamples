// First steps with arrays: index, push, pop, slice and iteration.
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.length, fruits[0], fruits[fruits.length - 1], fruits.at(-1), fruits[10]);
fruits.push("date");
fruits.unshift("avocado");
console.log(fruits);
console.log(fruits.pop(), fruits.shift(), fruits);
console.log(fruits.slice(1), fruits.indexOf("cherry"), fruits.includes("kiwi"));
fruits.forEach((f, i) => console.log(i, f));
console.log(fruits.map((f) => f.toUpperCase()).join("|"));
fruits[5] = "fig";
console.log(fruits, fruits.length);
console.log([...fruits.keys()], Array.isArray(fruits), typeof fruits);
