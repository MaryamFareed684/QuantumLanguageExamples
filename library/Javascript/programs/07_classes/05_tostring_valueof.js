// toString, valueOf, toJSON, Symbol.toPrimitive and inspect.
class Money {
  constructor(c) { this.c = c; }
  valueOf() { return this.c; }
  toString() { return `$${(this.c / 100).toFixed(2)}`; }
  toJSON() { return { cents: this.c }; }
  [Symbol.for("nodejs.util.inspect.custom")]() { return `Money<${this.c}>`; }
}
const a = new Money(150), b = new Money(275);
console.log(a + b, a < b, `${a}`, String(b), a + "", JSON.stringify([a]), a, [b], { b });
console.log([b, a].sort((x, y) => x - y).map(String), Math.max(a, b), a == 150, a === 150);
class T { get [Symbol.toStringTag]() { return "Tagged"; } } console.log(String(new T()), new T());
