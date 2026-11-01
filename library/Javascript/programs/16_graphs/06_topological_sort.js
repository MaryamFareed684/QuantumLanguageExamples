// Kahn's algorithm and DFS-based ordering for course plans.
const pre = { calc2: ["calc1"], calc3: ["calc2"], phys: ["calc1"], lab: ["phys"], ml: ["calc3", "cs"], cs: [], calc1: [] };
function kahn(g) { const ind = Object.fromEntries(Object.keys(g).map((k) => [k, g[k].length])), out = {}; for (const k in g) for (const p of g[k]) (out[p] ||= []).push(k); const q = Object.keys(g).filter((k) => !ind[k]).sort(), o = []; while (q.length) { const u = q.shift(); o.push(u); for (const v of out[u] ?? []) if (!--ind[v]) { q.push(v); q.sort(); } } return o; }
console.log(kahn(pre), kahn({ a: ["b"], b: ["a"] }));
const dfsT = (g) => { const s = new Set(), o = []; const v = (u) => { if (s.has(u)) return; s.add(u); g[u].forEach(v); o.push(u); }; Object.keys(g).sort().forEach(v); return o; }; console.log(dfsT(pre));
