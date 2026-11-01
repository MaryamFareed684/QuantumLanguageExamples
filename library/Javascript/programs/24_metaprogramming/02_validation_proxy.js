// Proxies that validate writes and enforce types.
const typed = (schema) => new Proxy({}, { set(t, k, v) { if (!(k in schema)) throw new ReferenceError(`unknown field ${k}`); if (typeof v !== schema[k]) throw new TypeError(`${k} must be ${schema[k]}, got ${typeof v}`); t[k] = v; return true; } });
const u = typed({ name: "string", age: "number" }); u.name = "A"; u.age = 1;
for (const [k, v] of [["age", "x"], ["zzz", 1]]) { try { u[k] = v; } catch (e) { console.log(e.name, e.message); } }
console.log(u, { ...u });
const ro = (o) => new Proxy(o, { set() { throw new Error("readonly"); }, deleteProperty() { throw new Error("readonly"); }, get: (t, k) => (typeof t[k] === "object" && t[k] ? ro(t[k]) : t[k]) });
const r = ro({ a: { b: 1 } }); console.log(r.a.b); try { r.a.b = 2; } catch (e) { console.log(e.message); }
"use strict"; const f = new Proxy({}, { set: () => false }); f.x = 1; console.log(f.x); (function () { "use strict"; try { f.x = 1; } catch (e) { console.log(e.name, e.message); } })();
