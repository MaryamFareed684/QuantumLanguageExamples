// Records to a formatted table with computed column widths.
const rows = [{ city: "Paris", pop: 2148, rain: 637.4 }, { city: "Reykjavik", pop: 131, rain: 870 }, { city: "Lima", pop: 9750, rain: 7.1 }];
const cols = Object.keys(rows[0]);
const width = (c) => Math.max(c.length, ...rows.map((r) => String(r[c]).length));
const line = (f) => cols.map((c) => f(c).padEnd(width(c))).join(" | ");
console.log(line((c) => c.toUpperCase()));
console.log(cols.map((c) => "-".repeat(width(c))).join("-+-"));
rows.sort((a, b) => b.pop - a.pop).forEach((r) => console.log(line((c) => String(r[c]))));
console.table === undefined || console.log(typeof console.table);
