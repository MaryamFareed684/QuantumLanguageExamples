// Interfaces by convention and instanceof with Symbol.hasInstance.
class Duck { speak() { return "Quack"; } }
class Robot { speak() { return "Beep"; } }
for (const t of [new Duck(), new Robot(), {}, { speak: () => "obj" }]) console.log(typeof t.speak === "function" ? t.speak() : "silent", t.constructor.name);
class Even { static [Symbol.hasInstance](n) { return n % 2 === 0; } }
console.log(2 instanceof Even, 3 instanceof Even);
const Walks = (o) => "walk" in o;
console.log(Walks({ walk: 1 }), Walks({}));
console.log([] instanceof Array, [] instanceof Object, Object.create(null) instanceof Object, 1 instanceof Number, new Number(1) instanceof Number);
try { ({}) instanceof 5; } catch (e) { console.log(e.name + ": " + e.message); }
