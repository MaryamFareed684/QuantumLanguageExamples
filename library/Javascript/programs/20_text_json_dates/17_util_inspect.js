// util.inspect options: depth, colors off, compact, sorted, breakLength.
const u = require("util");
const o = { b: { c: { d: { e: 1 } } }, a: [1, [2, [3, [4]]]], s: "str", m: new Map([[1, { x: 1 }]]), l: Array.from({ length: 8 }, (_, i) => i) };
console.log(u.inspect(o)); console.log(u.inspect(o, { depth: null })); console.log(u.inspect(o, { depth: 0 })); console.log(u.inspect(o, { compact: false, depth: 1 })); console.log(u.inspect(o, { sorted: true, breakLength: Infinity }));
console.log(u.inspect("q'uo\"te"), u.inspect(`both'"`), u.inspect("a`'\""), u.inspect([1, 2, 3], { maxArrayLength: 1 }), u.inspect("x".repeat(30), { maxStringLength: 5 }), u.inspect(new Set([1]), { showHidden: false }), u.inspect(Symbol("y")), u.inspect(-0), u.inspect(null), u.inspect(undefined), u.inspect(1n));
console.log(u.types.isMap(new Map()), u.types.isDate(new Date(0)), u.types.isRegExp(/x/), u.types.isPromise(Promise.resolve()), u.isArray([]), u.format("%s %O %i", "a", { b: 1 }, "42.5"), u.format("no args %s"), u.format("%d", "x"), u.format("a", "b", 1), u.format(1, 2));
const p = u.promisify((x, cb) => cb(null, x * 2)); p(21).then((v) => console.log(v));
