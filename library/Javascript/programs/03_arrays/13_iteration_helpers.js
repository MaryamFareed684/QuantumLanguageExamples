// entries, keys, values and forEach with this.
const a = ["x", "y"];
for (const [i, v] of a.entries()) console.log(i, v);
console.log([...a.keys()], [...a.values()], a.entries().next(), typeof a[Symbol.iterator]);
const it = a.values();
console.log(it.next(), it.next(), it.next());
[1, 2].forEach(function (n) { console.log(this.base + n); }, { base: 10 });
console.log([1, 2].map(String), ["1", "2", "3"].map(Number), ["1", "2", "3"].map(parseInt), [0, 1, ""].filter(Boolean));
console.log([1, 2, 3].forEach(() => 1), [1, 2].join === Array.prototype.join);
