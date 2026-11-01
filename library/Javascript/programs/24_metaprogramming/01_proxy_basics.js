// Proxy traps: get, set, has, deleteProperty, ownKeys.
const log = [];
const p = new Proxy({ a: 1 }, {
  get(t, k, r) { log.push(`get ${String(k)}`); return Reflect.get(t, k, r); },
  set(t, k, v, r) { log.push(`set ${k}=${v}`); return Reflect.set(t, k, v, r); },
  has(t, k) { log.push(`has ${k}`); return k in t; },
  deleteProperty(t, k) { log.push(`del ${k}`); return delete t[k]; },
  ownKeys(t) { log.push("keys"); return Reflect.ownKeys(t); },
});
p.a; p.b = 2; "a" in p; delete p.a; Object.keys(p);
console.log(log, typeof p, p instanceof Object, JSON.stringify(p));
const d = new Proxy({}, { get: (t, k) => (k in t ? t[k] : `no ${String(k)}`) }); d.x = 1; console.log(d.x, d.y);
const { proxy, revoke } = Proxy.revocable({ v: 1 }, {}); console.log(proxy.v); revoke(); try { proxy.v; } catch (e) { console.log(e.name, e.message); }
