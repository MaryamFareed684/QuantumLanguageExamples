// Minimum spanning trees by Kruskal and Prim.
const E = [["a", "b", 4], ["a", "h", 8], ["b", "c", 8], ["b", "h", 11], ["c", "d", 7], ["c", "f", 4], ["c", "i", 2], ["d", "e", 9], ["d", "f", 14], ["e", "f", 10], ["f", "g", 2], ["g", "h", 1], ["g", "i", 6], ["h", "i", 7]];
const kr = (es) => { const p = {}, f = (x) => (p[x] ??= x) === x ? x : (p[x] = f(p[x])); const o = []; for (const [u, v, w] of [...es].sort((a, b) => a[2] - b[2])) if (f(u) !== f(v)) { p[f(u)] = f(v); o.push([u, v, w]); } return o; };
const t = kr(E); console.log(t.reduce((s, e) => s + e[2], 0), t.length);
const prim = (es, s) => { const adj = {}; for (const [u, v, w] of es) { (adj[u] ||= []).push([v, w]); (adj[v] ||= []).push([u, w]); } const seen = new Set([s]); let tot = 0; while (seen.size < Object.keys(adj).length) { let b = null; for (const u of seen) for (const [v, w] of adj[u]) if (!seen.has(v) && (!b || w < b[1])) b = [v, w]; seen.add(b[0]); tot += b[1]; } return tot; }; console.log(prim(E, "a"));
