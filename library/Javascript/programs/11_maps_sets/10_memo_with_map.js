// Object keys in memoization, and nested map keys.
const cache = new Map();
const key = (a, b) => `${a},${b}`;
const paths = (r, c) => { if (!r || !c) return 1; const k = key(r, c); if (!cache.has(k)) cache.set(k, paths(r - 1, c) + paths(r, c - 1)); return cache.get(k); };
console.log(paths(16, 16), cache.size);
class Trie extends Map { put(ks, v) { let n = this; for (const k of ks) { if (!n.has(k)) n.set(k, new Trie()); n = n.get(k); } n.val = v; } find(ks) { let n = this; for (const k of ks) { n = n.get(k); if (!n) return; } return n.val; } }
const t = new Trie(); const o = {}; t.put([1, "a", o], "hit"); console.log(t.find([1, "a", o]), t.find([1, "a", {}]), t.find([1]));
