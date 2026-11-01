// apply and construct traps: logging, memoizing, currying.
const trace = (fn, log) => new Proxy(fn, { apply(t, th, a) { const r = Reflect.apply(t, th, a); log.push(`${t.name}(${a})=${r}`); return r; }, construct(t, a) { log.push("new " + t.name); return Reflect.construct(t, a); } });
const log = [], add = trace(function add(a, b) { return a + b; }, log); add(1, 2); add.call(null, 3, 4); add.apply(null, [5, 6]); console.log(log, add.name, add.length, typeof add);
class P { constructor(x) { this.x = x; } } const Pp = trace(P, log); console.log(new Pp(1), new Pp(2) instanceof P, log.at(-1));
const memo = (f) => { const c = new Map(); return new Proxy(f, { apply(t, th, a) { const k = a.join(); if (!c.has(k)) c.set(k, Reflect.apply(t, th, a)); return c.get(k); } }); }; let n = 0; const s = memo((x) => (n++, x * x)); console.log(s(3), s(3), n);
const chain = () => { const parts = []; const p = new Proxy(() => {}, { get: (_, k) => (typeof k === "symbol" ? undefined : k === "toString" ? () => parts.join(".") : (parts.push(k), p)), apply: (_, __, a) => (parts[parts.length - 1] += `(${a})`, p) }); return p; }; console.log(String(chain().a.b(1, 2).c()));
