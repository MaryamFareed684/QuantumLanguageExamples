// State-machine DP on stock trading.
const anyT = (p) => p.slice(1).reduce((s, x, i) => s + Math.max(0, x - p[i]), 0);
const kT = (p, k) => { const b = Array(k + 1).fill(-Infinity), s = Array(k + 1).fill(0); for (const x of p) for (let i = 1; i <= k; i++) { b[i] = Math.max(b[i], s[i - 1] - x); s[i] = Math.max(s[i], b[i] + x); } return s[k]; };
const cool = (p) => { let h = -Infinity, s = 0, r = 0; for (const x of p) [h, s, r] = [Math.max(h, r - x), h + x, Math.max(r, s)]; return Math.max(s, r); };
const fee = (p, f) => { let c = 0, h = -p[0]; for (const x of p) { c = Math.max(c, h + x - f); h = Math.max(h, c - x); } return c; };
const p = [3, 3, 5, 0, 0, 3, 1, 4]; console.log(anyT(p), kT(p, 2), kT(p, 1), cool([1, 2, 3, 0, 2]), fee([1, 3, 2, 8, 4, 9], 2));
