// Monoids, functors and folding with them.
const Sum = { e: 0, op: (a, b) => a + b }, Prod = { e: 1, op: (a, b) => a * b }, All = { e: true, op: (a, b) => a && b }, Str = { e: "", op: (a, b) => a + b }, Lst = { e: [], op: (a, b) => [...a, ...b] }, Max = { e: -Infinity, op: Math.max }, Mrg = { e: {}, op: (a, b) => ({ ...a, ...b }) }, Fn = (m) => ({ e: () => m.e, op: (f, g) => (x) => m.op(f(x), g(x)) });
const fold = (m, a) => a.reduce(m.op, m.e), foldMap = (m, f, a) => fold(m, a.map(f));
console.log(fold(Sum, [1, 2, 3]), fold(Prod, [1, 2, 3, 4]), fold(All, [true, false]), fold(Str, ["a", "b"]), fold(Lst, [[1], [2, 3]]), fold(Max, [1, 9, 3]), fold(Mrg, [{ a: 1 }, { b: 2 }, { a: 3 }]), foldMap(Sum, (s) => s.length, ["ab", "c"]), fold(Fn(Str), [(x) => x + "!", (x) => x.toUpperCase()])("hi"));
const zipW = (f, a, b) => a.map((x, i) => f(x, b[i])); console.log(zipW((x, y) => x * y, [1, 2], [3, 4]), [[1, 2], [3]].map((a) => a.map((x) => x + 1)));
