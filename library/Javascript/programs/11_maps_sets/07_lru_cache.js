// An LRU cache using Map's insertion order.
class LRU {
  #m = new Map();
  constructor(cap) { this.cap = cap; }
  get(k) { if (!this.#m.has(k)) return undefined; const v = this.#m.get(k); this.#m.delete(k); this.#m.set(k, v); return v; }
  put(k, v) { this.#m.delete(k); this.#m.set(k, v); if (this.#m.size > this.cap) this.#m.delete(this.#m.keys().next().value); }
  keys() { return [...this.#m.keys()]; }
}
const c = new LRU(2);
c.put("a", 1); c.put("b", 2); c.get("a"); c.put("c", 3);
console.log(c.keys(), c.get("b"), c.get("a"), c.get("c"), c.keys());
