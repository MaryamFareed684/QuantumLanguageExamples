// Counting sort and LSD radix sort.
function counting(a, max) { const c = new Array(max + 1).fill(0); a.forEach((x) => c[x]++); return c.flatMap((n, i) => Array(n).fill(i)); }
console.log(counting([4, 2, 2, 8, 3, 3, 1], 8));
function radix(a) { let e = 1; const m = Math.max(...a); while (m / e >= 1) { const b = Array.from({ length: 10 }, () => []); for (const x of a) b[Math.floor(x / e) % 10].push(x); a = b.flat(); e *= 10; } return a; }
console.log(radix([170, 45, 75, 90, 802, 24, 2, 66]));
const rs = (w, k) => { for (let i = k - 1; i >= 0; i--) { const b = {}; for (const s of w) (b[s[i]] ||= []).push(s); w = Object.keys(b).sort().flatMap((c) => b[c]); } return w; }; console.log(rs(["cab", "abc", "bca", "aaa"], 3));
