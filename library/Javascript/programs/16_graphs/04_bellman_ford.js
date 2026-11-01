// Bellman-Ford with negative edges and cycle detection.
const E = [[0, 1, 4], [0, 2, 5], [1, 2, -3], [2, 3, 4], [3, 1, 1]];
function bf(n, e, s) { const d = Array(n).fill(Infinity); d[s] = 0; for (let i = 0; i < n - 1; i++) for (const [u, v, w] of e) if (d[u] + w < d[v]) d[v] = d[u] + w; const neg = e.some(([u, v, w]) => d[u] + w < d[v]); return { d, neg }; }
console.log(bf(4, E, 0), bf(3, [[0, 1, 1], [1, 2, -1], [2, 1, -1]], 0).neg, bf(2, [], 0));
