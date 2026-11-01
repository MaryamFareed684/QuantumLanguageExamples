// Object destructuring: renames, defaults, nesting, rest, parameters.
const user = { name: "Ann", age: 30, address: { city: "Oslo", geo: { lat: 59 } }, tags: ["a", "b"] };
const { name, age: years, email = "none", address: { city, geo: { lat } }, tags: [firstTag], ...rest } = user;
console.log(name, years, email, city, lat, firstTag, rest);
function show({ a, b = 2, ...others } = {}) { return [a, b, others]; }
console.log(show(), show({ a: 1 }), show({ a: 1, b: 3, c: 4, d: 5 }));
const key = "age"; const { [key]: dynamic } = user; console.log(dynamic);
let x, y; ({ x, y = 5 } = { x: 1 }); console.log(x, y);
for (const { name: n, v = "dflt" } of [{ name: "p" }, { name: "q", v: 1 }]) console.log(n, v);
try { const { a } = null; } catch (e) { console.log(e.name); }
