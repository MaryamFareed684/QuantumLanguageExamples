// How console.log prints long, nested and mixed arrays.
console.log(Array.from({ length: 7 }, (_, i) => i));
console.log(Array.from({ length: 30 }, (_, i) => i * 3));
console.log(Array.from({ length: 120 }, (_, i) => i));
console.log(Array.from({ length: 12 }, (_, i) => "item" + i));
console.log(["a long string value that goes on", "another quite long string value here", "and a third one to wrap the line"]);
console.log([[1, [2, [3, [4, [5]]]]], { a: { b: { c: { d: 1 } } } }]);
console.log([1.5, -2, "s", null, undefined, true, [], {}, () => 1]);
console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [{ a: 1 }, { b: 2 }]);
console.log(Array.from({ length: 8 }, (_, i) => ({ id: i, name: "n" + i })));
