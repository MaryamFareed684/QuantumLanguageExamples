// A singly linked list class that is iterable.
class Node { constructor(v, n = null) { this.v = v; this.next = n; } }
class List {
  head = null; size = 0;
  add(v) { this.head = new Node(v, this.head); this.size++; return this; }
  reverse() { let p = null, c = this.head; while (c) [c.next, p, c] = [p, c, c.next]; this.head = p; return this; }
  *[Symbol.iterator]() { for (let c = this.head; c; c = c.next) yield c.v; }
  toString() { return [...this].join(" -> "); }
}
const l = new List().add(1).add(2).add(3);
console.log(`${l}`, `${l.reverse()}`, l.size, [...l].map((x) => x * 2), l);
