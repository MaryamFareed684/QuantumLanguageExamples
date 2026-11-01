// Infinite sequences with take, filter and map generators.
function* nat(n = 0) { while (true) yield n++; }
function* take(s, k) { if (k <= 0) return; for (const v of s) { yield v; if (--k <= 0) return; } }
function* filter(s, f) { for (const v of s) if (f(v)) yield v; }
function* map(s, f) { for (const v of s) yield f(v); }
console.log([...take(map(filter(nat(), (x) => x % 3 === 0), (x) => x * x), 6)]);
function* fib() { let [a, b] = [0, 1]; for (;;) { yield a; [a, b] = [b, a + b]; } }
console.log([...take(fib(), 15)]);
function* primes() { const seen = []; for (const n of nat(2)) if (seen.every((p) => n % p)) { seen.push(n); yield n; } }
console.log([...take(primes(), 15)]);
