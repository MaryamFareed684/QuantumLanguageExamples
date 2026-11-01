// Longest increasing subsequence: O(n^2) and patience.
const a = [10, 9, 2, 5, 3, 7, 101, 18];
const slow = (x) => { const d = x.map(() => 1), p = x.map(() => -1); x.forEach((v, i) => { for (let j = 0; j < i; j++) if (x[j] < v && d[j] + 1 > d[i]) { d[i] = d[j] + 1; p[i] = j; } }); let i = d.indexOf(Math.max(...d)); const o = []; for (; i >= 0; i = p[i]) o.unshift(x[i]); return o; };
const fast = (x) => { const t = []; for (const v of x) { let l = 0, h = t.length; while (l < h) { const m = (l + h) >> 1; t[m] < v ? (l = m + 1) : (h = m); } t[l] = v; } return t.length; };
console.log(slow(a), fast(a), fast([]), fast([3, 3]), slow([5, 4, 3]));
let s = 1; const big = Array.from({ length: 20000 }, () => (s = (s * 48271) % 2147483647) % 100000); console.log(fast(big));
