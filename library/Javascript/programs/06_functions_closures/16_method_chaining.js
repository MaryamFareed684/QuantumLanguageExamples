// Fluent builders returning this.
class Query {
  constructor(t) { this.t = t; this.w = []; this.o = null; this.l = null; }
  where(c) { this.w.push(c); return this; }
  order(c) { this.o = c; return this; }
  limit(n) { this.l = n; return this; }
  toString() {
    return [`SELECT * FROM ${this.t}`, this.w.length && `WHERE ${this.w.join(" AND ")}`, this.o && `ORDER BY ${this.o}`, this.l && `LIMIT ${this.l}`].filter(Boolean).join(" ");
  }
}
console.log(String(new Query("users").where("a=1").where("b>2").order("c").limit(5)), `${new Query("t")}`);
console.log([5, 3, 8].slice().sort().reverse().map((x) => x + 1).join("-").split("-").length);
