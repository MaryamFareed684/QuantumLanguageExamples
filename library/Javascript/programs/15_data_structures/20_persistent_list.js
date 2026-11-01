// Immutable persistent stacks with structural sharing.
const Nil = Object.freeze({ empty: true });
const cons = (h, t = Nil) => Object.freeze({ h, t, empty: false });
const toA = (l) => (l.empty ? [] : [l.h, ...toA(l.t)]);
const map = (l, f) => (l.empty ? Nil : cons(f(l.h), map(l.t, f)));
const rev = (l, a = Nil) => (l.empty ? a : rev(l.t, cons(l.h, a)));
const a = cons(1, cons(2, cons(3))), b = cons(0, a.t);
console.log(toA(a), toA(b), a.t === b.t, toA(map(a, (x) => x * 2)), toA(rev(a)), Nil, cons(1));
try { (function () { "use strict"; a.h = 9; })(); } catch (e) { console.log(e.name); }
