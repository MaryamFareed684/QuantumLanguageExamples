// Series: harmonic, Leibniz pi, e, and Euler's sum.
let h = 0, l = 0, b = 0; for (let i = 1; i <= 100000; i++) { h += 1 / i; l += (i % 2 ? 4 : -4) / (2 * i - 1); b += 1 / (i * i); } console.log(h, l, Math.sqrt(b * 6));
let e = 1, t = 1; for (let i = 1; i < 20; i++) { t /= i; e += t; } console.log(e, Math.E, e === Math.E);
const sn = (x, n = 15) => { let s = 0, t = x; for (let i = 1; i <= n; i++) { s += t; t *= (-x * x) / (2 * i * (2 * i + 1)); } return s; }; console.log(sn(1), Math.sin(1), sn(Math.PI / 6));
console.log([...Array(1000).keys()].filter((n) => n % 3 === 0 || n % 5 === 0).reduce((a, b) => a + b), (() => { let s = 0, a = 1, b = 2; while (b < 4000000) { if (b % 2 === 0) s += b; [a, b] = [b, a + b]; } return s; })());
