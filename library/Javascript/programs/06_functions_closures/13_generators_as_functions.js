// Generator functions used as resumable computations.
function* ids(prefix) { let n = 0; while (true) { const reset = yield `${prefix}${n++}`; if (reset) n = 0; } }
const g = ids("x");
console.log(g.next().value, g.next().value, g.next(true).value, g.next().value);
function* two() { const a = yield 1; const b = yield a + 1; return a + b; }
const t = two();
console.log(t.next(), t.next(10), t.next(20), t.next());
const obj = { *gen() { yield* [1, 2]; }, async: 1 };
console.log([...obj.gen()], typeof obj.gen, obj.gen.constructor.name, Object.prototype.toString.call(obj.gen()));
