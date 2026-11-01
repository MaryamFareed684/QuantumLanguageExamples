// A skip list using a seeded coin flip.
let seed = 12345; const coin = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) >> 16) & 1;
class Skip { head = { v: -Infinity, next: Array(8).fill(null) }; lvl = 1;
  add(v) { const up = Array(8), x0 = this.head; let x = x0; for (let i = this.lvl - 1; i >= 0; i--) { while (x.next[i] && x.next[i].v < v) x = x.next[i]; up[i] = x; } let l = 1; while (l < 8 && coin()) l++; for (let i = this.lvl; i < l; i++) up[i] = this.head; this.lvl = Math.max(this.lvl, l); const n = { v, next: Array(l).fill(null) }; for (let i = 0; i < l; i++) { n.next[i] = up[i].next[i]; up[i].next[i] = n; } }
  has(v) { let x = this.head; for (let i = this.lvl - 1; i >= 0; i--) while (x.next[i] && x.next[i].v < v) x = x.next[i]; return x.next[0]?.v === v; }
  list() { const o = []; for (let x = this.head.next[0]; x; x = x.next[0]) o.push(x.v); return o; } }
const s = new Skip(); [5, 1, 9, 3, 7, 2, 8].forEach((v) => s.add(v)); console.log(s.list(), s.has(7), s.has(4), s.lvl);
