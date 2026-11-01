// How Map and Set print with nesting and length.
console.log(new Map([["a", { x: 1, y: [1, 2] }], [{ k: 1 }, new Set([1])], [[1], new Map([[1, 2]])]]));
console.log(new Set([new Set([new Set([new Set([1])])])]), new Map([[1, new Map([[2, new Map([[3, new Map([[4, 5]])]])]])]]));
console.log(new Set(Array.from({ length: 120 }, (_, i) => i)));
console.log(new Map(Array.from({ length: 5 }, (_, i) => ["key number " + i, "value of key number " + i])));
console.log({ m: new Map(), s: new Set(), a: [new Map([[1, 1]])] }, [new Set(), new Set([1])]);
class M2 extends Map {} class S2 extends Set {} console.log(new M2([[1, 2]]), new S2([1]), new M2(), Object.assign(new Map(), { extra: 1 }));
