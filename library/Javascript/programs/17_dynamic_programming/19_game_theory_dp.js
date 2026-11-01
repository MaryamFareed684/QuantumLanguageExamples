// Win/lose DP: Nim, stone games and optimal play.
const nim = (h) => h.reduce((a, b) => a ^ b, 0) !== 0; console.log(nim([3, 4, 5]), nim([1, 2, 3]), nim([7]));
const stone = (a) => { const n = a.length, d = a.map((x, i) => { const r = Array(n).fill(0); r[i] = x; return r; }); for (let l = 2; l <= n; l++) for (let i = 0; i + l <= n; i++) { const j = i + l - 1; d[i][j] = Math.max(a[i] - d[i + 1][j], a[j] - d[i][j - 1]); } return d[0][n - 1]; }; console.log(stone([5, 3, 4, 5]), stone([1, 5, 2]));
const take = (n) => { const w = [false]; for (let i = 1; i <= n; i++) w[i] = [1, 3, 4].some((k) => k <= i && !w[i - k]); return w.map((b, i) => (b ? i : -1)).filter((x) => x >= 0); }; console.log(take(20));
const grundy = (n, m = {}) => { if (n in m) return m[n]; const s = new Set(); for (const k of [1, 2]) if (n >= k) s.add(grundy(n - k, m)); let g = 0; while (s.has(g)) g++; return (m[n] = g); }; console.log([0, 1, 2, 3, 4, 5, 6].map((n) => grundy(n)));
