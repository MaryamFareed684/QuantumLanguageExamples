// A deep hierarchy with a sound table.
class Animal { static count = 0; constructor(n) { this.n = n; Animal.count++; } sound() { return "..."; } talk() { return `${this.n}: ${this.sound()}`; } }
class Mammal extends Animal { warm = true; }
class Bird extends Animal { sound() { return "tweet"; } }
class Cat extends Mammal { sound() { return "meow"; } }
class Lion extends Cat { sound() { return super.sound().toUpperCase(); } }
const zoo = [new Cat("Tom"), new Lion("Leo"), new Bird("Tweety"), new Mammal("Mo")];
zoo.forEach((a) => console.log(a.talk(), a.warm ?? "cold", a.constructor.name));
console.log(Animal.count, Lion.count, zoo);
const counts = zoo.reduce((m, a) => { let p = a; while ((p = Object.getPrototypeOf(p)) && p !== Object.prototype) m[p.constructor.name] = (m[p.constructor.name] || 0) + 1; return m; }, {});
console.log(counts);
