// Word frequencies using Map, with sorted output.
const text = "the cat and the dog and the bird saw the cat";
const freq = new Map();
for (const w of text.split(" ")) freq.set(w, (freq.get(w) ?? 0) + 1);
const sorted = [...freq].sort(([a, x], [b, y]) => y - x || (a < b ? -1 : 1));
console.log(sorted, sorted[0], new Map(sorted.slice(0, 2)));
for (const [w, n] of sorted) console.log(w.padEnd(6), "*".repeat(n));
