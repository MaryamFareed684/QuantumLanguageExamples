// Modular exponentiation, BigInt powers and Fermat's test.
const powm = (b, e, m) => { let r = 1n; b = BigInt(b) % BigInt(m); e = BigInt(e); m = BigInt(m); while (e) { if (e & 1n) r = (r * b) % m; b = (b * b) % m; e >>= 1n; } return r; };
console.log(powm(2, 10, 1000), powm(3, 200, 13), powm(2, 1000, 1000000007), powm(7, 2 ** 40, 1e9 + 7));
const fermat = (n) => [2, 3, 5, 7].every((a) => a % n === 0 || powm(a, n - 1, n) === 1n);
console.log([97, 561, 1105, 1729, 104729].map(fermat));
const mr = (n) => { if (n < 2n) return false; for (const p of [2n, 3n, 5n, 7n, 11n, 13n]) if (n % p === 0n) return n === p; let d = n - 1n, s = 0; while (!(d & 1n)) { d >>= 1n; s++; } return [2n, 3n, 5n, 7n, 11n, 13n, 17n].every((a) => { let x = powm(a, d, n); if (x === 1n || x === n - 1n) return true; for (let i = 1; i < s; i++) { x = (x * x) % n; if (x === n - 1n) return true; } return false; }); };
console.log([561n, 1000000007n, 1000000011n, 2n ** 61n - 1n, 2n ** 61n + 1n].map(mr));
