// Iterating a binary tree with explicit stacks and generators.
class T { constructor(v, l, r) { this.v = v; this.l = l; this.r = r; }
  *inorder() { if (this.l) yield* this.l.inorder(); yield this.v; if (this.r) yield* this.r.inorder(); }
  *pre() { const s = [this]; while (s.length) { const n = s.pop(); yield n.v; if (n.r) s.push(n.r); if (n.l) s.push(n.l); } }
  *level() { let q = [this]; while (q.length) { const n = []; for (const x of q) { yield x.v; if (x.l) n.push(x.l); if (x.r) n.push(x.r); } q = n; } }
}
const t = new T(4, new T(2, new T(1), new T(3)), new T(6, new T(5)));
console.log([...t.inorder()], [...t.pre()], [...t.level()]);
for (const v of t.inorder()) { if (v > 2) break; console.log(v); }
