// Building classes at run time.
const make = (name, fields) => ({ [name]: class { constructor(...v) { fields.forEach((f, i) => { this[f] = v[i]; }); } toString() { return `${name}(${fields.map((f) => this[f])})`; } } })[name];
const P = make("Pt", ["x", "y"]); console.log(P.name, new P(1, 2), `${new P(1, 2)}`, P.length);
const addM = (C, m) => { Object.entries(m).forEach(([k, f]) => { C.prototype[k] = f; }); return C; }; addM(P, { sum() { return this.x + this.y; } }); console.log(new P(3, 4).sum(), Object.keys(P.prototype), Object.getOwnPropertyNames(P.prototype));
const Enum = (...n) => Object.freeze(Object.fromEntries(n.flatMap((v, i) => [[v, i], [i, v]]))); const E = Enum("A", "B"); console.log(E, E.A, E[1]);
const Rec = (...f) => class { constructor(o) { for (const k of f) { if (!(k in o)) throw new TypeError("missing " + k); Object.defineProperty(this, k, { value: o[k], enumerable: true }); } } with(c) { return new this.constructor({ ...this, ...c }); } }; const R = Rec("a", "b"), r = new R({ a: 1, b: 2 }); console.log(r, r.with({ b: 3 }), r.with({}) !== r); try { new R({}); } catch (e) { console.log(e.message); }
const nm = class {}; Object.defineProperty(nm, "name", { value: "Renamed" }); console.log(nm.name, nm, new nm());
