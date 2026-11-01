// Binary search with lower and upper bounds.
const lower = (a, t) => { let l = 0, h = a.length; while (l < h) { const m = (l + h) >>> 1; a[m] < t ? (l = m + 1) : (h = m); } return l; };
const upper = (a, t) => { let l = 0, h = a.length; while (l < h) { const m = (l + h) >>> 1; a[m] <= t ? (l = m + 1) : (h = m); } return l; };
const a = [1, 2, 2, 2, 3, 5, 8];
for (const t of [0, 2, 4, 8, 9]) console.log(t, lower(a, t), upper(a, t), upper(a, t) - lower(a, t));
const has = (x, t) => { const i = lower(x, t); return i < x.length && x[i] === t; }; console.log(has(a, 3), has(a, 4), has([], 1));
