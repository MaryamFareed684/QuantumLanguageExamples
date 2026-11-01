// Deduplicating objects by key, and order preservation.
const rows = [{ id: 1, v: "a" }, { id: 2, v: "b" }, { id: 1, v: "c" }, { id: 3, v: "a" }];
const firstBy = (a, k) => { const s = new Set(); return a.filter((r) => !s.has(r[k]) && s.add(r[k])); };
const lastBy = (a, k) => [...new Map(a.map((r) => [r[k], r])).values()];
console.log(firstBy(rows, "id"), lastBy(rows, "id"), firstBy(rows, "v").length);
console.log(new Set(rows.map((r) => r.v)).size, [...new Set(rows.map((r) => JSON.stringify({ v: r.v })))]);
