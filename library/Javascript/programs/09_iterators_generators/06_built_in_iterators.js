// String, Array, Map and Set iterator objects.
const s = "ab"[Symbol.iterator](), a = [1][Symbol.iterator](), m = new Map([[1, 2]])[Symbol.iterator](), t = new Set([1]).values();
console.log(s.next(), a.next(), m.next(), t.next(), s, a, m, t);
console.log(Object.prototype.toString.call(s), Object.prototype.toString.call(a), Object.prototype.toString.call(m), s[Symbol.toStringTag]);
const e = new Map([["k", "v"]]).entries(); console.log([...e], [...e]);
console.log(typeof Array.prototype[Symbol.iterator], Array.prototype[Symbol.iterator] === Array.prototype.values, Map.prototype[Symbol.iterator] === Map.prototype.entries, Set.prototype.keys === Set.prototype.values);
const live = [1, 2]; const li = live.values(); li.next(); live.push(3); console.log([...li]);
