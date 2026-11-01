// Lazy evaluation with thunks and self-replacing getters.
const lazy = (f) => { let done = false, v; return () => (done ? v : ((done = true), (v = f()))); };
let n = 0;
const val = lazy(() => ++n);
console.log(val(), val(), n);
const o = { get heavy() { console.log("computing"); Object.defineProperty(this, "heavy", { value: 42 }); return 42; } };
console.log(o.heavy, o.heavy);
const stream = (f, s) => ({ head: s, get tail() { return stream(f, f(s)); } });
const take = (st, k) => (k ? [st.head, ...take(st.tail, k - 1)] : []);
console.log(take(stream((x) => x * 2, 1), 8));
