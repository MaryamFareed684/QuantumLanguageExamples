// Egyptian fractions and Farey sequences.
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const eg = (n, d) => { const o = []; while (n) { const c = Math.ceil(d / n); o.push(c); [n, d] = [n * c - d, d * c]; const g = gcd(n, d); n /= g; d /= g; } return o; }; console.log(eg(2, 3), eg(6, 14), eg(12, 13), eg(1, 7));
const far = (n) => { let [a, b, c, d] = [0, 1, 1, n]; const o = [`${a}/${b}`]; while (c <= n) { const k = Math.floor((n + b) / d); [a, b, c, d] = [c, d, k * c - a, k * d - b]; o.push(`${a}/${b}`); } return o; }; console.log(far(5), far(10).length);
const repeating = (n, d) => { const seen = new Map(); let r = n % d, o = ""; while (r && !seen.has(r)) { seen.set(r, o.length); o += Math.floor((r * 10) / d); r = (r * 10) % d; } return r ? `${o.slice(0, seen.get(r))}(${o.slice(seen.get(r))})` : o; }; console.log(repeating(1, 3), repeating(1, 7), repeating(1, 6), repeating(1, 8), repeating(22, 7));
