// Powers, roots and integer logs.
const ilog = (n, b) => { let k = 0; while (n >= b) { n = Math.floor(n / b); k++; } return k; }; console.log(ilog(1000, 10), ilog(1024, 2), ilog(999, 10), Math.log10(1000), Math.log(1000) / Math.LN10, Math.floor(Math.log10(1000)));
const pp = (n) => { for (let b = 2; b * b <= n; b++) { let v = b, e = 1; while (v < n) { v *= b; e++; } if (v === n) return [b, e]; } return null; }; console.log([4, 27, 28, 1024, 1000, 2].map(pp));
const nrt = (x, n) => { let r = x; for (let i = 0; i < 100; i++) r = ((n - 1) * r + x / r ** (n - 1)) / n; return r; }; console.log(nrt(27, 3), nrt(2, 2), nrt(1024, 10).toFixed(10));
console.log(2 ** 0.5, 8 ** (1 / 3), (-8) ** (1 / 3), Math.cbrt(-8), 0 ** 0, NaN ** 0, 2 ** 1024, 2 ** -1074, 2 ** -1075, (-2) ** 3, 10 ** 21, 10 ** -7);
