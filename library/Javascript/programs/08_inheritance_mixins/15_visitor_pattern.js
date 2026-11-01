// Visitor pattern over an expression tree.
class Num { constructor(v) { this.v = v; } accept(x) { return x.num(this); } }
class Add { constructor(l, r) { this.l = l; this.r = r; } accept(x) { return x.add(this); } }
class Mul extends Add { accept(x) { return x.mul(this); } }
const evaluate = { num: (n) => n.v, add(n) { return n.l.accept(this) + n.r.accept(this); }, mul(n) { return n.l.accept(this) * n.r.accept(this); } };
const show = { num: (n) => String(n.v), add(n) { return `(${n.l.accept(this)} + ${n.r.accept(this)})`; }, mul(n) { return `${n.l.accept(this)} * ${n.r.accept(this)}`; } };
const e = new Add(new Num(2), new Mul(new Num(3), new Add(new Num(4), new Num(5))));
console.log(e.accept(show), "=", e.accept(evaluate));
console.log(e);
