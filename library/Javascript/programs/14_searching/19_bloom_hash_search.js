// A Bloom filter and open-addressing hash table.
const h1 = (s) => { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
const h2 = (s) => { let h = 5381; for (const c of s) h = (Math.imul(h, 33) + c.charCodeAt(0)) >>> 0; return h; };
const bits = new Uint8Array(256); const idx = (s, i) => (h1(s) + i * h2(s)) % 256;
const add = (s) => { for (let i = 0; i < 3; i++) bits[idx(s, i)] = 1; }, maybe = (s) => [0, 1, 2].every((i) => bits[idx(s, i)]);
["apple", "pear"].forEach(add); console.log(h1("a"), h2("a"), maybe("apple"), maybe("pear"), maybe("kiwi"), bits.reduce((a, b) => a + b));
class H { size = 8; k = Array(8); v = Array(8); put(a, b) { let i = h1(a) % this.size; while (this.k[i] !== undefined && this.k[i] !== a) i = (i + 1) % this.size; this.k[i] = a; this.v[i] = b; } get(a) { let i = h1(a) % this.size; while (this.k[i] !== undefined) { if (this.k[i] === a) return this.v[i]; i = (i + 1) % this.size; } } }
const t = new H(); t.put("x", 1); t.put("y", 2); t.put("x", 3); console.log(t.get("x"), t.get("y"), t.get("z"));
