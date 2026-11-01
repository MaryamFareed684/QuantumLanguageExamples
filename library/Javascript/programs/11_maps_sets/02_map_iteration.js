// Insertion order, iteration during mutation, conversions.
const m = new Map([["b", 2], ["a", 1]]);
m.set("c", 3); m.set("b", 20);
console.log([...m], [...m.keys()], [...m.values()], [...m.entries()][0]);
m.forEach((v, k, self) => console.log(k, v, self === m));
for (const [k, v] of m) { if (k === "b") m.delete("a"); console.log(k, v); }
console.log(Object.fromEntries(m), JSON.stringify([...m]), JSON.stringify(m), new Map([...m].sort()), new Map([...m].map(([k, v]) => [k, v * 2])));
const live = new Map([[1, 1]]); let n = 0; for (const [k] of live) if (k < 3) { live.set(k + 1, 1); n++; } console.log(n, live.size);
