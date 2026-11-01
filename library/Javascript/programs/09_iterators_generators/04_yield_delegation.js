// yield* with arrays, generators and return values.
function* inner() { const r = yield "a"; yield "b" + r; return "inner done"; }
function* outer() { const v = yield* inner(); yield v; yield* [1, 2]; yield* "xy"; }
const o = outer();
console.log(o.next().value, o.next("!").value, [...o]);
function* tree(n) { if (!n) return; yield* tree(n.l); yield n.v; yield* tree(n.r); }
console.log([...tree({ v: 2, l: { v: 1 }, r: { v: 3, r: { v: 4 } } })]);
function* flat(a) { for (const x of a) Array.isArray(x) ? yield* flat(x) : yield x; }
console.log([...flat([1, [2, [3, [4]]], 5])]);
function* perms(a, n = a.length) { if (n <= 1) yield a.slice(); else for (let i = 0; i < n; i++) { yield* perms(a, n - 1); const j = n % 2 ? 0 : i; [a[n - 1], a[j]] = [a[j], a[n - 1]]; } }
console.log([...perms([1, 2, 3])]);
