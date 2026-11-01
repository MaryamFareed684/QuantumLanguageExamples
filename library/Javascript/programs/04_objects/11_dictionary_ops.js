// Objects as dictionaries: has, delete, default values and inversion.
const d = Object.create(null);
d.apple = 3; d.toString = "not a method";
console.log("apple" in d, "pear" in d, "constructor" in d, "constructor" in {}, d);
const o = { a: 1, b: 2 };
console.log(o.hasOwnProperty("a"), Object.hasOwn(o, "b"), Object.hasOwn(o, "toString"), "toString" in o);
console.log(delete o.a, delete o.nope, o);
const invert = (m) => Object.fromEntries(Object.entries(m).map(([k, v]) => [v, k]));
console.log(invert({ x: 1, y: 2 }), invert({ x: 1, y: 1 }));
const sortedKeys = (m) => Object.keys(m).sort().reduce((r, k) => ((r[k] = m[k]), r), {});
console.log(sortedKeys({ z: 1, m: 2, a: 3 }));
const obj = {}; obj[1] = "n"; obj["1"] = "s"; obj[{}] = "o"; obj[[1, 2]] = "a"; obj[null] = "x"; console.log(obj);
