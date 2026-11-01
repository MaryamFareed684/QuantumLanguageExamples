// Shallow vs deep copies and shared references.
const a = [1, [2, 3], { k: 4 }];
const shallow = [...a], alias = a, deep = structuredClone(a), viaJson = JSON.parse(JSON.stringify(a));
a[0] = 9; a[1].push(99); a[2].k = 44;
console.log(a, alias, shallow, deep, viaJson);
console.log(a === alias, a === shallow, a[1] === shallow[1], a[1] === deep[1]);
console.log([1] == [1], [1] === [1], [1].toString() === "1", JSON.stringify([1]) === JSON.stringify([1]));
const grid = Array(2).fill([0, 0]); grid[0][0] = 1; console.log(grid);
const fixed = Array.from({ length: 2 }, () => [0, 0]); fixed[0][0] = 1; console.log(fixed);
