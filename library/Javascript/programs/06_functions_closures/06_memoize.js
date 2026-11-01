// Memoization by key, for pure functions.
function memo(f, key = JSON.stringify) {
  const cache = new Map();
  const m = (...a) => { const k = key(a); if (!cache.has(k)) cache.set(k, f(...a)); return cache.get(k); };
  m.size = () => cache.size;
  return m;
}
let calls = 0;
const slow = memo((a, b) => { calls++; return a + b; });
console.log(slow(1, 2), slow(1, 2), slow(2, 1), calls, slow.size());
const fib = memo((n) => (n < 2 ? n : fib(n - 1) + fib(n - 2)));
console.log(fib(70), fib.size());
