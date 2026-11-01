// Recursive freeze, merge, path listing and comparisons.
const dfreeze = (o) => { Object.values(o).forEach((v) => typeof v === "object" && v && dfreeze(v)); return Object.freeze(o); };
const f = dfreeze({ a: { b: { c: 1 } }, l: [1, { m: 2 }] }); f.a.b.c = 2; f.l[1].m = 3; console.log(f.a.b.c, f.l[1].m, Object.isFrozen(f.l[1]));
const paths = (o, p = "") => Object.entries(o).flatMap(([k, v]) => (v && typeof v === "object" ? paths(v, p + k + ".") : [p + k]));
console.log(paths({ a: 1, b: { c: 2, d: { e: 3 } }, l: [1, { z: 1 }] }));
const size = (o) => (o && typeof o === "object" ? 1 + Object.values(o).reduce((s, v) => s + size(v), 0) : 1); console.log(size({ a: [1, 2, { b: 3 }] }));
