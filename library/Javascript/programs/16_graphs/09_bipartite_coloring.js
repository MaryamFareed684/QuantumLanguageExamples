// Bipartite checks and greedy graph coloring.
const bip = (g) => { const c = {}; for (const s in g) { if (c[s] !== undefined) continue; c[s] = 0; const q = [s]; while (q.length) { const u = q.shift(); for (const v of g[u]) { if (c[v] === undefined) { c[v] = 1 - c[u]; q.push(v); } else if (c[v] === c[u]) return null; } } } return c; };
console.log(bip({ a: ["b"], b: ["a", "c"], c: ["b"] }), bip({ a: ["b", "c"], b: ["a", "c"], c: ["a", "b"] }));
const colorG = (g) => { const c = {}; for (const u of Object.keys(g).sort((x, y) => g[y].length - g[x].length)) { const used = new Set(g[u].map((v) => c[v])); let k = 0; while (used.has(k)) k++; c[u] = k; } return c; };
console.log(colorG({ wa: ["or", "id"], or: ["wa", "id", "ca"], ca: ["or"], id: ["wa", "or"] }));
