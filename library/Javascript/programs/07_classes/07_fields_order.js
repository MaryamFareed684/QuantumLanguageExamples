// Field initializer order and this in initializers.
const log = [];
class A {
  a = log.push("field a");
  arrow = () => this.tag;
  tag = "A";
  constructor() { log.push("ctor A"); }
}
class B extends A {
  b = log.push("field b");
  tag = "B";
  constructor() { log.push("before super"); super(); log.push("ctor B"); }
}
const x = new B();
console.log(log, x.arrow(), x.arrow.call({ tag: "no" }), Object.keys(x));
const { arrow } = x; console.log(arrow());
class Bad extends A { constructor() { try { this.a; } catch (e) { console.log(e.name + ": " + e.message); } super(); } }
new Bad();
