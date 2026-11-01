// PageRank by power iteration.
const L = { a: ["b", "c"], b: ["c"], c: ["a"], d: ["c"] };
const nodes = Object.keys(L), n = nodes.length, dmp = 0.85;
let r = Object.fromEntries(nodes.map((k) => [k, 1 / n]));
for (let it = 0; it < 50; it++) { const nx = Object.fromEntries(nodes.map((k) => [k, (1 - dmp) / n])); for (const u of nodes) for (const v of L[u]) nx[v] += (dmp * r[u]) / L[u].length; r = nx; }
for (const [k, v] of Object.entries(r).sort((x, y) => y[1] - x[1])) console.log(k, v.toFixed(5));
console.log(Object.values(r).reduce((a, b) => a + b).toFixed(5));
