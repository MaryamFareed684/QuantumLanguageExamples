// Exact fractions with reduction and arithmetic.
const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
class Frac {
  constructor(n, d = 1) { const g = gcd(n, d) * Math.sign(d); this.n = n / g; this.d = d / g; }
  add(o) { return new Frac(this.n * o.d + o.n * this.d, this.d * o.d); }
  mul(o) { return new Frac(this.n * o.n, this.d * o.d); }
  toString() { return this.d === 1 ? `${this.n}` : `${this.n}/${this.d}`; }
  valueOf() { return this.n / this.d; }
}
let h = new Frac(0);
for (let i = 1; i <= 10; i++) h = h.add(new Frac(1, i));
console.log(`${h}`, +h, `${new Frac(6, -8)}`, `${new Frac(1, 2).mul(new Frac(2, 3))}`, new Frac(1, 2) < new Frac(2, 3), new Frac(3, 4));
