// Decorating methods by wrapping prototypes.
const logged = (C, m, log) => { const o = C.prototype[m]; C.prototype[m] = function (...a) { const r = o.apply(this, a); log.push(`${m}(${a})=${r}`); return r; }; };
class Calc { add(a, b) { return a + b; } neg(a) { return -a; } }
const log = [];
logged(Calc, "add", log); logged(Calc, "neg", log);
const c = new Calc(); c.add(1, 2); c.neg(5);
console.log(log, Calc.prototype.add.name, Calc.prototype.add.length);
const readonly = (o, k) => Object.defineProperty(o, k, { writable: false });
const r = readonly({ a: 1 }, "a"); r.a = 2; console.log(r.a);
