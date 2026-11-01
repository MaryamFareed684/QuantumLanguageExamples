// chunk, zip, sliding windows and rotate helpers.
const chunk = (a, n) => a.length ? [a.slice(0, n), ...chunk(a.slice(n), n)] : [];
const zip = (...ls) => ls[0].map((_, i) => ls.map((l) => l[i]));
const windows = (a, n) => a.slice(0, a.length - n + 1).map((_, i) => a.slice(i, i + n));
const rotate = (a, k) => [...a.slice(k), ...a.slice(0, k)];
console.log(chunk([1, 2, 3, 4, 5], 2), zip([1, 2], ["a", "b"], [true, false]), windows([1, 2, 3, 4], 2), rotate([1, 2, 3, 4], 1));
console.log(Object.fromEntries(zip(["x", "y"], [1, 2])));
const range = (a, b, s = 1) => Array.from({ length: Math.ceil((b - a) / s) }, (_, i) => a + i * s);
console.log(range(0, 5), range(1, 10, 3), range(0, 1, 0.25));
