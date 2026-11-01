// A vector class with operators as methods.
class Vec {
  constructor(...c) { this.c = c; }
  plus(o) { return new Vec(...this.c.map((v, i) => v + o.c[i])); }
  scale(k) { return new Vec(...this.c.map((v) => v * k)); }
  dot(o) { return this.c.reduce((s, v, i) => s + v * o.c[i], 0); }
  get norm() { return Math.sqrt(this.dot(this)); }
  equals(o) { return this.c.length === o.c.length && this.c.every((v, i) => v === o.c[i]); }
  toString() { return `<${this.c.join(", ")}>`; }
  static zero(n) { return new Vec(...Array(n).fill(0)); }
}
const a = new Vec(1, 2, 3), b = new Vec(4, 5, 6);
console.log(`${a.plus(b)}`, `${a.scale(2)}`, a.dot(b), a.norm, a.equals(new Vec(1, 2, 3)), `${Vec.zero(2)}`, a);
