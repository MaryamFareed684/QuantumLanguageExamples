// Natural merge sort: finding runs and merging them.
function runs(a) { const out = []; let cur = [a[0]]; for (let i = 1; i < a.length; i++) { if (a[i] >= a[i - 1]) cur.push(a[i]); else { out.push(cur); cur = [a[i]]; } } out.push(cur); return out; }
const merge = (x, y) => { const o = []; let i = 0, j = 0; while (i < x.length && j < y.length) o.push(x[i] <= y[j] ? x[i++] : y[j++]); return [...o, ...x.slice(i), ...y.slice(j)]; };
let r = runs([1, 4, 7, 2, 9, 3, 3, 8, 0]); console.log(r);
while (r.length > 1) { const n = []; for (let i = 0; i < r.length; i += 2) n.push(r[i + 1] ? merge(r[i], r[i + 1]) : r[i]); r = n; console.log(r); }
