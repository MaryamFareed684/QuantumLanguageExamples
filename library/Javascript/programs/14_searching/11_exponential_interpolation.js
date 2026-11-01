// Exponential, interpolation and jump search.
const a = Array.from({ length: 100 }, (_, i) => i * i);
const bs = (x, t, l, h) => { while (l <= h) { const m = (l + h) >> 1; if (x[m] === t) return m; x[m] < t ? (l = m + 1) : (h = m - 1); } return -1; };
const expo = (x, t) => { if (x[0] === t) return 0; let i = 1; while (i < x.length && x[i] <= t) i *= 2; return bs(x, t, i >> 1, Math.min(i, x.length - 1)); };
const interp = (x, t) => { let l = 0, h = x.length - 1; while (l <= h && t >= x[l] && t <= x[h]) { if (x[h] === x[l]) return x[l] === t ? l : -1; const p = l + Math.floor(((t - x[l]) * (h - l)) / (x[h] - x[l])); if (x[p] === t) return p; x[p] < t ? (l = p + 1) : (h = p - 1); } return -1; };
const jump = (x, t) => { const s = Math.floor(Math.sqrt(x.length)); let p = 0; while (p < x.length && x[Math.min(p + s, x.length) - 1] < t) p += s; for (let i = p; i < Math.min(p + s, x.length); i++) if (x[i] === t) return i; return -1; };
console.log(expo(a, 81), interp(a, 2500), jump(a, 9801), expo(a, 2), interp(a, 3), jump(a, 5));
