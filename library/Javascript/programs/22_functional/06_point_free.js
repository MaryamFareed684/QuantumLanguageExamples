// Point-free helpers: prop, eq, sortBy, uniqBy, and pipelines.
const prop = (k) => (o) => o[k], eq = (v) => (x) => x === v, not = (f) => (x) => !f(x), add = (a) => (b) => a + b, pipe = (...f) => (x) => f.reduce((v, g) => g(v), x);
const map = (f) => (a) => a.map(f), filter = (f) => (a) => a.filter(f), sortBy = (f) => (a) => [...a].sort((x, y) => (f(x) < f(y) ? -1 : f(x) > f(y) ? 1 : 0)), uniqBy = (f) => (a) => [...new Map(a.map((x) => [f(x), x])).values()], sum = (a) => a.reduce((x, y) => x + y, 0), take = (n) => (a) => a.slice(0, n);
const u = [{ n: "c", a: 30, d: "x" }, { n: "a", a: 25, d: "y" }, { n: "b", a: 35, d: "x" }];
console.log(pipe(filter(pipe(prop("d"), eq("x"))), map(prop("a")), sum)(u), pipe(sortBy(prop("n")), map(prop("n")), take(2))(u), uniqBy(prop("d"))(u).length, pipe(map(prop("a")), map(add(1)))(u), filter(not(eq(1)))([1, 2]));
