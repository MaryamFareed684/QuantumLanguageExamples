// Inspecting instances, methods and class chains at run time.
class A { a() {} static s() {} get g() { return 1; } }
class B extends A { b() {} }
const x = new B(); x.own = 1;
const methods = (o) => { const out = []; for (let p = Object.getPrototypeOf(o); p !== Object.prototype; p = Object.getPrototypeOf(p)) out.push(...Object.getOwnPropertyNames(p).filter((k) => k !== "constructor")); return out; };
console.log(methods(x), Object.keys(x), x.constructor.name, Object.getPrototypeOf(B).name, B.prototype instanceof A);
const chain = (c) => (c && c !== Function.prototype ? [c.name, ...chain(Object.getPrototypeOf(c))] : []);
console.log(chain(B), String(A).slice(0, 7), typeof x.b, x.b === B.prototype.b, A.prototype.isPrototypeOf(x), "a" in x);
