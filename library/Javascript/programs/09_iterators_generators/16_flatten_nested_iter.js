// Depth-limited flatten and walking nested maps.
function* flat(x, d = Infinity) { for (const v of x) (Array.isArray(v) && d > 0) ? yield* flat(v, d - 1) : yield v; }
console.log([...flat([1, [2, [3, [4]]]], 1)], [...flat([1, [2, [3, [4]]]])], [...flat([])]);
function* walk(o, p = []) { for (const [k, v] of Object.entries(o)) { if (v && typeof v === "object") yield* walk(v, [...p, k]); else yield [[...p, k].join("."), v]; } }
console.log(Object.fromEntries(walk({ a: 1, b: { c: 2, d: { e: [3, 4] } } })));
