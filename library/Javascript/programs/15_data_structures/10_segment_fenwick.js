// A segment tree and a Fenwick tree for range sums.
class Seg { constructor(a) { this.n = a.length; this.t = [...Array(this.n).fill(0), ...a]; for (let i = this.n - 1; i > 0; i--) this.t[i] = this.t[2 * i] + this.t[2 * i + 1]; } set(i, v) { i += this.n; this.t[i] = v; for (i >>= 1; i; i >>= 1) this.t[i] = this.t[2 * i] + this.t[2 * i + 1]; } sum(l, r) { let s = 0; for (l += this.n, r += this.n; l < r; l >>= 1, r >>= 1) { if (l & 1) s += this.t[l++]; if (r & 1) s += this.t[--r]; } return s; } }
const s = new Seg([1, 3, 5, 7, 9, 11]); console.log(s.sum(1, 4), s.sum(0, 6)); s.set(2, 10); console.log(s.sum(1, 4));
class BIT { constructor(n) { this.b = new Array(n + 1).fill(0); } add(i, v) { for (i++; i < this.b.length; i += i & -i) this.b[i] += v; } pre(i) { let s = 0; for (i++; i; i -= i & -i) s += this.b[i]; return s; } }
const b = new BIT(6); [1, 3, 5, 7, 9, 11].forEach((v, i) => b.add(i, v)); console.log(b.pre(3), b.pre(5) - b.pre(1));
