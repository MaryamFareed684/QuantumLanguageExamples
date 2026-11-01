// Inherited toString, inspect names and class printing.
class A { toString() { return "A!"; } }
class B extends A {}
class C extends B { get [Symbol.toStringTag]() { return "CC"; } }
console.log(`${new B()}`, new B(), new C(), [new A()], { c: new C() }, String(new C()), Object.prototype.toString.call(new C()));
console.log(A, B, [A, B], { A }, class {}, new (class {})(), new (class extends A {})());
function F() {} console.log(new F(), F, Object.create(F.prototype), Object.create(new F()), Object.create(A.prototype));
const nul = Object.create(null); nul.a = 1; console.log(nul, Object.create(Object.create(null)));
