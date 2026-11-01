// Borrowing methods and binding partial arguments.
const max = Function.prototype.apply.bind(Math.max, null);
console.log(max([1, 9, 3]));
const slice = Function.prototype.call.bind(Array.prototype.slice);
console.log(slice("abc", 1), slice([1, 2, 3], 0, 2));
const log = console.log.bind(console, "[tag]");
log("bound", 1);
const p = { name: "p", hi(g, e) { return `${g}, ${this.name}${e}`; } };
console.log(p.hi.call({ name: "q" }, "Hey", "!"), p.hi.apply({ name: "r" }, ["Yo", "?"]), p.hi.bind({ name: "s" }, "Hm")("."));
const has = Object.prototype.hasOwnProperty;
console.log(has.call({ a: 1 }, "a"), has.call([], "length"), has.call("s", 0));
