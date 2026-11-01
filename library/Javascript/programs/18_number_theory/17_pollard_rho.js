// Integer factorization with Pollard's rho on BigInt.
const gcd = (a, b) => { while (b) [a, b] = [b, a % b]; return a < 0n ? -a : a; };
const rho = (n) => { if (n % 2n === 0n) return 2n; for (let c = 1n; ; c++) { const f = (x) => (x * x + c) % n; let x = 2n, y = 2n, d = 1n; while (d === 1n) { x = f(x); y = f(f(y)); d = gcd(x - y, n); } if (d !== n) return d; } };
const isP = (n) => { if (n < 2n) return false; for (let i = 2n; i * i <= n && i < 2000n; i++) if (n % i === 0n) return false; return true; };
const fac = (n) => (n === 1n ? [] : isP(n) ? [n] : ((d) => [...fac(d), ...fac(n / d)])(rho(n)));
for (const n of [8051n, 10403n, 1000036000099n, 600851475143n]) console.log(n, fac(n).sort((a, b) => (a < b ? -1 : 1)));
