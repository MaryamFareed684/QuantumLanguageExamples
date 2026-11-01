// Cycles in directed and undirected graphs.
const dir = (g) => { const st = {}; const go = (u) => { st[u] = 1; for (const v of g[u] ?? []) if (st[v] === 1 || (!st[v] && go(v))) return true; st[u] = 2; return false; }; return Object.keys(g).some((u) => !st[u] && go(u)); };
console.log(dir({ a: ["b"], b: ["c"], c: [] }), dir({ a: ["b"], b: ["a"] }), dir({ a: ["a"] }));
const und = (n, e) => { const p = Array.from({ length: n }, (_, i) => i), f = (x) => (p[x] === x ? x : (p[x] = f(p[x]))); for (const [a, b] of e) { if (f(a) === f(b)) return true; p[f(a)] = f(b); } return false; };
console.log(und(3, [[0, 1], [1, 2]]), und(3, [[0, 1], [1, 2], [2, 0]]));
