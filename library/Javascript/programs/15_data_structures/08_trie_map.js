// A trie with counts, word removal and longest common prefix.
class T { c = new Map(); n = 0; end = 0; }
class Trie { root = new T(); add(w) { let x = this.root; for (const k of w) { if (!x.c.has(k)) x.c.set(k, new T()); x = x.c.get(k); x.n++; } x.end++; } count(p) { let x = this.root; for (const k of p) { x = x.c.get(k); if (!x) return 0; } return x.n; } remove(w) { let x = this.root; const path = []; for (const k of w) { path.push([x, k]); x = x.c.get(k); } x.end--; for (const [p, k] of path.reverse()) { const y = p.c.get(k); if (--y.n === 0) p.c.delete(k); } } lcp() { let x = this.root, o = ""; while (x.c.size === 1 && !x.end) { const [k, y] = [...x.c][0]; o += k; x = y; } return o; } }
const t = new Trie(); ["flower", "flow", "flight"].forEach((w) => t.add(w));
console.log(t.count("fl"), t.count("flo"), t.count("z"), t.lcp()); t.remove("flight"); console.log(t.count("fl"), t.count("fli"), t.lcp());
