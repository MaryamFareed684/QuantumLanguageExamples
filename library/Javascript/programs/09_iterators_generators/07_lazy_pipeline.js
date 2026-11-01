// A chainable lazy sequence class on generators.
class Seq {
  constructor(g) { this.g = g; }
  static of(it) { return new Seq(function* () { yield* it; }); }
  static count(n = 0) { return new Seq(function* () { for (;;) yield n++; }); }
  map(f) { const g = this.g; return new Seq(function* () { for (const v of g()) yield f(v); }); }
  filter(f) { const g = this.g; return new Seq(function* () { for (const v of g()) if (f(v)) yield v; }); }
  take(k) { const g = this.g; return new Seq(function* () { let n = 0; if (k > 0) for (const v of g()) { yield v; if (++n >= k) return; } }); }
  drop(k) { const g = this.g; return new Seq(function* () { let n = 0; for (const v of g()) if (n++ >= k) yield v; }); }
  [Symbol.iterator]() { return this.g(); }
  toArray() { return [...this]; }
  reduce(f, i) { let a = i; for (const v of this) a = f(a, v); return a; }
}
console.log(Seq.count().filter((x) => x % 2).map((x) => x * 10).drop(1).take(4).toArray());
console.log(Seq.of([1, 2, 3]).map((x) => x + 1).reduce((a, b) => a + b, 0), [...Seq.of("abc").take(2)], Seq.count().take(0).toArray());
