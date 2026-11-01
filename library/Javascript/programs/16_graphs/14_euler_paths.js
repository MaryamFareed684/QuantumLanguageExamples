// Eulerian paths by Hierholzer's algorithm.
const edges = [["a", "b"], ["b", "c"], ["c", "a"], ["a", "d"], ["d", "e"], ["e", "a"]];
const adj = {}; for (const [u, v] of edges) { (adj[u] ||= []).push(v); (adj[v] ||= []).push(u); }
console.log(Object.entries(adj).map(([k, v]) => [k, v.length]), Object.values(adj).every((v) => v.length % 2 === 0));
const used = new Set(); const circ = []; const go = (u) => { for (const v of adj[u]) { const k = [u, v].sort().join(""); if (!used.has(k)) { used.add(k); go(v); } } circ.push(u); }; go("a");
console.log(circ.join(""), circ.length === edges.length + 1);
