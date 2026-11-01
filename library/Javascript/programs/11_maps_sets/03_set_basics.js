// Set: uniqueness, add, has, delete and iteration.
const s = new Set([3, 1, 3, "3", NaN, NaN, 0, -0, null, undefined]);
console.log(s, s.size, s.has("3"), s.has(4), s.has(NaN), s.add(9) === s, s.delete(9), s.delete(9));
console.log([...s], [...s.keys()].length, [...s.values()][0], [...s.entries()][0]);
s.forEach((v, k, self) => { if (v === 3) console.log(v, k, self === s); });
const o = {}; console.log(new Set([o, o, {}]).size, new Set("hello"), new Set([[1], [1]]).size, new Set().size);
s.clear(); console.log(s);
console.log([...new Set([5, 1, 5, 2])], Array.from(new Set("aab")).join(""));
