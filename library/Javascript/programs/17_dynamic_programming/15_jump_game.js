// Jump game, gas stations and greedy-vs-DP checks.
const can = (a) => { let m = 0; for (let i = 0; i < a.length; i++) { if (i > m) return false; m = Math.max(m, i + a[i]); } return true; };
const jumps = (a) => { let j = 0, e = 0, f = 0; for (let i = 0; i < a.length - 1; i++) { f = Math.max(f, i + a[i]); if (i === e) { j++; e = f; } } return j; };
console.log(can([2, 3, 1, 1, 4]), can([3, 2, 1, 0, 4]), jumps([2, 3, 1, 1, 4]), jumps([1]), jumps([2, 3, 0, 1, 4]));
const gas = (g, c) => { let t = 0, s = 0, st = 0; g.forEach((_, i) => { const d = g[i] - c[i]; t += d; s += d; if (s < 0) { st = i + 1; s = 0; } }); return t < 0 ? -1 : st; }; console.log(gas([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]), gas([2, 3, 4], [3, 4, 3]));
const cand = (r) => { const c = r.map(() => 1); for (let i = 1; i < r.length; i++) if (r[i] > r[i - 1]) c[i] = c[i - 1] + 1; for (let i = r.length - 2; i >= 0; i--) if (r[i] > r[i + 1]) c[i] = Math.max(c[i], c[i + 1] + 1); return c.reduce((a, b) => a + b); }; console.log(cand([1, 0, 2]), cand([1, 2, 2]));
