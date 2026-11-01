// lastIndex surprises, shared literals and flag interactions.
const r = /a/g; console.log(r.test("a"), r.test("a"), r.test("a"));
const f = () => /a/g; console.log(f() === f(), f().test("a"), f().lastIndex);
const check = (v) => { const g = /\d/g; return g.test(v); }; console.log(check("1"), check("1"));
const y = /a/y; console.log("ba".match(y), y.lastIndex, "ab".match(y)?.[0], y.lastIndex, "ab".replace(y, "x"), y.lastIndex, "ba".search(y), "a,a".split(/a/y));
const gy = /a/gy; console.log("aab".match(gy), "aba".replace(gy, "x"), "aaba".match(/a/g));
const c = /x/g; c.lastIndex = 10; console.log(c.exec("x"), c.lastIndex, "x".match(c), new RegExp(c).lastIndex, c.toString(), c.compile === undefined, Object.keys(c), Object.getOwnPropertyNames(c), Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get !== undefined);
console.log(RegExp.prototype.toString.call(/a/g), RegExp.escape === undefined ? "no escape" : "has escape", /a/ instanceof RegExp, RegExp.$1 !== undefined, /(q)/.test("q") && RegExp.$1, RegExp.lastMatch, RegExp["$&"]);
