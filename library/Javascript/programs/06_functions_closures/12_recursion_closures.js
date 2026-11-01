// Named function expressions and closures that recurse.
const fact = function self(n) { return n <= 1 ? 1 : n * self(n - 1); };
console.log(fact(10), typeof self);
const Y = (f) => ((x) => x(x))((x) => f((...a) => x(x)(...a)));
console.log(Y((r) => (n) => (n < 2 ? n : r(n - 1) + r(n - 2)))(15));
function trampoline(f) { return (...a) => { let r = f(...a); while (typeof r === "function") r = r(); return r; }; }
const sumTo = trampoline(function s(n, acc = 0) { return n === 0 ? acc : () => s(n - 1, acc + n); });
console.log(sumTo(100000));
function deep(n) { return n === 0 ? 0 : 1 + deep(n - 1); }
console.log(deep(5000));
try { (function inf() { inf(); })(); } catch (e) { console.log(e.name, e.message); }
