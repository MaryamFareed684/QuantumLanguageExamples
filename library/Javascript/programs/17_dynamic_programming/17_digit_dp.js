// Counting numbers by digit properties.
const noRep = (n) => { const s = String(n), m = new Map(); const go = (i, mask, tight, st) => { if (i === s.length) return st ? 1 : 0; const k = `${i},${mask},${tight},${st}`; if (m.has(k)) return m.get(k); let t = 0; const hi = tight ? +s[i] : 9; for (let d = 0; d <= hi; d++) { if (st && mask & (1 << d)) continue; const ns = st || d > 0; t += go(i + 1, ns ? mask | (1 << d) : mask, tight && d === hi, ns); } m.set(k, t); return t; }; return go(0, 0, true, false); };
console.log(noRep(20), noRep(100), noRep(1000), noRep(1000000));
const ones = (n) => { let c = 0; for (let p = 1; p <= n; p *= 10) { const h = Math.floor(n / (p * 10)), cur = Math.floor(n / p) % 10, l = n % p; c += h * p + (cur > 1 ? p : cur === 1 ? l + 1 : 0); } return c; }; console.log(ones(13), ones(100), ones(2147483647));
const brute = (n) => { let c = 0; for (let i = 1; i <= n; i++) c += String(i).split("1").length - 1; return c; }; console.log(brute(13), brute(100));
