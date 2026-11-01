// Inheriting iteration protocols.
class Coll { constructor(...x) { this.x = x; } *[Symbol.iterator]() { yield* this.x; } map(f) { return new this.constructor(...[...this].map(f)); } get size() { return this.x.length; } }
class Evens extends Coll { *[Symbol.iterator]() { for (const v of super[Symbol.iterator]()) if (v % 2 === 0) yield v; } }
console.log([...new Coll(1, 2, 3)], [...new Evens(1, 2, 3, 4)], new Evens(2, 4).map((x) => x + 2), new Coll(1).size, Math.max(...new Evens(2, 8)));
const [h, ...t] = new Coll(1, 2, 3); console.log(h, t, new Set(new Coll(1, 1)), Array.from(new Evens(2)), Object.fromEntries(new Coll(["a", 1])));
