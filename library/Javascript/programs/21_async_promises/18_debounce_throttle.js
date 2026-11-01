// Debounce and throttle with timers.
const debounce = (f, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => f(...a), ms); }; };
const throttle = (f, n) => { let c = 0; return (...a) => (c++ % n === 0 ? f(...a) : undefined); };
const d = debounce((x) => console.log("debounced", x), 3); d(1); d(2); d(3);
setTimeout(() => d(4), 20);
const t = throttle((x) => console.log("throttled", x), 3); for (let i = 0; i < 7; i++) t(i);
const memoA = (f) => { const m = new Map(); return (k) => m.get(k) ?? (m.set(k, f(k)), m.get(k)); }; let n = 0; const load = memoA(async (k) => (n++, k * 2)); Promise.all([load(1), load(1), load(2)]).then((v) => console.log(v, n));
