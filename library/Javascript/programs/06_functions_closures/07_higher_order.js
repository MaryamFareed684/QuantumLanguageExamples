// Functions taking and returning functions: once, after, debounce-like.
const once = (f) => { let done = false, r; return (...a) => { if (!done) { done = true; r = f(...a); } return r; }; };
const after = (n, f) => (...a) => (--n <= 0 ? f(...a) : undefined);
const times = (n, f) => Array.from({ length: n }, (_, i) => f(i));
const not = (f) => (...a) => !f(...a);
const init = once((x) => { console.log("init", x); return x * 2; });
console.log(init(2), init(9));
const a3 = after(3, () => "go");
console.log(a3(), a3(), a3(), a3());
console.log(times(3, (i) => i * i), [1, 2, 3].filter(not((x) => x % 2)));
const counted = (f) => { const w = (...a) => (w.calls++, f(...a)); w.calls = 0; return w; };
const m = counted(Math.abs); m(-1); m(-2); console.log(m.calls);
