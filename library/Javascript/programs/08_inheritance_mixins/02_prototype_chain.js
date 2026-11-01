// Walking prototype chains of various values.
const chain = (o) => { const out = []; for (let p = Object.getPrototypeOf(o); p; p = Object.getPrototypeOf(p)) out.push(p.constructor.name); return out; };
class A {} class B extends A {}
for (const v of [new B(), [], {}, () => 1, "s", 1, true, /x/, new Date(0), new Map(), new Error("e"), Symbol("s"), 1n]) console.log(typeof v, chain(v));
console.log(Object.getPrototypeOf(Object.create(null)), Function.prototype.__proto__ === Object.prototype, Object.__proto__ === Function.prototype);
