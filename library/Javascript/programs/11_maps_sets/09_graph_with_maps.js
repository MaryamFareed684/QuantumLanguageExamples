// Adjacency maps and sets with degree counts.
const edges = [["a", "b"], ["b", "c"], ["c", "a"], ["c", "d"]];
const adj = new Map();
for (const [u, v] of edges) { if (!adj.has(u)) adj.set(u, new Set()); if (!adj.has(v)) adj.set(v, new Set()); adj.get(u).add(v); adj.get(v).add(u); }
console.log(adj);
console.log([...adj].map(([k, s]) => [k, s.size]), [...adj.get("c")].sort());
const seen = new Set(); const dfs = (n) => { if (seen.has(n)) return; seen.add(n); adj.get(n).forEach(dfs); }; dfs("d"); console.log(seen, seen.size === adj.size);
