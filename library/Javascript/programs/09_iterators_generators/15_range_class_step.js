// A Range class with step, reverse and contains.
class Range {
  constructor(a, b, s = 1) { Object.assign(this, { a, b, s }); }
  *[Symbol.iterator]() { for (let v = this.a; this.s > 0 ? v < this.b : v > this.b; v += this.s) yield v; }
  get length() { return Math.max(0, Math.ceil((this.b - this.a) / this.s)); }
  includes(v) { return (this.s > 0 ? v >= this.a && v < this.b : v <= this.a && v > this.b) && (v - this.a) % this.s === 0; }
  reversed() { return new Range(this.a + (this.length - 1) * this.s, this.a - this.s, -this.s); }
}
const r = new Range(0, 10, 3);
console.log([...r], r.length, r.includes(6), r.includes(7), [...r.reversed()], [...new Range(5, 0, -2)], [...new Range(3, 3)], r);
