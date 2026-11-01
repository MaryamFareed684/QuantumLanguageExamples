// map, filter, flat, reverse and groupBy written with reduce.
const map = (a, f) => a.reduce((o, x) => [...o, f(x)], []), filter = (a, f) => a.reduce((o, x) => (f(x) ? [...o, x] : o), []), flat = (a) => a.reduce((o, x) => o.concat(x), []), rev = (a) => a.reduce((o, x) => [x, ...o], []);
const min = (a) => a.reduce((m, x) => (x < m ? x : m)), any = (a, f) => a.reduce((b, x) => b || f(x), false), count = (a) => a.reduce((m, x) => ({ ...m, [x]: (m[x] ?? 0) + 1 }), {}), comp = (...f) => f.reduce((g, h) => (x) => g(h(x)));
console.log(map([1, 2], (x) => x + 1), filter([1, 2, 3], (x) => x % 2), flat([[1], [2, [3]]]), rev([1, 2, 3]), min([3, 1, 2]), any([1, 2], (x) => x > 1), count("aab".split("")), comp((x) => x + 1, (x) => x * 2)(5));
