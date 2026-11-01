// A sales pipeline: parse, filter, group, join, rank.
const sales = "ann,tea,3,2.5|bob,mug,1,8|ann,mug,2,8|cid,tea,10,2.5|bob,tea,4,2.5|dee,hat,1,20";
const cat = { tea: "food", mug: "home", hat: "wear" };
const rows = sales.split("|").map((r) => { const [who, item, q, p] = r.split(","); return { who, item, cat: cat[item], total: q * p }; });
const group = (k) => rows.reduce((m, r) => m.set(r[k], (m.get(r[k]) ?? 0) + r.total), new Map());
const rank = (m) => [...m].sort((a, b) => b[1] - a[1]).map(([k, v], i) => `${i + 1}. ${k} ${v.toFixed(2)}`);
console.log(rank(group("who")), rank(group("cat")), group("item"));
const pivot = rows.reduce((m, r) => { (m[r.who] ??= {})[r.cat] = (m[r.who][r.cat] ?? 0) + r.total; return m; }, {}); console.log(pivot);
console.log(rows.filter((r) => r.total > 10).map((r) => r.who), rows.some((r) => r.cat === "wear"), rows.every((r) => r.total > 0));
