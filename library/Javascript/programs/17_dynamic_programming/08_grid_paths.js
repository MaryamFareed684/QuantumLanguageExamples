// Unique paths, minimum path sum and maximal square.
const uniq = (g) => { const d = g.map((r) => r.map(() => 0)); g.forEach((r, i) => r.forEach((v, j) => { d[i][j] = v ? 0 : !i && !j ? 1 : (d[i - 1]?.[j] ?? 0) + (d[i][j - 1] ?? 0); })); return d.at(-1).at(-1); };
console.log(uniq([[0, 0, 0], [0, 1, 0], [0, 0, 0]]), uniq([[1]]), uniq(Array(7).fill(Array(3).fill(0))));
const mp = (g) => { const d = g.map((r) => [...r]); d.forEach((r, i) => r.forEach((v, j) => { if (i || j) r[j] += Math.min(d[i - 1]?.[j] ?? Infinity, r[j - 1] ?? Infinity); })); return d.at(-1).at(-1); }; console.log(mp([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
const sq = (g) => { let b = 0; const d = g.map((r) => r.map(() => 0)); g.forEach((r, i) => r.forEach((v, j) => { if (v) { d[i][j] = 1 + Math.min(d[i - 1]?.[j] ?? 0, d[i][j - 1] ?? 0, d[i - 1]?.[j - 1] ?? 0); b = Math.max(b, d[i][j]); } })); return b * b; }; console.log(sq([[1, 0, 1, 0, 0], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 0, 0, 1, 0]]));
