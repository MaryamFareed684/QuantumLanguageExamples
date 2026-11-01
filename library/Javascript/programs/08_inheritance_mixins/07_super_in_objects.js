// super in object literals, setPrototypeOf and shadowing.
const base = { hi() { return "base hi " + this.n; } };
const child = { __proto__: base, n: "c", hi() { return super.hi() + "!"; } };
console.log(child.hi(), Object.getPrototypeOf(child) === base, child);
const other = { n: "o", hi: child.hi };
console.log(other.hi());
const d = Object.setPrototypeOf({ n: "d" }, child);
console.log(d.hi(), d, "hi" in d, d.hasOwnProperty("hi"));
const shadow = Object.create({ get x() { return "proto"; }, set x(v) { this._x = v; } });
shadow.x = 5; console.log(shadow, shadow.x);
const ro = Object.create(Object.freeze({ y: 1 })); ro.y = 2; console.log(ro.y, Object.keys(ro));
