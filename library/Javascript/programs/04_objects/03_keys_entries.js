// keys, values, entries, fromEntries and property order.
const o = { b: 1, a: 2, 2: "two", 1: "one", [Symbol("s")]: "sym", "-1": "neg" };
console.log(Object.keys(o), Object.values(o), Object.entries(o));
console.log(o, Object.getOwnPropertySymbols(o).length, Reflect.ownKeys(o).length);
console.log(Object.fromEntries([["x", 1], ["y", 2]]), Object.fromEntries(new Map([["m", 1]])));
const prices = { apple: 1.5, pear: 2 };
console.log(Object.fromEntries(Object.entries(prices).map(([k, v]) => [k, v * 2])));
console.log(Object.keys("ab"), Object.keys([5, 6]), Object.entries("hi"), Object.keys({}).length === 0);
for (const k in Object.create({ inherited: 1 }, { own: { value: 2, enumerable: true } })) console.log(k);
