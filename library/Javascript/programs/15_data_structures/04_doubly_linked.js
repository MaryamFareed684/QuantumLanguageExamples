// A doubly linked list with remove and iteration both ways.
class DL {
  h = null; t = null; n = 0;
  push(v) { const x = { v, p: this.t, nx: null }; if (this.t) this.t.nx = x; else this.h = x; this.t = x; this.n++; return x; }
  remove(x) { if (x.p) x.p.nx = x.nx; else this.h = x.nx; if (x.nx) x.nx.p = x.p; else this.t = x.p; this.n--; return x.v; }
  *fwd() { for (let c = this.h; c; c = c.nx) yield c.v; }
  *back() { for (let c = this.t; c; c = c.p) yield c.v; }
}
const l = new DL(); l.push(1); const m = l.push(2); l.push(3);
console.log([...l.fwd()], [...l.back()], l.remove(m), [...l.fwd()], l.remove(l.h), l.remove(l.t), l.n, l.h, [...l.back()]);
