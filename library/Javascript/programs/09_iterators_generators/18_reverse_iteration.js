// Reverse iteration of arrays, strings and linked items.
function* rev(a) { for (let i = a.length - 1; i >= 0; i--) yield a[i]; }
console.log([...rev([1, 2, 3])], [...rev("abc")].join(""), [...[1, 2, 3].entries()].reverse(), [...new Set([1, 2])].reverse(), [...new Map([[1, 2], [3, 4]])].reverse());
const it = { i: 3, [Symbol.iterator]() { return this; }, next() { return this.i > 0 ? { value: this.i--, done: false } : { done: true }; } };
console.log([...it], [...it]);
