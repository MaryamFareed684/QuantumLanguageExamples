// Lazy streams from thunks: primes, Fibonacci, iterate.
const cons = (h, t) => ({ h, get t() { const v = t(); Object.defineProperty(this, "t", { value: v }); return v; } });
const iter = (f, x) => cons(x, () => iter(f, f(x))), take = (s, n) => (n && s ? [s.h, ...take(s.t, n - 1)] : []), filter = (s, f) => (f(s.h) ? cons(s.h, () => filter(s.t, f)) : filter(s.t, f)), map = (s, f) => cons(f(s.h), () => map(s.t, f)), zip = (a, b, f) => cons(f(a.h, b.h), () => zip(a.t, b.t, f));
const nat = iter((x) => x + 1, 0), sieve = (s) => cons(s.h, () => sieve(filter(s.t, (x) => x % s.h))), fibs = cons(0, () => cons(1, () => zip(fibs, fibs.t, (a, b) => a + b)));
console.log(take(map(nat, (x) => x * x), 6), take(sieve(iter((x) => x + 1, 2)), 12), take(fibs, 15), take(iter((x) => x * 2, 1), 11).at(-1), fibs.t === fibs.t);
