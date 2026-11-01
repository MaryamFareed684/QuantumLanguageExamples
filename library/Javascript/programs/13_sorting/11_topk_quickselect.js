// Quickselect for the k-th smallest, and top-k with a heap.
function qselect(a, k) { a = [...a]; let l = 0, h = a.length - 1; while (l < h) { const p = a[h]; let s = l; for (let i = l; i < h; i++) if (a[i] < p) { [a[i], a[s]] = [a[s], a[i]]; s++; } [a[s], a[h]] = [a[h], a[s]]; if (s === k) return a[s]; s < k ? (l = s + 1) : (h = s - 1); } return a[l]; }
const d = [7, 10, 4, 3, 20, 15]; console.log(d.map((_, i) => qselect(d, i)));
const top = (a, k) => { const h = []; for (const x of a) { h.push(x); h.sort((p, q) => p - q); if (h.length > k) h.shift(); } return h.reverse(); }; console.log(top(d, 3));
