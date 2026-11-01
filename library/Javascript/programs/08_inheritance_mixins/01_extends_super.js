// extends, super calls and method overriding.
class Animal {
  constructor(n) { this.n = n; }
  speak() { return `${this.n} makes a sound`; }
  get kind() { return "animal"; }
  static create(n) { return new this(n); }
}
class Dog extends Animal {
  constructor(n, b) { super(n); this.b = b; }
  speak() { return super.speak() + " - woof"; }
  get kind() { return "dog/" + super.kind; }
  static create(n) { const d = super.create(n); d.b = "mutt"; return d; }
}
const d = new Dog("Rex", "lab");
console.log(d, d.speak(), d.kind, Dog.create("Tob"), d instanceof Animal, Object.getPrototypeOf(Dog) === Animal);
class NoSuper extends Animal { constructor() { } }
try { new NoSuper(); } catch (e) { console.log(e.name + ": " + e.message); }
