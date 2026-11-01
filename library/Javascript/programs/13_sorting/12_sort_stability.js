// Verifying stability of Array.prototype.sort.
const a = Array.from({ length: 1000 }, (_, i) => ({ k: i % 7, i }));
const s = [...a].sort((x, y) => x.k - y.k);
console.log(s.every((v, i) => !i || s[i - 1].k < v.k || s[i - 1].i < v.i), s.slice(0, 3), s.at(-1));
console.log(["b", "A", "a", "B"].sort((x, y) => x.toLowerCase().localeCompare(y.toLowerCase())));
console.log([..."stability"].map((c, i) => [c, i]).sort((x, y) => (x[0] < y[0] ? -1 : x[0] > y[0] ? 1 : 0)).map((p) => p.join("")).join(" "));
