// Mixins with Object.assign and subclass factories.
const Serial = { serialize() { return JSON.stringify(this); } };
const Eq = { equals(o) { return this.serialize() === o.serialize(); } };
class P { constructor(x) { this.x = x; } }
Object.assign(P.prototype, Serial, Eq);
console.log(new P(1).serialize(), new P(1).equals(new P(1)), new P(1).equals(new P(2)));
const Timestamped = (B) => class extends B { stamp = 123; };
const Named = (B) => class extends B { get label() { return `${this.constructor.name}#${this.stamp}`; } };
class Base { hello() { return "hello"; } }
class Thing extends Named(Timestamped(Base)) {}
const t = new Thing();
console.log(t.label, t.hello(), t, Object.getPrototypeOf(Thing).name === "", Object.getPrototypeOf(Thing.prototype) !== Base.prototype);
