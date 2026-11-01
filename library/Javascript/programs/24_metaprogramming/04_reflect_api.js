// The Reflect namespace.
const o = { a: 1, get b() { return this.a + 1; } }; const alt = { a: 10 };
console.log(Reflect.get(o, "a"), Reflect.get(o, "b", alt), Reflect.set(o, "c", 3), o.c, Reflect.has(o, "a"), Reflect.deleteProperty(o, "c"), Reflect.ownKeys({ x: 1, [Symbol.for("s")]: 2 }), Reflect.getPrototypeOf([]) === Array.prototype);
const f = Object.freeze({ z: 1 }); console.log(Reflect.set(f, "z", 2), Reflect.defineProperty(f, "q", { value: 1 }), Reflect.isExtensible(f), Reflect.preventExtensions({}), Reflect.setPrototypeOf({}, null), Reflect.setPrototypeOf(f, {}), Reflect.getOwnPropertyDescriptor(f, "z"));
console.log(Reflect.apply(Math.max, null, [1, 2]), Reflect.construct(Date, [0]).getTime(), Reflect.construct(function () { return new.target; }, [], Map) === Map, Reflect.construct(class A { }, [], class B { }).constructor.name);
try { Reflect.get(1, "a"); } catch (e) { console.log(e.name, e.message); }
