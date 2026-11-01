// Deep operations on nested structures.
const flat = (a) => a.reduce((o, x) => (Array.isArray(x) ? [...o, ...flat(x)] : [...o, x]), []);
const depth = (a) => (Array.isArray(a) ? 1 + Math.max(0, ...a.map(depth)) : 0);
const sum = (a) => (Array.isArray(a) ? a.reduce((s, x) => s + sum(x), 0) : a);
const mapDeep = (a, f) => (Array.isArray(a) ? a.map((x) => mapDeep(x, f)) : f(a));
const n = [1, [2, [3, [4, []]]], [[5]]];
console.log(flat(n), depth(n), sum([1, [2, [3]]]), JSON.stringify(mapDeep(n, (x) => x * 2)));
