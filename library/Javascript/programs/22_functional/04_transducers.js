// Transducers: composing transforms without intermediate arrays.
const map = (f) => (step) => (a, x) => step(a, f(x)), filter = (f) => (step) => (a, x) => (f(x) ? step(a, x) : a), take = (n) => (step) => { let i = 0; return (a, x) => (i++ < n ? step(a, x) : a); };
const comp = (...f) => (x) => f.reduceRight((v, g) => g(v), x), into = (xf, it) => { const s = xf((a, x) => (a.push(x), a)); let r = []; for (const v of it) r = s(r, v); return r; };
console.log(into(comp(filter((x) => x % 2), map((x) => x * x), take(3)), [1, 2, 3, 4, 5, 6, 7, 8, 9]), into(map(String), [1, 2]));
const sum = comp(map((x) => x + 1), filter((x) => x > 2))((a, x) => a + x); console.log([1, 2, 3, 4].reduce(sum, 0));
