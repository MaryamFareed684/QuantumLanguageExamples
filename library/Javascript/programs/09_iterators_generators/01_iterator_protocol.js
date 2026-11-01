// Writing the iterator protocol by hand.
const range = (a, b) => ({
  [Symbol.iterator]() { let i = a; return { next: () => (i < b ? { value: i++, done: false } : { value: undefined, done: true }) }; },
});
console.log([...range(0, 3)], Array.from(range(2, 4)), Math.max(...range(0, 9)));
for (const v of range(5, 7)) console.log(v);
const [x, y] = range(10, 20); console.log(x, y);
const it = range(0, 1)[Symbol.iterator]();
console.log(it.next(), it.next(), it.next());
const closing = { [Symbol.iterator]() { return { next: () => ({ value: 1, done: false }), return() { console.log("closed"); return {}; } }; } };
for (const v of closing) { console.log(v); break; }
const [z] = closing; console.log(z);
