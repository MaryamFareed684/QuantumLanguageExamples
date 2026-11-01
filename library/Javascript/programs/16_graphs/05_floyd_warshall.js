// All-pairs shortest paths, printed as a table.
const I = Infinity; const d = [[0, 3, I, 7], [8, 0, 2, I], [5, I, 0, 1], [2, I, I, 0]];
const n = d.length; for (let k = 0; k < n; k++) for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) d[i][j] = Math.min(d[i][j], d[i][k] + d[k][j]);
for (const r of d) console.log(r.map((x) => String(x).padStart(3)).join(""));
const reach = [[1, 1, 0], [0, 1, 1], [0, 0, 1]]; for (let k = 0; k < 3; k++) for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) reach[i][j] ||= reach[i][k] && reach[k][j]; console.log(reach);
