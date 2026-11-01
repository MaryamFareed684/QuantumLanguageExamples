// The observer pattern with a Subject class.
class Subject {
  #subs = new Set();
  subscribe(f) { this.#subs.add(f); return () => this.#subs.delete(f); }
  next(v) { for (const f of this.#subs) f(v); return this.#subs.size; }
}
const s = new Subject(), got = [];
const un = s.subscribe((v) => got.push("a" + v));
s.subscribe((v) => got.push("b" + v));
console.log(s.next(1), un(), un(), s.next(2), got);
