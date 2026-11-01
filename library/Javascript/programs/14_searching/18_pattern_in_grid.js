// Word search in a letter grid with backtracking.
const g = ["ABCE", "SFCS", "ADEE"].map((r) => [...r]);
const exist = (w) => { const dfs = (r, c, i) => { if (i === w.length) return true; if (g[r]?.[c] !== w[i]) return false; const t = g[r][c]; g[r][c] = "#"; const f = dfs(r + 1, c, i + 1) || dfs(r - 1, c, i + 1) || dfs(r, c + 1, i + 1) || dfs(r, c - 1, i + 1); g[r][c] = t; return f; }; return g.some((row, r) => row.some((_, c) => dfs(r, c, 0))); };
console.log(["ABCCED", "SEE", "ABCB", "ASADFB"].map(exist));
