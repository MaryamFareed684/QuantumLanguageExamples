// WeakMap and WeakSet for private data and marks.
const priv = new WeakMap();
class P { constructor(n) { priv.set(this, { n }); } get name() { return priv.get(this).n; } }
const p = new P("ok");
console.log(p.name, p, priv.has(p), priv.has({}), priv.get({}), priv.delete(p), priv.has(p));
const seen = new WeakSet(); const o = {};
console.log(seen.add(o) === seen, seen.has(o), seen.delete(o), seen.has(o));
for (const k of [1, "s", null]) { try { new WeakMap().set(k, 1); } catch (e) { console.log(e.name + ": " + e.message); } }
try { new WeakSet().add(1); } catch (e) { console.log(e.name + ": " + e.message); }
console.log(new WeakMap(), new WeakSet(), typeof WeakRef, new WeakRef(o).deref() === o, Object.prototype.toString.call(new WeakMap()));
const clone = (x, m = new WeakMap()) => { if (typeof x !== "object" || !x) return x; if (m.has(x)) return m.get(x); const c = Array.isArray(x) ? [] : {}; m.set(x, c); for (const k of Object.keys(x)) c[k] = clone(x[k], m); return c; };
const cy = { a: 1 }; cy.me = cy; const cc = clone(cy); console.log(cc.me === cc, cc !== cy, cc);
