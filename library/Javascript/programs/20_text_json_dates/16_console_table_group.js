// console.table, group, dir and count output.
console.table([{ a: 1, b: "x" }, { a: 2, c: true }]);
console.table([[1, 2], [3, 4]]); console.table({ r1: { v: 1 }, r2: { v: 2 } }); console.table([1, "s"]); console.table(5);
console.table([{ a: 1, b: 2 }], ["b"]);
console.group("Outer"); console.log("in outer"); console.group(); console.log({ nested: [1, 2] }); console.log("multi\nline"); console.groupEnd(); console.log("back"); console.groupEnd(); console.log("flat");
console.dir({ a: { b: { c: { d: 1 } } } }, { depth: 0 }); console.dir({ a: { b: { c: { d: 1 } } } }, { depth: null }); console.dir("s");
console.count(); console.count("x"); console.count(); console.countReset(); console.count();
console.assert(true, "not shown");
