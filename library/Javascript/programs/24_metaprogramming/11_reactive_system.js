// A small reactive store using Proxy and dependency tracking.
let active = null; const deps = new WeakMap();
const track = (t, k) => { if (!active) return; let m = deps.get(t); if (!m) deps.set(t, (m = new Map())); let s = m.get(k); if (!s) m.set(k, (s = new Set())); s.add(active); };
const trigger = (t, k) => deps.get(t)?.get(k)?.forEach((f) => f());
const reactive = (o) => new Proxy(o, { get(t, k, r) { track(t, k); const v = Reflect.get(t, k, r); return v && typeof v === "object" ? reactive(v) : v; }, set(t, k, v, r) { const old = t[k], ok = Reflect.set(t, k, v, r); if (old !== v) trigger(t, k); return ok; } });
const effect = (f) => { const run = () => { active = run; f(); active = null; }; run(); }, computed = (f) => { const c = { }; effect(() => { c.value = f(); }); return c; };
const s = reactive({ n: 1, user: { name: "a" }, list: [1] }); const dbl = computed(() => s.n * 2); effect(() => console.log("n is", s.n, "dbl", dbl.value)); effect(() => console.log("name", s.user.name));
s.n = 2; s.n = 2; s.user.name = "b"; s.other = 1; s.list.push(2); console.log(dbl.value, s.list.length);
