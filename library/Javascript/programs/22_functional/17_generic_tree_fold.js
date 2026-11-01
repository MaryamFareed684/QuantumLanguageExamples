// Catamorphisms: folding trees and JSON values generically.
const fold = (t, f) => f(t.v, (t.k ?? []).map((c) => fold(c, f))); const T = { v: 1, k: [{ v: 2, k: [{ v: 4 }] }, { v: 3 }] };
console.log(fold(T, (v, r) => v + r.reduce((a, b) => a + b, 0)), fold(T, (_, r) => 1 + Math.max(0, ...r)), fold(T, (v, r) => [v, ...r.flat()]), fold(T, (v, r) => (r.length ? `(${v} ${r.join(" ")})` : String(v))), fold(T, (v, r) => ({ v: v * 2, k: r })).k[0].k[0]);
const jf = (x, h) => (Array.isArray(x) ? h.arr(x.map((y) => jf(y, h))) : x && typeof x === "object" ? h.obj(Object.entries(x).map(([k, v]) => [k, jf(v, h)])) : h.leaf(x));
const nodes = { arr: (a) => 1 + a.reduce((x, y) => x + y, 0), obj: (e) => 1 + e.reduce((x, [, y]) => x + y, 0), leaf: () => 1 }, str = { arr: (a) => `[${a}]`, obj: (e) => `{${e.map(([k, v]) => `${k}:${v}`)}}`, leaf: (x) => String(x) }; const J = { a: [1, { b: null }], c: "s" }; console.log(jf(J, nodes), jf(J, str));
