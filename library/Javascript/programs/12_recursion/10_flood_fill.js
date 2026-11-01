// Flood fill and counting islands.
const g = ["11000", "11011", "00010", "00000", "10101"].map((r) => [...r].map(Number));
function fill(g, r, c, from, to) { if (r < 0 || c < 0 || r >= g.length || c >= g[0].length || g[r][c] !== from) return 0; g[r][c] = to; return 1 + fill(g, r + 1, c, from, to) + fill(g, r - 1, c, from, to) + fill(g, r, c + 1, from, to) + fill(g, r, c - 1, from, to); }
let id = 2; const sizes = [];
for (let r = 0; r < g.length; r++) for (let c = 0; c < g[0].length; c++) if (g[r][c] === 1) sizes.push(fill(g, r, c, 1, id++));
console.log(sizes, g.map((r) => r.join("")).join("\n"));
