// Unique values, unions, intersections and differences on arrays.
const a = [1, 2, 2, 3, 4], b = [3, 4, 4, 5];
const uniq = (x) => [...new Set(x)];
console.log(uniq(a), uniq([...a, ...b]), a.filter((v) => b.includes(v)), a.filter((v) => !b.includes(v)));
console.log(uniq(a).filter((v) => !b.includes(v)).concat(uniq(b).filter((v) => !a.includes(v))));
const dupes = a.filter((v, i) => a.indexOf(v) !== i);
console.log(dupes, a.lastIndexOf(2), ["a", "A", "b"].filter((v, i, s) => s.findIndex((w) => w.toLowerCase() === v.toLowerCase()) === i));
