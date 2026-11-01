// Euclid, extended Euclid, LCM and coprimes.
const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a)), lcm = (a, b) => (a / gcd(a, b)) * b;
const ext = (a, b) => { if (!b) return [a, 1, 0]; const [g, x, y] = ext(b, a % b); return [g, y, x - Math.floor(a / b) * y]; };
console.log(gcd(48, 18), gcd(17, 5), gcd(0, 5), gcd(-12, 18), lcm(4, 6), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(lcm), ext(240, 46));
const inv = (a, m) => { const [g, x] = ext(a, m); return g === 1 ? ((x % m) + m) % m : null; }; console.log(inv(3, 11), inv(2, 4), (3 * inv(3, 11)) % 11);
const phi = (n) => { let r = n; for (let p = 2; p * p <= n; p++) if (n % p === 0) { while (n % p === 0) n /= p; r -= r / p; } return n > 1 ? r - r / n : r; }; console.log([1, 9, 10, 36, 97].map(phi));
