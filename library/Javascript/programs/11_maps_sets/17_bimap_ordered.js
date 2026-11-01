// A two-way map and a sorted map.
class BiMap { #f = new Map(); #r = new Map(); set(a, b) { this.#r.delete(this.#f.get(a)); this.#f.delete(this.#r.get(b)); this.#f.set(a, b); this.#r.set(b, a); return this; } get(a) { return this.#f.get(a); } rev(b) { return this.#r.get(b); } get size() { return this.#f.size; } }
const b = new BiMap().set("a", 1).set("b", 2).set("c", 1);
console.log(b.get("a"), b.get("c"), b.rev(1), b.rev(2), b.size);
class Sorted { #k = []; #m = new Map(); set(k, v) { if (!this.#m.has(k)) { let i = this.#k.findIndex((x) => x > k); i < 0 ? this.#k.push(k) : this.#k.splice(i, 0, k); } this.#m.set(k, v); return this; } *[Symbol.iterator]() { for (const k of this.#k) yield [k, this.#m.get(k)]; } }
console.log([...new Sorted().set(5, "e").set(1, "a").set(3, "c").set(1, "A")]);
