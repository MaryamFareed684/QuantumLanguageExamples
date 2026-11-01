// A handful of classic Project Euler answers.
const sumSq = (n) => { const s = (n * (n + 1)) / 2; return s * s - (n * (n + 1) * (2 * n + 1)) / 6; }; console.log(sumSq(100));
const tri = () => { for (let n = 1, t = 1; ; n++, t += n) { let c = 0; for (let i = 1; i * i <= t; i++) if (t % i === 0) c += i * i === t ? 1 : 2; if (c > 200) return t; } }; console.log(tri());
const lat = (n) => { let r = 1; for (let i = 1; i <= n; i++) r = (r * (n + i)) / i; return r; }; console.log(lat(20));
let b = 0; for (let i = 1; i < 100; i++) { for (let j = 1n; j < 100n; j++) { const s = [...String(BigInt(i) ** j)].reduce((x, y) => x + +y, 0); if (s > b) b = s; } } console.log(b);
const col = new Map([[1, 1]]); const cl = (n) => { if (col.has(n)) return col.get(n); const r = 1 + cl(n % 2 ? 3 * n + 1 : n / 2); col.set(n, r); return r; }; let be = 1; for (let i = 1; i < 100000; i++) if (cl(i) > cl(be)) be = i; console.log(be, cl(be));
const smallest = () => { for (let n = 1; ; n++) { const k = [...String(n)].sort().join(""); if ([2, 3, 4, 5, 6].every((m) => [...String(n * m)].sort().join("") === k)) return n; } }; console.log(smallest());
