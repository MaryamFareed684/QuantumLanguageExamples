// TSP by bitmask dynamic programming.
const d = [[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]];
const n = d.length, memo = new Map();
const tsp = (m, u) => { if (m === (1 << n) - 1) return [d[u][0], [0]]; const k = m * 32 + u; if (memo.has(k)) return memo.get(k); let b = [Infinity, []]; for (let v = 0; v < n; v++) if (!(m & (1 << v))) { const [c, p] = tsp(m | (1 << v), v); if (d[u][v] + c < b[0]) b = [d[u][v] + c, [v, ...p]]; } memo.set(k, b); return b; };
const [cost, path] = tsp(1, 0); console.log(cost, [0, ...path].join("->"), memo.size);
