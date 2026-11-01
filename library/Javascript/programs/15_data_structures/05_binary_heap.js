// A binary min-heap and a priority queue.
class Heap {
  #a = []; constructor(c = (x, y) => x - y) { this.c = c; }
  push(v) { const a = this.#a; a.push(v); let i = a.length - 1; while (i) { const p = (i - 1) >> 1; if (this.c(a[i], a[p]) >= 0) break; [a[i], a[p]] = [a[p], a[i]]; i = p; } return this; }
  pop() { const a = this.#a; if (!a.length) return undefined; const t = a[0], l = a.pop(); if (a.length) { a[0] = l; let i = 0; for (;;) { let m = i; for (const k of [2 * i + 1, 2 * i + 2]) if (k < a.length && this.c(a[k], a[m]) < 0) m = k; if (m === i) break; [a[i], a[m]] = [a[m], a[i]]; i = m; } } return t; }
  get size() { return this.#a.length; }
}
const h = new Heap(); [5, 3, 8, 1, 9, 2].forEach((x) => h.push(x)); const o = []; while (h.size) o.push(h.pop()); console.log(o, h.pop());
const pq = new Heap((a, b) => b.p - a.p || a.t.localeCompare(b.t)); pq.push({ p: 1, t: "low" }).push({ p: 9, t: "z" }).push({ p: 9, t: "a" }); console.log(pq.pop(), pq.pop(), pq.size);
