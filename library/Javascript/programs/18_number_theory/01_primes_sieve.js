// Trial division, Eratosthenes and counting primes.
const isP = (n) => { if (n < 2) return false; for (let i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; };
console.log([...Array(30).keys()].filter(isP), isP(97), isP(7919), isP(1), isP(1000000007));
const sieve = (n) => { const s = new Array(n + 1).fill(true); s[0] = s[1] = false; for (let i = 2; i * i <= n; i++) if (s[i]) for (let j = i * i; j <= n; j += i) s[j] = false; return s.reduce((o, b, i) => (b ? [...o, i] : o), []); };
console.log(sieve(50), sieve(10000).length, sieve(10000).at(-1));
