// Default string sort, numeric comparators and stability.
console.log([10, 9, 1, 100].sort(), [10, 9, 1, 100].sort((a, b) => a - b), [10, 9, 1, 100].sort((a, b) => b - a));
console.log([3, undefined, 1, null, NaN, "b", "a", [2], { x: 1 }].sort());
console.log([true, false, 1, 0, "1"].sort(), [-1, -2, 5, -10].sort());
const people = [{ n: "a", age: 30 }, { n: "b", age: 25 }, { n: "c", age: 30 }, { n: "d", age: 25 }];
console.log(people.sort((x, y) => x.age - y.age).map((p) => p.n).join(""));
console.log(people.sort((x, y) => y.age - x.age || y.n.localeCompare(x.n)).map((p) => p.n).join(""));
console.log([..."hello"].sort().join(""), ["b", "a"].sort(() => 0), [1, 2, 3].sort(() => -1));
