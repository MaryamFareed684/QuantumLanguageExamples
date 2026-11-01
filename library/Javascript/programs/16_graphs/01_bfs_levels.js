// Breadth-first search with levels and shortest paths.
const g = { a: ["b", "c"], b: ["d"], c: ["d", "e"], d: ["f"], e: ["f"], f: [] };
function bfs(s) { const d = { [s]: 0 }, p = {}, q = [s]; for (const u of q) for (const v of g[u]) if (!(v in d)) { d[v] = d[u] + 1; p[v] = u; q.push(v); } return { d, p, q }; }
const { d, p, q } = bfs("a"); console.log(d, q, p);
const path = (t) => (t in p ? [...path(p[t]), t] : [t]); console.log(path("f").join("->"));
