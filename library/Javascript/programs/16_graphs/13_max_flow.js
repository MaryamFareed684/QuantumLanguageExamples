// Maximum flow with Edmonds-Karp.
const cap = [[0, 16, 13, 0, 0, 0], [0, 0, 10, 12, 0, 0], [0, 4, 0, 0, 14, 0], [0, 0, 9, 0, 0, 20], [0, 0, 0, 7, 0, 4], [0, 0, 0, 0, 0, 0]];
function ek(c, s, t) { c = c.map((r) => [...r]); let f = 0; for (;;) { const p = Array(c.length).fill(-1); p[s] = s; const q = [s]; for (const u of q) c[u].forEach((w, v) => { if (w > 0 && p[v] < 0) { p[v] = u; q.push(v); } }); if (p[t] < 0) return f; let a = Infinity; for (let v = t; v !== s; v = p[v]) a = Math.min(a, c[p[v]][v]); for (let v = t; v !== s; v = p[v]) { c[p[v]][v] -= a; c[v][p[v]] += a; } f += a; } }
console.log(ek(cap, 0, 5));
const match = (adj, n) => { const m = Array(n).fill(-1); const tr = (u, s) => adj[u].some((v) => { if (s.has(v)) return false; s.add(v); if (m[v] < 0 || tr(m[v], s)) { m[v] = u; return true; } return false; }); return adj.filter((_, u) => tr(u, new Set())).length; }; console.log(match([[0, 1], [0], [1, 2]], 3));
