// Searching sorted matrices.
const m = [[1, 4, 7, 11], [2, 5, 8, 12], [3, 6, 9, 16], [10, 13, 14, 17]];
const stair = (g, t) => { let r = 0, c = g[0].length - 1; while (r < g.length && c >= 0) { if (g[r][c] === t) return [r, c]; g[r][c] > t ? c-- : r++; } return null; };
console.log(stair(m, 5), stair(m, 15), stair(m, 17), stair(m, 1));
const flatS = (g, t) => { const R = g.length, C = g[0].length; let l = 0, h = R * C - 1; while (l <= h) { const k = (l + h) >> 1, v = g[k / C | 0][k % C]; if (v === t) return [k / C | 0, k % C]; v < t ? (l = k + 1) : (h = k - 1); } return null; };
console.log(flatS([[1, 3, 5], [7, 9, 11]], 9), flatS([[1, 3, 5], [7, 9, 11]], 4));
