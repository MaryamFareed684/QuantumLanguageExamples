// Query helpers over a table of records.
const emp = [{ n: "Ann", d: "eng", s: 120, y: 2015 }, { n: "Bob", d: "ops", s: 80, y: 2019 }, { n: "Cid", d: "eng", s: 95, y: 2021 }, { n: "Dee", d: "hr", s: 70, y: 2012 }];
const where = (q) => (r) => Object.entries(q).every(([k, v]) => (typeof v === "function" ? v(r[k]) : r[k] === v));
console.log(emp.filter(where({ d: "eng" })).map((e) => e.n), emp.filter(where({ s: (x) => x > 90, y: (y) => y < 2020 })).map((e) => e.n), emp.find(where({ n: "Zed" })));
const idx = Object.fromEntries(emp.map((e) => [e.n, e])); console.log(idx.Bob.s, Object.keys(idx), emp.reduce((m, e) => (e.s > m.s ? e : m)).n);
const byDept = emp.reduce((m, e) => ({ ...m, [e.d]: (m[e.d] ?? 0) + e.s }), {}); console.log(byDept);
