// Which method runs: overrides, late binding, super chains.
class A { who() { return "A"; } hello() { return "hello from " + this.who(); } static sm() { return "sA"; } }
class B extends A { who() { return "B"; } }
class C extends B { who() { return "C>" + super.who(); } static sm() { return "sC>" + super.sm(); } }
console.log(new A().hello(), new B().hello(), new C().hello(), C.sm(), B.sm());
A.prototype.added = function () { return "added " + this.who(); };
console.log(new C().added(), Object.getOwnPropertyNames(C.prototype));
B.prototype.who = function () { return "patched"; };
console.log(new C().who(), new B().hello());
const m = new C(); m.who = () => "own"; console.log(m.hello(), m);
