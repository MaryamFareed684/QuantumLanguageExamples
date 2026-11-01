// Spread, rest and array destructuring.
const a = [1, 2, 3];
const [x, y = 9, z = 9, w = 9] = a;
console.log(x, y, z, w);
const [first, ...others] = a, [, second, , none] = a;
console.log(first, others, second, none);
let p = 1, q = 2;
[p, q] = [q, p];
console.log(p, q, [...a, ...a], Math.max(...a), [..."hi"], [...new Set([1, 1])]);
const [[n1, [n2]], { k }] = [[1, [2]], { k: 3 }];
console.log(n1, n2, k);
function f(a, b, ...c) { return [a, b, c]; }
console.log(f(...a, 4, 5), f(), f.length);
