// Combination sum, coin ways and partitions of a number.
const combos = (c, t, s = 0, p = []) => t === 0 ? [p] : c.slice(s).flatMap((x, i) => (x > t ? [] : combos(c, t - x, s + i, [...p, x])));
console.log(combos([2, 3, 5], 8), combos([2], 3));
const partitions = (n, m = n) => (n === 0 ? [[]] : Array.from({ length: Math.min(n, m) }, (_, i) => Math.min(n, m) - i).flatMap((k) => partitions(n - k, k).map((p) => [k, ...p])));
console.log(partitions(5).map((p) => p.join("+")), partitions(20).length);
