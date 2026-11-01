// A reduce/some/every family over any iterable.
const reduce = (it, f, a) => { for (const v of it) a = f(a, v); return a; };
const some = (it, f) => { for (const v of it) if (f(v)) return true; return false; };
const count = (it) => reduce(it, (n) => n + 1, 0);
const groupBy = (it, f) => { const m = new Map(); for (const v of it) { const k = f(v); m.has(k) ? m.get(k).push(v) : m.set(k, [v]); } return m; };
const s = new Set([1, 2, 3, 4]);
console.log(reduce(s, (a, b) => a + b, 0), some(s, (x) => x > 3), count("hello"), groupBy(s, (x) => x % 2), groupBy("aAb", (c) => c.toLowerCase()));
console.log(Array.from(groupBy([1, 2, 3], (x) => x > 1).entries()));
