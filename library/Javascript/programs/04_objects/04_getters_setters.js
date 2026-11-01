// Accessors with get, set and defineProperty.
const temp = {
  c: 20,
  get f() { return this.c * 1.8 + 32; },
  set f(v) { this.c = (v - 32) / 1.8; },
};
console.log(temp.f, temp); temp.f = 212; console.log(temp.c, Object.keys(temp));
const o = {};
Object.defineProperty(o, "hidden", { value: 1, enumerable: false });
Object.defineProperty(o, "fixed", { value: 2, enumerable: true, writable: false });
Object.defineProperty(o, "calc", { get() { return 3; }, enumerable: true });
o.fixed = 99; o.calc = 99;
console.log(o, o.hidden, o.fixed, o.calc, Object.keys(o), JSON.stringify(o));
console.log(Object.getOwnPropertyDescriptor(o, "fixed"), Object.getOwnPropertyDescriptor(temp, "c"));
console.log(Object.getOwnPropertyNames(o), typeof Object.getOwnPropertyDescriptor(temp, "f").get);
