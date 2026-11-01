// Composition: objects built by delegating to parts.
const canFly = (s) => ({ fly: () => `${s.name} flies at ${s.speed}` });
const canSwim = (s) => ({ swim: () => `${s.name} swims` });
const duck = (name) => { const s = { name, speed: 10 }; return { ...canFly(s), ...canSwim(s), rename(n) { s.name = n; } }; };
const d = duck("Don");
console.log(d.fly(), d.swim(), Object.keys(d));
d.rename("Dan"); console.log(d.swim(), d);
class Engine { start() { return "vroom"; } }
class Car { #e = new Engine(); start() { return "car " + this.#e.start(); } }
console.log(new Car().start(), new Car());
