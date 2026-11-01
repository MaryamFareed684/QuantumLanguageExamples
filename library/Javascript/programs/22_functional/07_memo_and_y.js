// Fixed-point combinators and memoized recursion.
const Y = (f) => ((x) => f((v) => x(x)(v)))((x) => f((v) => x(x)(v)));
const fact = Y((s) => (n) => (n < 2 ? 1 : n * s(n - 1))); console.log(fact(10));
const memoY = (f) => { const m = new Map(), g = (n) => m.has(n) ? m.get(n) : (m.set(n, f(g)(n)), m.get(n)); return g; };
console.log(memoY((s) => (n) => (n < 2 ? n : s(n - 1) + s(n - 2)))(80));
const TRUE = (a) => (b) => a, FALSE = (a) => (b) => b, IF = (c) => (t) => (e) => c(t)(e), ZERO = (f) => (x) => x, SUCC = (n) => (f) => (x) => f(n(f)(x)), toI = (n) => n((x) => x + 1)(0), ADD = (a) => (b) => (f) => (x) => a(f)(b(f)(x)), MUL = (a) => (b) => (f) => a(b(f));
const TWO = SUCC(SUCC(ZERO)), THREE = SUCC(TWO); console.log(IF(TRUE)("t")("e"), IF(FALSE)("t")("e"), toI(ADD(TWO)(THREE)), toI(MUL(TWO)(THREE)), toI(MUL(THREE)(MUL(THREE)(THREE))));
