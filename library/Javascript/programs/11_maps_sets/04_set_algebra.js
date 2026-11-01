// Union, intersection, difference and subsets.
const a = new Set([1, 2, 3, 4]), b = new Set([3, 4, 5]);
const union = new Set([...a, ...b]), inter = new Set([...a].filter((x) => b.has(x))), diff = new Set([...a].filter((x) => !b.has(x)));
const sym = new Set([...union].filter((x) => !inter.has(x)));
const subset = (x, y) => [...x].every((v) => y.has(v));
console.log(union, inter, diff, sym, subset(new Set([1]), a), subset(a, b), subset(new Set(), b));
const eq = (x, y) => x.size === y.size && subset(x, y);
console.log(eq(new Set([1, 2]), new Set([2, 1])), eq(a, b));
