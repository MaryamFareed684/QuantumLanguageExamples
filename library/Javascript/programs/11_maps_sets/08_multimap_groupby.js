// Multimaps and Map.groupBy-like helpers.
class Multi extends Map { add(k, v) { (this.get(k) ?? this.set(k, []).get(k)).push(v); return this; } }
const m = new Multi().add("x", 1).add("x", 2).add("y", 3);
console.log(m, [...m.values()].flat(), m instanceof Map, m.constructor.name);
const groupBy = (it, f) => { const g = new Map(); for (const v of it) { const k = f(v); g.get(k)?.push(v) ?? g.set(k, [v]); } return g; };
console.log(groupBy(["ant", "bee", "cow", "ape"], (s) => s[0]), groupBy([1, 2, 3, 4], (x) => x % 2 === 0));
console.log(typeof Object.groupBy, typeof Map.groupBy);
