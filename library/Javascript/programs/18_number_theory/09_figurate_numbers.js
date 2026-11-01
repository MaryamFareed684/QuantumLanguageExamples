// Triangular, square, pentagonal and palindromic numbers.
const T = (n) => (n * (n + 1)) / 2, P = (n) => (n * (3 * n - 1)) / 2;
console.log([...Array(10).keys()].map((n) => T(n + 1)), [...Array(10).keys()].map((n) => P(n + 1)));
const isT = (x) => Number.isInteger((Math.sqrt(8 * x + 1) - 1) / 2); console.log([1, 2, 3, 10, 55, 56].map(isT));
let m = 0; for (let a = 100; a < 1000; a++) for (let b = a; b < 1000; b++) { const p = a * b; if (p > m && String(p) === [...String(p)].reverse().join("")) m = p; } console.log(m);
const pyth = (l) => { const o = []; for (let a = 1; a < l; a++) for (let b = a; b < l; b++) { const c = Math.hypot(a, b); if (c <= l && Number.isInteger(c)) o.push([a, b, c]); } return o; }; console.log(pyth(20));
