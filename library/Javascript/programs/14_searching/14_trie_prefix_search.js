// Prefix search and autocomplete with a trie.
class Trie {
  root = {};
  add(w) { let n = this.root; for (const c of w) n = n[c] ??= {}; n.$ = true; }
  has(w) { return !!this.node(w)?.$; }
  node(p) { let n = this.root; for (const c of p) { n = n[c]; if (!n) return null; } return n; }
  complete(p) { const o = [], walk = (n, s) => { if (n.$) o.push(s); for (const c of Object.keys(n).sort()) if (c !== "$") walk(n[c], s + c); }; const st = this.node(p); if (st) walk(st, p); return o; }
}
const t = new Trie(); "car card care cat dog do".split(" ").forEach((w) => t.add(w));
console.log(t.has("car"), t.has("ca"), t.complete("car"), t.complete("do"), t.complete("z"), t.complete("").length);
