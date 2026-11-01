// Stack and Queue classes with iterators.
class Stack {
  #a = [];
  push(...x) { this.#a.push(...x); return this; }
  pop() { if (!this.#a.length) throw new Error("empty"); return this.#a.pop(); }
  get size() { return this.#a.length; }
  *[Symbol.iterator]() { for (let i = this.#a.length - 1; i >= 0; i--) yield this.#a[i]; }
}
class Queue {
  #h = 0; #a = [];
  put(x) { this.#a.push(x); return this; }
  take() { return this.#a[this.#h++]; }
  get size() { return this.#a.length - this.#h; }
}
const s = new Stack().push(1, 2, 3);
console.log([...s], s.pop(), s.size, s);
const q = new Queue().put("a").put("b");
console.log(q.take(), q.size, q.take(), q.take());
try { new Stack().pop(); } catch (e) { console.log(e.message); }
