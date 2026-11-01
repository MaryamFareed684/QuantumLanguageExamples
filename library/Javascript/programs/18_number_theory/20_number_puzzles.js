// Number spirals, Josephus and self-describing digits.
const jos = (n, k) => { let r = 0; for (let i = 2; i <= n; i++) r = (r + k) % i; return r + 1; }; console.log(jos(7, 3), jos(41, 3), jos(1, 5));
const spiral = (n) => { const g = Array.from({ length: n }, () => Array(n).fill(0)); let r = 0, c = 0, dr = 0, dc = 1; for (let i = 1; i <= n * n; i++) { g[r][c] = i; if (g[r + dr]?.[c + dc] !== 0) [dr, dc] = [dc, -dr]; r += dr; c += dc; } return g; }; for (const row of spiral(4)) console.log(row.map((x) => String(x).padStart(3)).join(""));
const diag = (n) => { let s = 1, v = 1; for (let l = 2; l < n; l += 2) for (let i = 0; i < 4; i++) { v += l; s += v; } return s; }; console.log(diag(5), diag(1001));
const selfD = (n) => { const s = String(n); return [...s].every((d, i) => [...s].filter((x) => +x === i).length === +d); }; console.log([1210, 2020, 21200, 3211000, 1211].map(selfD));
