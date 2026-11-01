// Minimum coins and number of ways.
const minC = (c, t) => { const d = Array(t + 1).fill(Infinity); d[0] = 0; for (let i = 1; i <= t; i++) for (const k of c) if (k <= i) d[i] = Math.min(d[i], d[i - k] + 1); return d[t] === Infinity ? -1 : d[t]; };
const ways = (c, t) => { const d = Array(t + 1).fill(0); d[0] = 1; for (const k of c) for (let i = k; i <= t; i++) d[i] += d[i - k]; return d[t]; };
console.log(minC([1, 2, 5], 11), minC([2], 3), minC([1], 0), ways([1, 2, 5], 5), ways([2], 3), ways([1, 5, 10, 25, 50], 100));
const pick = (c, t) => { const d = Array(t + 1).fill(Infinity), f = []; d[0] = 0; for (let i = 1; i <= t; i++) for (const k of c) if (k <= i && d[i - k] + 1 < d[i]) { d[i] = d[i - k] + 1; f[i] = k; } const o = []; for (let i = t; i > 0; i -= f[i]) o.push(f[i]); return o; }; console.log(pick([1, 3, 4], 6), pick([1, 5, 12], 15));
