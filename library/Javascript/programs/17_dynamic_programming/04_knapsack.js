// 0/1, unbounded and subset-sum knapsacks with item recovery.
const items = [[1, 1], [3, 4], [4, 5], [5, 7]], W = 7;
const k01 = (it, W) => { const d = Array.from({ length: it.length + 1 }, () => Array(W + 1).fill(0)); it.forEach(([w, v], i) => { for (let c = 0; c <= W; c++) d[i + 1][c] = Math.max(d[i][c], c >= w ? d[i][c - w] + v : 0); }); const o = []; for (let i = it.length, c = W; i; i--) if (d[i][c] !== d[i - 1][c]) { o.unshift(it[i - 1]); c -= it[i - 1][0]; } return [d[it.length][W], o]; };
console.log(k01(items, W), k01([], 5), k01([[9, 9]], 1));
const unb = (it, W) => { const d = Array(W + 1).fill(0); for (let c = 1; c <= W; c++) for (const [w, v] of it) if (w <= c) d[c] = Math.max(d[c], d[c - w] + v); return d[W]; }; console.log(unb(items, 10));
const ss = (a, t) => { const d = new Set([0]); for (const x of a) for (const s of [...d]) d.add(s + x); return d.has(t); }; console.log(ss([3, 34, 4, 12, 5, 2], 9), ss([3, 34, 4], 6));
const part = (a) => { const s = a.reduce((x, y) => x + y); return s % 2 === 0 && ss(a, s / 2); }; console.log(part([1, 5, 11, 5]), part([1, 2, 3, 5]));
