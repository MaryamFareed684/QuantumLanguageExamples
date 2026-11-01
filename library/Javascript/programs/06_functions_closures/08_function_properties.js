// Function name, length, toString, properties and new.target.
function named(a, b = 1, ...c) { return new.target ? "new" : "call"; }
const anon = function () {}, arrow = () => {}, bound = named.bind(null);
console.log(named.name, named.length, anon.name, arrow.name, bound.name, bound.length, (() => {}).name === "");
console.log(typeof named, named instanceof Function, Object.getPrototypeOf(arrow) === Function.prototype);
console.log(named(), typeof new named(), named.toString(), arrow.toString(), Object.keys(named));
named.meta = 1; console.log(named.meta, Object.keys(named), named);
console.log(arrow.prototype, typeof named.prototype, named.prototype.constructor === named);
try { new arrow(); } catch (e) { console.log(e.name + ": " + e.message); }
const dyn = new Function("a", "b", "return a * b"); console.log(dyn(3, 4), dyn.name);
