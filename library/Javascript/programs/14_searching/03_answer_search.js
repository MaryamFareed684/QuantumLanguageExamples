// Binary search on the answer: roots, shipping, min-max.
const isqrt = (n) => { let l = 0, h = n; while (l < h) { const m = Math.ceil((l + h) / 2); m * m <= n ? (l = m) : (h = m - 1); } return l; };
console.log([0, 1, 15, 16, 17, 1000000].map(isqrt));
const ship = (w, d) => { let l = Math.max(...w), h = w.reduce((a, b) => a + b); const ok = (c) => { let n = 1, s = 0; for (const x of w) { if (s + x > c) { n++; s = 0; } s += x; } return n <= d; }; while (l < h) { const m = (l + h) >> 1; ok(m) ? (h = m) : (l = m + 1); } return l; };
console.log(ship([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), ship([3, 2, 2, 4, 1, 4], 3));
const root = (f, l, h) => { for (let i = 0; i < 100; i++) { const m = (l + h) / 2; f(m) > 0 ? (h = m) : (l = m); } return l; }; console.log(root((x) => x ** 3 - 10, 0, 10).toFixed(9));
