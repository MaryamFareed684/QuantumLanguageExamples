// Continued fractions and rational approximations.
const cf = (x, n) => { const o = []; for (let i = 0; i < n; i++) { const a = Math.floor(x); o.push(a); if (x === a) break; x = 1 / (x - a); } return o; };
const conv = (a) => { let [h0, h1, k0, k1] = [0, 1, 1, 0]; const o = []; for (const q of a) { [h0, h1] = [h1, q * h1 + h0]; [k0, k1] = [k1, q * k1 + k0]; o.push(`${h1}/${k1}`); } return o; };
console.log(cf(Math.PI, 6), conv(cf(Math.PI, 5)), cf(Math.sqrt(2), 5), cf(0.75, 5), conv([1, 1, 1, 1, 1, 1]));
const best = (x, D) => { let b = [0, 1]; for (let d = 1; d <= D; d++) { const n = Math.round(x * d); if (Math.abs(x - n / d) < Math.abs(x - b[0] / b[1])) b = [n, d]; } return b; }; console.log(best(Math.PI, 10), best(Math.PI, 200), best(Math.E, 100));
