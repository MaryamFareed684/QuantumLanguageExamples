// A Counter like Python's, on top of Map.
class Counter extends Map {
  constructor(it = []) { super(); for (const x of it) this.inc(x); }
  inc(x, n = 1) { this.set(x, (this.get(x) ?? 0) + n); return this; }
  most(n = this.size) { return [...this].sort((a, b) => b[1] - a[1]).slice(0, n); }
  total() { return [...this.values()].reduce((a, b) => a + b, 0); }
  plus(o) { const r = new Counter(); for (const m of [this, o]) for (const [k, v] of m) r.inc(k, v); return r; }
}
const a = new Counter("abracadabra"), b = new Counter("aabz");
console.log(a.most(2), a.total(), a.plus(b).most(3), a.get("z"), a.size, a);
