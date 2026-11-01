// How console.log prints objects: nesting, wide objects, class names.
console.log({ a: 1, "b-c": 2, 3: 4, "valid_id": 5, "with space": 6 });
console.log({ l1: { l2: { l3: { l4: { l5: 1 } } } } });
console.log({ long1: "a fairly long string value", long2: "another fairly long string value", long3: "and the third value" });
console.log({ f() {}, g: function () {}, h: () => {}, i: function named() {}, k: class {}, l: class Foo {} });
console.log({ get g() { return 1; }, set s(v) {}, get both() { return 1; }, set both(v) {} });
class Pt { constructor() { this.x = 1; } } console.log(new Pt(), [new Pt()], { p: new Pt() }, Object.create(null), Object.create({ a: 1 }));
console.log(new (class extends Pt {})(), new (class {})(), new Map([[{ a: 1 }, [1]]]), new Set(["s", { b: 2 }]));
const cyc = { name: "c" }; cyc.self = cyc; cyc.list = [cyc]; console.log(cyc);
console.log({ s: Symbol("x"), [Symbol("k")]: 1, n: null, u: undefined, d: new Date(86400000), r: /a/gi, e: [], o: {} });
console.log(Array.from({ length: 30 }, (_, i) => [i, i]).reduce((o, [k, v]) => ((o["key" + k] = v), o), {}));
