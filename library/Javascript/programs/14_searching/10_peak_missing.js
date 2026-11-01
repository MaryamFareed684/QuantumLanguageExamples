// Peak finding, missing numbers and majority vote.
const peak = (a) => { let l = 0, h = a.length - 1; while (l < h) { const m = (l + h) >> 1; a[m] > a[m + 1] ? (h = m) : (l = m + 1); } return l; };
console.log(peak([1, 3, 20, 4, 1]), peak([1, 2, 3]), peak([3, 2, 1]));
const missing = (a) => (a.length * (a.length + 1)) / 2 - a.reduce((x, y) => x + y, 0); console.log(missing([3, 0, 1]), [1, 2, 4].reduce((x, y, i) => x ^ y ^ (i + 1), 4));
const major = (a) => { let c = 0, m; for (const x of a) { if (!c) m = x; c += x === m ? 1 : -1; } return m; }; console.log(major([2, 2, 1, 1, 1, 2, 2]), major([3]));
const dup = (a) => { let t = a[0], h = a[0]; do { t = a[t]; h = a[a[h]]; } while (t !== h); t = a[0]; while (t !== h) { t = a[t]; h = a[h]; } return t; }; console.log(dup([1, 3, 4, 2, 2]));
