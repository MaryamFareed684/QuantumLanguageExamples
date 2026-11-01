// A binary search tree: insert, find, delete, in-order, height.
class BST {
  root = null;
  insert(v) { const go = (n) => { if (!n) return { v, l: null, r: null }; if (v < n.v) n.l = go(n.l); else if (v > n.v) n.r = go(n.r); return n; }; this.root = go(this.root); return this; }
  has(v) { let n = this.root; while (n) { if (v === n.v) return true; n = v < n.v ? n.l : n.r; } return false; }
  delete(v) { const min = (n) => (n.l ? min(n.l) : n); const go = (n, v) => { if (!n) return n; if (v < n.v) n.l = go(n.l, v); else if (v > n.v) n.r = go(n.r, v); else { if (!n.l) return n.r; if (!n.r) return n.l; const m = min(n.r); n.v = m.v; n.r = go(n.r, m.v); } return n; }; this.root = go(this.root, v); return this; }
  *[Symbol.iterator]() { const w = function* (n) { if (n) { yield* w(n.l); yield n.v; yield* w(n.r); } }; yield* w(this.root); }
  get height() { const h = (n) => (n ? 1 + Math.max(h(n.l), h(n.r)) : 0); return h(this.root); }
}
const t = new BST(); [50, 30, 70, 20, 40, 60, 80, 30].forEach((x) => t.insert(x));
console.log([...t], t.has(60), t.has(65), t.height, [...t.delete(30)], [...t.delete(50)], t.root.v, [...t.delete(99)].length, t);
