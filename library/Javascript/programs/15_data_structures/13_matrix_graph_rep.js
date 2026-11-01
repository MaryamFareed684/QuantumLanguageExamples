// Sparse matrices stored as maps.
class Sparse { m = new Map(); set(r, c, v) { const k = r + ":" + c; if (v) this.m.set(k, v); else this.m.delete(k); return this; } get(r, c) { return this.m.get(r + ":" + c) ?? 0; } times(o) { const s = new Sparse(); for (const [k, v] of this.m) { const [r, c] = k.split(":").map(Number); for (const [q, w] of o.m) { const [a, b] = q.split(":").map(Number); if (a === c) s.set(r, b, s.get(r, b) + v * w); } } return s; } get nnz() { return this.m.size; } }
const a = new Sparse().set(0, 0, 2).set(1, 2, 3).set(2, 1, 4); const b = a.times(a);
console.log(b.m, b.nnz, a.get(1, 2), a.get(5, 5), a.set(1, 2, 0).nnz);
