// Larger arrays: building, sorting and summing a million-ish values.
const n = 200000;
const a = new Array(n);
let seed = 42;
for (let i = 0; i < n; i++) { seed = (seed * 1103515245 + 12345) % 2147483648; a[i] = seed % 100000; }
console.log(a.slice(0, 5));
const sorted = [...a].sort((x, y) => x - y);
console.log(sorted[0], sorted[n >> 1], sorted[n - 1]);
console.log(a.reduce((s, x) => s + x, 0), a.filter((x) => x % 2 === 0).length, new Set(a).size);
console.log(a.map((x) => x * 2).slice(-2), a.indexOf(sorted[n - 1]) >= 0);
