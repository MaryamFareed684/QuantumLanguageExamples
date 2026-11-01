// Resolving package dependencies with versions and cycles.
const pk = { app: ["web", "db"], web: ["http", "log"], db: ["log", "pool"], http: [], log: [], pool: ["log"], a: ["b"], b: ["c"], c: ["a"] };
function res(p) { const o = [], st = new Map(); const v = (x, tr) => { if (st.get(x) === 2) return; if (st.get(x) === 1) throw new Error("cycle: " + [...tr, x].join(" > ")); if (!(x in pk)) throw new Error("missing " + x); st.set(x, 1); pk[x].forEach((d) => v(d, [...tr, x])); st.set(x, 2); o.push(x); }; v(p, []); return o; }
console.log(res("app"), res("log"));
for (const p of ["a", "zzz"]) { try { res(p); } catch (e) { console.log(e.message); } }
