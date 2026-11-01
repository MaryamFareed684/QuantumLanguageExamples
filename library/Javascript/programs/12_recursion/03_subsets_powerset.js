// Subsets of a set and subset sums.
const subsets = ([h, ...t]) => { if (h === undefined) return [[]]; const r = subsets(t); return [...r, ...r.map((s) => [h, ...s])]; };
console.log(subsets([1, 2, 3]), subsets([]).length, subsets([1, 2, 3, 4, 5, 6]).length);
const sumTo = (a, t, i = 0, p = []) => t === 0 ? [p] : i >= a.length || t < 0 ? [] : [...sumTo(a, t - a[i], i + 1, [...p, a[i]]), ...sumTo(a, t, i + 1, p)];
console.log(sumTo([3, 34, 4, 12, 5, 2], 9));
