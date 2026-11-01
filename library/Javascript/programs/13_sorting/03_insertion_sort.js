// Insertion sort, stable with a key function.
const isort = (x, key = (v) => v) => { const a = [...x]; for (let i = 1; i < a.length; i++) { const v = a[i]; let j = i - 1; while (j >= 0 && key(a[j]) > key(v)) { a[j + 1] = a[j]; j--; } a[j + 1] = v; } return a; };
console.log(isort([3, 1, 2]), isort(["bb", "a", "ccc", "d"], (s) => s.length), isort([{ k: 2, t: "a" }, { k: 1, t: "b" }, { k: 2, t: "c" }], (o) => o.k));
