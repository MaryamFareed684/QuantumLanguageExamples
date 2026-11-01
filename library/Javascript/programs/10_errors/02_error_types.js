// The built-in error types, and what raises them.
const cases = [() => null.x, () => undefined.y(), () => (1).foo(), () => nope, () => { const a = 1; a = 2; }, () => new Array(-1), () => (1).toFixed(200), () => "x".repeat(-1), () => JSON.parse("{"), () => decodeURI("%"), () => eval("1 +"), () => BigInt("x"), () => Symbol() + 1, () => ({}).x.y, () => [].x.y, () => { class A { constructor() { this.x; } } class B extends A { constructor() { this.y; } } new B(); }, () => new (function () {}.bind())().x.y];
for (const c of cases) {
  try { c(); console.log("no error"); } catch (e) { console.log(`${e.name}: ${e.message}`); }
}
console.log([Error, TypeError, RangeError, SyntaxError, ReferenceError, EvalError, URIError].map((E) => [E.name, new E("m") instanceof Error, Object.getPrototypeOf(E).name]));
