// Property descriptors: flags, accessors and class helpers.
const o = {}; Object.defineProperties(o, { a: { value: 1, enumerable: true }, b: { get() { return 2; } }, c: { value: 3, writable: true, configurable: true } });
console.log(o, Object.getOwnPropertyDescriptors(o), Object.keys(o), o.b, Object.getOwnPropertyNames(o));
try { Object.defineProperty(o, "a", { value: 9 }); } catch (e) { console.log(e.name, e.message); } try { Object.defineProperty({}, "x", { get() {}, value: 1 }); } catch (e) { console.log(e.message); }
const memoGet = (C, k) => { const d = Object.getOwnPropertyDescriptor(C.prototype, k); Object.defineProperty(C.prototype, k, { get() { const v = d.get.call(this); Object.defineProperty(this, k, { value: v }); return v; } }); };
class C { n = 0; get calc() { return ++this.n; } } memoGet(C, "calc"); const c = new C(); console.log(c.calc, c.calc, c.n);
const enumOff = (o, ...ks) => { ks.forEach((k) => Object.defineProperty(o, k, { enumerable: false })); return o; }; console.log(enumOff({ p: 1, q: 2 }, "p"), Object.entries(enumOff({ p: 1, q: 2 }, "p")));
console.log(Object.getOwnPropertyDescriptor(Array.prototype, "map"), Object.getOwnPropertyDescriptor([], "length"), Object.getOwnPropertyDescriptor("ab", 0), Object.getOwnPropertyDescriptor(Math, "PI"), Object.getOwnPropertyDescriptor(function () {}, "prototype"));
