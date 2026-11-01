// Object.is, Object.entries order, Object.create with descriptors.
const proto = { hello() { return "hi " + this.n; } };
const o = Object.create(proto, { n: { value: "x", enumerable: true }, secret: { value: 1 } });
console.log(o, o.hello(), o.secret, Object.keys(o), Object.getOwnPropertyNames(o));
console.log(Object.getOwnPropertyDescriptors({ a: 1, get b() { return 2; } }));
console.log(Object.entries({ x: [1], y: { z: 2 } }), Object(1), Object("s"), Object(null), typeof Object(true));
console.log(Object.prototype.toString.call(null), Object.prototype.toString.call(1), Object.prototype.toString.call(/x/), Object.prototype.toString.call(new Date(0)));
console.log(({}).toString(), ({}).valueOf() !== undefined, ({ valueOf() { return 7; } }) + 1, ({ toString() { return "s"; } }) + 1, `${{ toString() { return "t"; } }}`);
console.log(Number({ valueOf: () => 3 }), String({ toString: () => "z" }), ({ [Symbol.toPrimitive]: (h) => h })+"", +{ [Symbol.toPrimitive]: (h) => (h === "number" ? 1 : 0) });
