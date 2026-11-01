// Sorting instances with compare methods.
class Version {
  constructor(s) { this.p = s.split(".").map(Number); }
  cmp(o) { for (let i = 0; i < 3; i++) { const d = (this.p[i] ?? 0) - (o.p[i] ?? 0); if (d) return d; } return 0; }
  toString() { return this.p.join("."); }
  static compare(a, b) { return a.cmp(b); }
}
const vs = ["1.10.0", "1.2.9", "1.2", "2.0.0", "0.9.9"].map((s) => new Version(s));
console.log(vs.sort(Version.compare).map(String), `${vs.at(-1)}`, new Version("1.0").cmp(new Version("1.0.0")));
