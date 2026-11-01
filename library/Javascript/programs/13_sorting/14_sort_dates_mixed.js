// Sorting dates, booleans and mixed values with explicit keys.
const ds = ["2024-03-01", "2023-12-25", "2024-01-15"].map((d) => new Date(d + "T00:00:00Z"));
console.log(ds.sort((a, b) => a - b).map((d) => d.toISOString().slice(0, 10)), Math.min(...ds) === ds[0].getTime());
console.log([true, false, true].sort((a, b) => a - b), [null, 1, undefined, 0].sort((a, b) => (a ?? 99) - (b ?? 99)), [[2, "b"], [1, "z"], [2, "a"]].sort(), [[10], [9]].sort());
