// A hash table with chaining and resizing.
class HT {
  #b = Array.from({ length: 4 }, () => []); #n = 0;
  #h(k, m) { let h = 0; for (const c of String(k)) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h % m; }
  set(k, v) { const b = this.#b[this.#h(k, this.#b.length)], e = b.find((x) => x[0] === k); if (e) e[1] = v; else { b.push([k, v]); if (++this.#n > this.#b.length * 2) this.#grow(); } return this; }
  get(k) { return this.#b[this.#h(k, this.#b.length)].find((x) => x[0] === k)?.[1]; }
  del(k) { const b = this.#b[this.#h(k, this.#b.length)], i = b.findIndex((x) => x[0] === k); if (i < 0) return false; b.splice(i, 1); this.#n--; return true; }
  #grow() { const o = this.#b.flat(); this.#b = Array.from({ length: this.#b.length * 2 }, () => []); for (const [k, v] of o) this.#b[this.#h(k, this.#b.length)].push([k, v]); }
  get stats() { return [this.#n, this.#b.length, Math.max(...this.#b.map((b) => b.length))]; }
}
const t = new HT(); for (let i = 0; i < 100; i++) t.set("key" + i, i * i);
console.log(t.get("key7"), t.get("nope"), t.del("key7"), t.del("key7"), t.get("key7"), t.stats, t.set("key8", "new").get("key8"));
