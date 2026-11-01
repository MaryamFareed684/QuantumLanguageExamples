// Continuation-passing style and trampolined recursion.
const facK = (n, k) => (n < 2 ? k(1) : facK(n - 1, (v) => k(n * v))); console.log(facK(10, (x) => x));
const fibK = (n, k) => (n < 2 ? k(n) : fibK(n - 1, (a) => fibK(n - 2, (b) => k(a + b)))); console.log(fibK(15, (x) => x));
const tr = (f) => { while (typeof f === "function") f = f(); return f; }; const sumT = (n, a = 0) => (n === 0 ? a : () => sumT(n - 1, a + n)); console.log(tr(sumT(200000)));
const even = (n) => (n === 0 ? true : () => odd(n - 1)), odd = (n) => (n === 0 ? false : () => even(n - 1)); console.log(tr(even(100001)), tr(odd(100001)));
const callcc = (f) => { const tag = {}; try { return f((v) => { tag.v = v; throw tag; }); } catch (e) { if (e === tag) return tag.v; throw e; } }; console.log(callcc((k) => { [1, 2, 3].forEach((x) => { if (x === 2) k("escaped " + x); }); return "normal"; }), callcc(() => "plain"));
