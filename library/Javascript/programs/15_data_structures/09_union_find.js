// Disjoint sets with path compression and union by size.
class DSU { constructor(n) { this.p = Array.from({ length: n }, (_, i) => i); this.s = Array(n).fill(1); this.c = n; } find(x) { while (this.p[x] !== x) { this.p[x] = this.p[this.p[x]]; x = this.p[x]; } return x; } union(a, b) { a = this.find(a); b = this.find(b); if (a === b) return false; if (this.s[a] < this.s[b]) [a, b] = [b, a]; this.p[b] = a; this.s[a] += this.s[b]; this.c--; return true; } }
const d = new DSU(8); console.log(d.union(0, 1), d.union(2, 3), d.union(1, 3), d.union(0, 2), d.c, d.find(3) === d.find(0), d.find(7) === d.find(0));
const accounts = [["a", "b"], ["c"], ["b", "d"], ["e", "c"]]; const id = new Map(); const u = new DSU(10); accounts.forEach((g) => g.forEach((m) => { if (!id.has(m)) id.set(m, id.size); u.union(id.get(g[0]), id.get(m)); }));
const gs = new Map(); for (const [m, i] of id) (gs.get(u.find(i)) ?? gs.set(u.find(i), []).get(u.find(i))).push(m); console.log([...gs.values()]);
